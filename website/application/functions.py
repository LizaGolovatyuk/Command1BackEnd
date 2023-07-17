"""
Содержит вспомогательные функции для работы приложения
"""

from jinja2 import Template
import psycopg2
from psycopg2._psycopg import connection
from .database import config


def sql(filename, **kwargs) -> str:
    script = ""
    try:
        with open(f'application/sql/scripts/{filename}', 'r', encoding='utf-8') as file:
            script = file.read()
    except Exception as ex:
        pass # todo Добавить логгер
    return Template(script).render(**kwargs)


def db_connecting() -> connection:
    # todo логгер и обработка исключений
    return psycopg2.connect(
            host=config.host,
            user=config.user,
            password=config.password,
            database=config.db_name
        )
