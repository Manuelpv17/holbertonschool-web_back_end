#!/usr/bin/env python3
""" 8. Complex types - functions """
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ 8. Complex types - functions  """
    return (lambda mult: multiplier * mult)
