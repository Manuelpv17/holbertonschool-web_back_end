#!/usr/bin/python3
""" 1. FIFO caching """

BaseCaching = __import__('base_caching').BaseCaching


class FIFOCache(BaseCaching):
    """ 1. FIFO caching """

    def __init__(self):
        """ Constructor """

        super().__init__()
        self.FIFO = []

    def put(self, key, item):
        """ Put in cache """

        if key and item:
            if key in self.cache_data:
                self.cache_data[key] = item
                return

            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                discarded = self.FIFO.pop(0)
                del self.cache_data[discarded]
                print("DISCARD:", discarded)

            self.cache_data[key] = item
            self.FIFO.append(key)

    def get(self, key):
        """ get from cache """

        if key in self.cache_data:
            return self.cache_data[key]
        return None
