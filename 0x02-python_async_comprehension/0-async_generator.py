#!/usr/bin/env python3

""" 0. Async Generator  """

from asyncio import sleep
from random import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """ 0. Async Generator  """

    for _ in range(10):
        yield random()
        await sleep(1)
