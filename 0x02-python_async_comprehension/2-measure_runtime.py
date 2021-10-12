#!/usr/bin/env python3

""" 2. Run time for four parallel comprehensions """

from asyncio import gather
from time import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """ 2. Run time for four parallel comprehensions  """

    start = time()
    await gather(async_comprehension(),
                 async_comprehension(),
                 async_comprehension(),
                 async_comprehension())

    end = time()
    return end - start
