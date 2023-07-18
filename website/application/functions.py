"""
Содержит вспомогательные функции для работы приложения
"""

from jinja2 import Template
import psycopg2
from psycopg2._psycopg import connection, cursor
from .database import config
from typing import List


def sql(filename, **kwargs) -> str:
    script = ""
    try:
        with open(f'application/database/scripts/{filename}', 'r', encoding='utf-8') as file:
            script = file.read()
    except Exception as ex:
        pass
    return Template(script).render(**kwargs)


def db_connecting() -> connection:
    return psycopg2.connect(
            host=config.host,
            user=config.user,
            password=config.password,
            database=config.db_name
        )


def to_url(string: str) -> str:
    return '%20'.join(string.split(' '))


def dzip(cursor: cursor) -> List[object]:
    return list(
                map(lambda data: {key: val for key, val in zip([title.name for title in cursor.description],
                                                                data)},
                    cursor.fetchall())
               )
