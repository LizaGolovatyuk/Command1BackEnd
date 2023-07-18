"""
Модуль для api-представлений
"""

from typing import Callable
from flask import Request, Response, abort, url_for
from psycopg2._psycopg import connection
from .functions import sql, dzip
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
                filename = Api.__request__.args.get('filename', None)
                if isinstance(filename, str):
                    filename = filename.strip("'")
                res_dict = dict()
                res_dict['request'] = Api.__request__.url
                match command:
                    case 'birds':
                        cursor.execute(sql('select_all_birds.sql'))
                        res_dict['result'] = dzip(cursor, Api.__request__.url_root)
                    case 'random_bird':
                        cursor.execute(sql('select_random_bird.sql'))
                        res_dict['result'] = dzip(cursor, Api.__request__.url_root)[0]
                        while res_dict['result']['species_titleru'] is None:
                            cursor.execute(sql('select_random_bird.sql'))
                            res_dict['result'] = dzip(cursor, Api.__request__.url_root)[0]
                    case 'birds_by':
                        cursor.execute(sql('select_birds_by_family.sql', bird_title=bird_title, bird_count=count))
                        res_dict['result'] = dzip(cursor, Api.__request__.url_root)
                    case 'media_birds_by_one_family':
                        cursor.execute(sql('select_media_birds_by_one_family.sql', bird_count=count))
                        res_dict['result'] = dzip(cursor, Api.__request__.url_root)
                    case 'parse':
                        cursor.execute(sql('select_birds_by_count.sql', bird_count=count))
                        birds_list = dzip(cursor, Api.__request__.url_root)
                        for bird in birds_list:
                            parser = BirdParser(db_connection=Api.__db_connection__,
                                                bird_latin=bird['species_latin'],
                                                bird_id=bird['bird_id'])
                            bird['species_ebirdid'] = parser.get_ebird_code()
                            bird['species_avatar'] = f'{Api.__request__.url_root}avatar?filename={parser.get_avatar_patch()}'
                            bird['species_video'] = parser.get_video_patch()
                            if not (bird['species_video'] is None):
                                bird['species_video'] = f'{Api.__request__.url_root}video?filename={bird["species_video"]}'
                            bird['species_preview'] = f'{Api.__request__.url_root}preview?filename={parser.get_preview_patch()}'

                        res_dict['result'] = birds_list
                    case 'avatar':
                        if filename is None:
                            abort(404)
                        with open(f'application/database/images/{filename}', 'rb') as handler:
                            content = handler.read()
                        return Response(response=content,
                                        status=200,
                                        mimetype='image')
                    case 'video':
                        if filename is None:
                            abort(404)
                        with open(f'application/database/videos/{filename}', 'rb') as handler:
                            content = handler.read()
                        return Response(response=content,
                                        status=200,
                                        mimetype='video/mp4')
                    case 'preview':
                        if filename is None:
                            abort(404)
                        with open(f'application/database/previews/{filename}', 'rb') as handler:
                            content = handler.read()
                        return Response(response=content,
                                        status=200,
                                        mimetype='image')
                    case _:
                        abort(404)
                response = Response(
                    response=json.dumps(res_dict, indent=4, ensure_ascii=False),
                    mimetype='application/json',
                    status=200
                )
                response.headers.add("Access-Control-Allow-Origin", "*")
                return response

