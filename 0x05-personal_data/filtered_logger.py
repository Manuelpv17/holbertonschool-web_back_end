#!/usr/bin/env python3
""" 0. Regex-ing  """

from typing import List
import re
import logging
import mysql.connector
import os


def filter_datum(fields: List[str], redaction: str,
                 message: str, separator: str) -> str:
    """ 0. Regex-ing  """
    for field in fields:
        message = re.sub(field + "=.*?" + separator,
                         field + "=" + redaction + separator, message)
    return message


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """ Filters values in incoming log records using filter_datum """
        return filter_datum(self.fields, self.REDACTION, super(
            RedactingFormatter, self).format(record), self.SEPARATOR)


PII_FIELDS = ("name", "email", "phone", "ssn", "password")


def get_logger() -> logging.Logger:
    """ 2. Create logger  """

    dataLogger = logging.getLogger('user_data')
    dataLogger.setLevel(logging.INFO)
    dataLogger.propagate = False

    handler = logging.StreamHandler()
    handler.setFormatter(RedactingFormatter(fields=PII_FIELDS))
    dataLogger.addHandler(handler)

    return dataLogger


def get_db() -> mysql.connector.connection.MySQLConnection:
    """ 3. Connect to secure database  """
    return mysql.connector.connect(
        host=os.getenv('PERSONAL_DATA_DB_HOST'),
        database=os.getenv('PERSONAL_DATA_DB_NAME'),
        user=os.getenv('PERSONAL_DATA_DB_USERNAME'),
        password=os.getenv('PERSONAL_DATA_DB_PASSWORD')
    )


def main():
    """ Read and filter data  """

    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users;")

    for row in cursor:
        record = ''
        for index, header in enumerate(cursor.column_names):
            record += f"{header}={row[index]}; "

        formatter = RedactingFormatter(PII_FIELDS)
        print(formatter.format(
            logging.LogRecord("user_data", logging.INFO,
                              None, None, record, None, None)))

    cursor.close()
    db.close()


if __name__ == "__main__":
    main()
