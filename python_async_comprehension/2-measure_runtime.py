#!/usr/bin/env python3
"""Module to measure the runtime of async_comprehension coroutines."""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Return the runtime of executing four async_comprehension calls in parallel."""
    start_time = time.perf_counter()
    tasks = [async_comprehension() for _ in range(4)]
    await asyncio.gather(*tasks)
    end_time = time.perf_counter()
    return end_time - start_time


if __name__ == "__main__":
    # Run measure_runtime and display the total runtime
    runtime = asyncio.run(measure_runtime())
    print(f"Total runtime: {runtime}")
