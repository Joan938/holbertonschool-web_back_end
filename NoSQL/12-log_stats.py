#!/usr/bin/env python3
"""
Provides some stats about Nginx logs stored in MongoDB
"""

from pymongo import MongoClient


def log_stats():
    """
    Provides some stats about Nginx logs stored in MongoDB
    """
    # Connect to MongoDB
    client = MongoClient('mongodb://127.0.0.1:27017')
    
    # Access the logs database and nginx collection
    db = client.logs
    collection = db.nginx
    
    # Get total number of documents
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")
    
    # Display Methods section
    print("Methods:")
    
    # Count documents for each HTTP method
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")
    
    # Count documents with method=GET and path=/status
    status_check_count = collection.count_documents({
        "method": "GET",
        "path": "/status"
    })
    print(f"{status_check_count} status check")


if __name__ == "__main__":
    log_stats()