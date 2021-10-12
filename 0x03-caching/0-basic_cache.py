#!/usr/bin/python3

""" 0. Basic dictionary """

BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """ 0. Basic dictionary """

    def put(self, key, item):
        """ Put in cache """

        if key and item:
            self.cache_data[key] = item

    def get(self, key):
        """ get from cache """

        if key in self.cache_data:
            return self.cache_data[key]
        return None
