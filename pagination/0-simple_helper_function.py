#!/usr/bin/env python3
"""
Simple helper function for pagination calculations.

This module provides a utility function for calculating pagination indexes.
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate start and end indexes for pagination.
    
    The function takes a page number (1-indexed) and page size, then returns
    the corresponding start and end indexes for slicing a list or dataset.
    
    Args:
        page (int): The page number (1-indexed, first page is 1)
        page_size (int): Number of items per page
    
    Returns:
        Tuple[int, int]: A tuple containing (start_index, end_index)
                        where start_index is inclusive and end_index is exclusive
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return start_index, end_index