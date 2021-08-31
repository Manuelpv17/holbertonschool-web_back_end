#!/usr/bin/env python3

"""0x0B. Redis basic project"""

import redis
import uuid
from typing import Union, Optional, Callable


class Cache:
    def __init__(self):
        """ Init """

        self._redis = redis.Redis()
        self._redis.flushdb()

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
