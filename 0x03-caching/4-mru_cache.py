#!/usr/bin/python3
""" 4. MRU Caching   """

BaseCaching = __import__('base_caching').BaseCaching


class MRUCache(BaseCaching):
    """ 4. MRU Caching """

    def __init__(self):
        """ Constructor """
        super().__init__()
        self.MRU = []

    def put(self, key, item):
        """ Put in cache """

        if key and item:
            if len(self.cache_data) >= self.MAX_ITEMS:
                if key in self.cache_data:
                    del self.cache_data[key]
                    self.MRU.remove(key)
                else:
                    del self.cache_data[self.MRU[self.MAX_ITEMS - 1]]
                    discarded = self.MRU.pop(self.MAX_ITEMS - 1)
                    print("DISCARD:", discarded)

            self.cache_data[key] = item
            self.MRU.append(key)

    def get(self, key):
        """ get from cache """

        if key in self.cache_data:
            self.MRU.remove(key)
            self.MRU.append(key)
            return self.cache_data[key]

        return None
