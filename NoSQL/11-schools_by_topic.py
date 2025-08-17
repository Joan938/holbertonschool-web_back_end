#!/usr/bin/env python3
"""
Module that provides a function to find schools by topic
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of school having a specific topic
    
    Args:
        mongo_collection: pymongo collection object
        topic (string): topic searched
    
    Returns:
        List of schools that have the specified topic
    """
    return list(mongo_collection.find({"topics": topic}))