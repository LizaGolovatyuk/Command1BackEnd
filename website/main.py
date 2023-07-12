import psycopg2
from flask import Flask, request, abort, render_template, Response
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


@app.route('/<string:command>', methods=['GET'])
def index(command):
    """
    Список api команд:
        birds
        - возвращает список всех птиц в базе

        random_bird
        - возвращает 1 случайную птицу из базы

        birds_by?common=...&[count=...]&[bird_title=...]
        - возвращает список птиц по заданным параметрам
            common - отвечает за то, чем птицы будут похожи
                common='order'  - одного отряда
                common='family' - одного семейства
                common='genus'  - одного рода
            count - количество птиц в результате
                * по умолчанию 4
                ** если указано слишком большое число, выведет столько, сколько есть в базе
            bird_title - русское название птицы
                * если указано, то будет проверять чтобы параметр common совпадал с тем же, у переданной птицы
                ** в том виде, в котором оно лежит в titleRu в базе данных
    """
    if request.method != 'GET':
        abort(400)
    else:
        with db_connection.cursor() as cursor:
            count = int(request.args.get('count', 4))
            bird_title = request.args.get('bird_title', 'тёмный козодой')
            res_dict = dict()
            match command:
                case 'birds':
                    res_dict['request'] = 'birds'
                    cursor.execute(sql('all_birds.sql'))
                    res_dict['result'] = list(map(lambda tpl: {key: val for key, val in zip([title.name for title in cursor.description],
                                                                                            tpl)},
                                                  cursor.fetchall()))
                case 'random_bird':
                    res_dict['request'] = 'random_bird'
                    cursor.execute(sql('random_bird.sql'))
                    res_dict['result'] = list(
                        map(lambda tpl: {key: val for key, val in zip([title.name for title in cursor.description],
                                                                      tpl)},
                            cursor.fetchall()))[0]
                case 'birds_by':
                    res_dict['request'] = f'{command}?bird_title={bird_title}&count={count}'
                    cursor.execute(sql('birds_by_family.sql', bird_title=bird_title, bird_count=count))
                    res_dict['result'] = list(
                        map(lambda tpl: {key: val for key, val in zip([title.name for title in cursor.description],
                                                                      tpl)},
                            cursor.fetchall()))
                case _:
                    abort(404)
            return Response(
                response=json.dumps(res_dict, indent=4, ensure_ascii=False),
                mimetype='application/json',
                status=200
            )


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
