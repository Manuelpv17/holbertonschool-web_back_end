#!/usr/bin/env python3
"""1. Let's execute multiple
    coroutines at the same time with async """

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """1. Let's execute multiple
    coroutines at the same time with async """

    aux1 = []
    aux2 = []

    for _ in range(n):
        aux1.append(wait_random(max_delay))

    for a2 in asyncio.as_completed(aux1):
        result = await a2
        aux2.append(result)

    return aux2
