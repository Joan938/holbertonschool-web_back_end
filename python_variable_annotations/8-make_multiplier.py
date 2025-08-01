#!/usr/bin/env python3
"""Module to create a multiplier function."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by a given multiplier."""
    def multiplier_function(value: float) -> float:
        """Return the product of value and multiplier."""
        return value * multiplier
    return multiplier_function
