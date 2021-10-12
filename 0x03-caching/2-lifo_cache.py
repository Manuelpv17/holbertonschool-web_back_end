#!/usr/bin/python3
""" 2. LIFO Caching  """

BaseCaching = __import__('base_caching').BaseCaching


class LIFOCache(BaseCaching):
    """ 2. LIFO Caching  """

    def __init__(self):
        """ Constructor """
        super().__init__()
        self.LIFO = []

    def put(self, key, item):
        """ Put in cache """

        if key and item:
            if len(self.cache_data) >= self.MAX_ITEMS:
                if key in self.cache_data:
                    del self.cache_data[key]
                    self.LIFO.remove(key)
                else:
                    del self.cache_data[self.LIFO[self.MAX_ITEMS - 1]]
                    discarded = self.LIFO.pop(self.MAX_ITEMS - 1)
                    print("DISCARD:", discarded)

            self.cache_data[key] = item
            self.LIFO.append(key)

    def get(self, key):
        """ get from cache """

        if key in self.cache_data:
            return self.cache_data[key]
        return None
