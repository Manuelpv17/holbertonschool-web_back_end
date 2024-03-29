#!/usr/bin/env python3

"""0x0B. Redis basic project"""

import redis
import uuid
from typing import Union, Optional, Callable
from functools import wraps


def replay(method: Callable):
    """ replay history of calls to a function """
    self_ = method.__self__
    s_name = method.__qualname__
    s_key = self_.get(s_name)
    if s_key:
        times = s_key.decode("utf-8")
        inputs = self_._redis.lrange(s_name + ":inputs", 0, -1)
        outputs = self_._redis.lrange(s_name + ":outputs", 0, -1)

        print(f"{s_name} was called {times} times:")
        v_zip = zip(inputs, outputs)
        result = list(v_zip)
        for i, j in result:
            name = i.decode("utf-8")
            value = j.decode("utf-8")
            print(f"{s_name}(*{name}) -> {value}")


def count_calls(method: Callable) -> Callable:
    """ count number of calls - decorator """

    key = method.__qualname__

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """ Wrapper for decorator functionality """
        self._redis.incr(key)
        return method(self, *args, **kwargs)

    return wrapper


def call_history(method: Callable) -> Callable:
    """ history of inputs"""

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """ Wrapper for decorator functionality """
        self._redis.rpush(method.__qualname__ + ":inputs", str(args))
        output = str(method(self, *args, **kwargs))
        self._redis.rpush(method.__qualname__ +
                          ":outputs", output)
        return output

    return wrapper


class Cache:
    """ Class for saving cache on redis """

    def __init__(self):
        """ constructor for class Cache """

        self._redis = redis.Redis()
        self._redis.flushdb()

    @call_history
    @count_calls
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """store string in redis """
        random_key = str(uuid.uuid4())
        self._redis.set(random_key, data)

        return random_key

    def get(self, key: str,
            fn: Optional[Callable] = None) -> Union[str, bytes, int, float]:
        """ recover value """
        if fn:
            return fn(self._redis.get(key))

        return self._redis.get(key)

    def get_str(self, key: str) -> str:
        """ redis to str """
        value = self._redis.get(key)
        return value.decode("utf-8")

    def get_int(self, key: str) -> int:
        """ redis to int """
        value = self._redis.get(key)
        try:
            value = int(value.decode("utf-8"))
        except Exception:
            value = 0
        return value
