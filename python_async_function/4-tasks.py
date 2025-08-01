#!/usr/bin/env python3
"""Run multiple `task_wait_random` coroutines and return delays in order."""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Return a list of delays from n task_wait_random coroutines."""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    results = []
    for completed_task in asyncio.as_completed(tasks):
        delay = await completed_task
        results.append(delay)
    return results
