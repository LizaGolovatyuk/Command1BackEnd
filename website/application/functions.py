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


def dzip(cursor: cursor, base_url: str) -> List[object]:
    lst = list(
               map(lambda data: {key: val for key, val in zip([title.name for title in cursor.description],
                                                               data)},
               cursor.fetchall())
              )
    for d in lst:
        keys = d.keys()
        if 'species_avatar' in keys:
            d['species_avatar'] = f'{base_url}avatar?filename={d["species_avatar"]}'
        if 'species_preview' in keys:
            d['species_preview'] = f'{base_url}preview?filename={d["species_preview"]}'
        if 'species_video' in keys and not (d['species_video'] is None):
            d['species_video'] = f'{base_url}video?filename={d["species_video"]}'
    return lst
