#!/usr/bin/env python3
"""Module to create a tuple with a string key and the squared value."""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple containing the key and the square of the value."""
    return k, float(v ** 2)
