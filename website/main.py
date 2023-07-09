import psycopg2
from flask import Flask, request, abort, render_template
from jinja2 import Template
import DBconfig as DB
from random import choices
import json

DEBUG = True
SECRET_KEY = 'fkweruy#fgjoi43@df45'

app = Flask(__name__)
app.config.from_object(__name__)

BASE_URL = 'http://127.0.0.1:5000'

db_connection = None


def sql(filename, **kwargs):
    script = ""
    with open(f'sql/{filename}', 'r', encoding='utf-8') as file:
        script = file.read()
    return Template(script).render(**kwargs)


def get_bird_info_by_title_ru(cursor, bird_title):
    cursor.execute(sql('bird_info_by_title_ru.sql', bird=bird_title))
    return {key: val for key, val in zip([title.name for title in cursor.description], cursor.fetchall()[0])}


def get_bird_info_by_id(cursor, id):
    cursor.execute(sql('bird_info_by_id.sql', bird_id=id))
    return {key: val for key, val in zip([title.name for title in cursor.description], cursor.fetchall()[0])}




@app.route('/<string:command>', methods=['GET'])
def index(command):
    """
    Список api команд:
        order?bird_title=<имя птицы>&bird_count=<количество>
        - возвращает массив видов птиц, допустимого базой данных размера (возможно будет меньше чем задано)
        принадлежащих тому же отряду, что и заданная птица

        family?bird_title=<имя птицы>&bird_count=<количество>
        - возвращает массив видов птиц, допустимого базой данных размера (возможно будет меньше чем задано)
        принадлежащих тому же семейству, что и заданная птица

        genus?bird_title=<имя птицы>&bird_count=<количество>
        - возвращает массив видов птиц, допустимого базой данных размера (возможно будет меньше чем задано)
        принадлежащих тому же роду, что и заданная птица
    """
    if request.method != 'GET':
        abort(400)
    else:
        if command not in ['birds', 'order', 'family', 'genus']:
            abort(404)
        with db_connection.cursor() as cursor:
            result = ""
            bird_title = request.args.get('bird_title', None)
            bird_count = int(request.args.get('bird_count', 0))
            cursor.execute(sql('bird_info_by_title_ru.sql', bird=bird_title))
            bird_info = get_bird_info_by_title_ru(cursor, bird_title)
            print(bird_info)
            res_dict = {
                'request': f'{command}?bird_title={bird_title}&bird_count={bird_count}',
                'good': True
            }
            match command:
                case 'order':
                    pass
                case 'family':
                    pass
                case 'genus':
                    cursor.execute(sql('bird_group_by_genus.sql', genus_id=bird_info['genus_id']))
                    birds_id = list(map(lambda tpl: tpl[0], cursor.fetchall()))
                    random_id = choices(birds_id, k=min(bird_count, len(birds_id)))
                    res_dict['result'] = [get_bird_info_by_id(cursor, id) for id in random_id]
                case 'birds':
                    cursor.execute(sql('bird_all.sql'))
                    birds_id = list(map(lambda tpl: tpl[0], cursor.fetchall()))
                    res_dict['result'] = [get_bird_info_by_id(cursor, id) for id in birds_id]
            result = json.dumps(res_dict, indent=4)
            return result


if __name__ == '__main__':
    try:
        db_connection = psycopg2.connect(
            host=DB.host,
            user=DB.user,
            password=DB.password,
            database=DB.db_name
        )
        with db_connection.cursor() as cursor:
            cursor.execute("SELECT version()")
            print('База данных успешно подключена')
            print(f'Версия СУБД: {cursor.fetchone()}')
    except Exception as ex:
        print('Соединение с базой данных разорвано:')
        print(ex)
    finally:
        print("Запуск приложения")
        app.run()
        print("Завершение работы")
        if db_connection:
            db_connection.close()
            print("Соединение с базой данных завершено")
