#!/usr/bin/env python3

"""0x0B. Redis basic project"""

import redis
import uuid
from typing import Union, Optional, Callable
from functools import wraps


def count_calls(method: Callable) -> Callable:
    """ count number of calls - decorator """

    key = method.__qualname__

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """ Wrapper """
        self._redis.incr(key)
        return method(self, *args, **kwargs)

    return wrapper


def call_history(method: Callable) -> Callable:
    """ history of inputs"""

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """wrapper"""
        self._redis.rpush(method.__qualname__ + ":inputs", str(args))

        output = str(method(self, *args, **kwargs))
        self._redis.rpush(method.__qualname__ +
                          ":outputs", output)
        return output

    return wrapper


class Cache:
    def __init__(self):
        """ Init """

        self._redis = redis.Redis()
        self._redis.flushdb()

    @call_history
    @count_calls
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """store string in redis"""
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
        """ to str """
        value = self._redis.get(key)
        return value.decode("utf-8")

    def get_int(self, key: str) -> int:
        """ to int """
        value = self._redis.get(key)
        try:
            value = int(value.decode("utf-8"))
        except Exception:
            value = 0
        return value
