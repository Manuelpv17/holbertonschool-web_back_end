#!/usr/bin/env python3
""" 4. Tasks  """

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """ 4. Tasks """

    aux1 = []
    aux2 = []

    for _ in range(n):
        aux1.append(task_wait_random(max_delay))

    for a1 in asyncio.as_completed(aux1):
        result = await a1
        aux2.append(result)

    return aux2
