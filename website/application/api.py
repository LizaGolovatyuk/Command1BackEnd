"""
Модуль для api-представлений
"""

from typing import Callable
from flask import Request, Response, abort
from psycopg2._psycopg import connection
from .functions import sql
from .parsing import BirdParser
import json


class Api:
    __request__: Request = None
    __db_connection__: connection = None

    def __new__(cls, *args, **kwargs):
        return Api.__call__(*args, **kwargs)
    @staticmethod
    def __call__(db_connection, request: Request):
        Api.__db_connection__ = db_connection
        Api.__request__ = request
        return Api.__inner_decorator__

    @staticmethod
    def __inner_decorator__(function: Callable[[str], str]):
        return Api.__wrapper__

    @staticmethod
    def __wrapper__(command: str):
        if Api.__request__.method != 'GET':
            abort(400)
        else:
            with Api.__db_connection__.cursor() as cursor:
                count = int(Api.__request__.args.get('count', 4))
                bird_title = Api.__request__.args.get('bird_title', 'тёмный козодой')
                res_dict = dict()
                match command:
                    case 'birds':
                        res_dict['request'] = 'birds'
                        cursor.execute(sql('select_all_birds.sql'))
                        res_dict['result'] = list(
                            map(lambda tpl: {key: val for key, val in zip([title.name for title in cursor.description],
                                                                           tpl)},
                                cursor.fetchall())
                                                 )
                    case 'random_bird':
                        res_dict['request'] = 'random_bird'
                        cursor.execute(sql('select_random_bird.sql'))
                        res_dict['result'] = list(
                            map(lambda tpl: {key: val for key, val in zip([title.name for title in cursor.description],
                                                                           tpl)},
                                cursor.fetchall())
                                                 )[0]
                        while res_dict['result']['species_titleru'] is None:
                            cursor.execute(sql('select_random_bird.sql'))
                            res_dict['result'] = list(
                                map(lambda tpl: {key: val for key, val in
                                                 zip([title.name for title in cursor.description],
                                                      tpl)},
                                    cursor.fetchall())
                                                     )[0]
                    case 'birds_by':
                        res_dict['request'] = f'{command}?bird_title={bird_title}&count={count}'
                        cursor.execute(sql('select_birds_by_family.sql', bird_title=bird_title, bird_count=count))
                        res_dict['result'] = list(
                            map(lambda tpl: {key: val for key, val in zip([title.name for title in cursor.description],
                                                                           tpl)},
                                cursor.fetchall())
                                                 )
                    case 'birds_by_one_family':
                        res_dict['request'] = f'{command}?count={count}'
                        cursor.execute(sql('select_birds_by_one_family.sql', bird_count=count))
                        res_dict['result'] = list(
                            map(lambda tpl: {key: val for key, val in zip([title.name for title in cursor.description],
                                                                           tpl)},
                                cursor.fetchall())
                                                 )
                        for bird in res_dict['result']:
                            parser = BirdParser(db_connection=Api.__db_connection__,
                                                bird_latin=bird['species_latin'])
                            bird['species_ebirdId'] = parser.get_ebird_code()
                            bird['species_avatar'] = parser.get_avatar_patch()
                            bird['species_video'] = parser.get_video_patch()
                            bird['species_preview'] = parser.get_preview_patch()
                    case _:
                        abort(404)
                response = Response(
                    response=json.dumps(res_dict, indent=4, ensure_ascii=False),
                    mimetype='application/json',
                    status=200
                )
                response.headers.add("Access-Control-Allow-Origin", "*")
                return response

