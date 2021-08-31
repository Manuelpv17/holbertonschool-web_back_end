#!/usr/bin/env python3

"""0x0B. Redis basic project"""

import redis
import uuid
from typing import Union


class Cache:
    def __init__(self):
        """ Init """

        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """store Method"""
        random_key = str(uuid.uuid4())
        self._redis.set(random_key, data)

        return random_key
