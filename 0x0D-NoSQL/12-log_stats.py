#!/usr/bin/env python3
""" 12. Log stats - pymongo """

from pymongo import MongoClient


client = MongoClient('mongodb://127.0.0.1:27017')
collection_nginx = client.logs.nginx

logs = collection_nginx.count_documents({})
print(f'{logs} logs')

if __name__ == "__main__":
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    print('Methods:')
    for method in methods:
        count = collection_nginx.count_documents({"method": method.lower()})
        print(f'\tmethod {method}: {count}')

    status = collection_nginx.count_documents(
        {"method": "GET", "path": "/status"}
    )

    print(f'{status} status check')
