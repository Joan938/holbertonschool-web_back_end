#!/usr/bin/env python3
"""Module to return a list of tuples of sequences and their lengths."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples with each sequence and its length."""
    return [(item, len(item)) for item in lst]
