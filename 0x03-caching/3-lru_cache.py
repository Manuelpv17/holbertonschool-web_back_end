#!/usr/bin/python3
""" 3. LRU Caching   """

BaseCaching = __import__('base_caching').BaseCaching


class LRUCache(BaseCaching):
    """ 3. LRU Caching   """

    def __init__(self):
        """ Constructor """
        super().__init__()
        self.LRU = []

    def put(self, key, item):
        """ Put in cache """

        if key and item:
            if len(self.cache_data) >= self.MAX_ITEMS:
                if key in self.cache_data:
                    del self.cache_data[key]
                    self.LRU.remove(key)
                else:
                    del self.cache_data[self.LRU[0]]
                    discarded = self.LRU.pop(0)
                    print("DISCARD:", discarded)

            self.cache_data[key] = item
            self.LRU.append(key)

    def get(self, key):
        """ get from cache """

        if key in self.cache_data:
            self.LRU.remove(key)
            self.LRU.append(key)
            return self.cache_data[key]

        return None
