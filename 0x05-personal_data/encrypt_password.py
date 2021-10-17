#!/usr/bin/env python3
""" Encrypting passwords """

import bcrypt


def hash_password(password: str) -> bytes:
    """ 5. Encrypting passwords  """

    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())


def is_valid(hashed_password: bytes, password: str) -> bool:
    """ 6. Check valid password  """

    return bcrypt.checkpw(bytes(password, "ascii"), hashed_password)
