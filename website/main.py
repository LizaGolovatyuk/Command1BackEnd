import psycopg2
import json
from application.database import config
from application.functions import sql
from flask import Flask, request, abort, Response, Template

# переменные среды Flask
DEBUG = True
SECRET_KEY = 'fkweruy#fgjoi43@df45'
BASE_URL = 'http://127.0.0.1:5000'


app = Flask(__name__)
app.config.from_object(__name__)

db_connection = None


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
                    cursor.execute(sql('select_all_birds.sql'))
                    res_dict['result'] = list(map(lambda tpl: {key: val for key, val in zip([title.name for title in cursor.description],
                                                                                            tpl)},
                                                  cursor.fetchall()))
                case 'random_bird':
                    res_dict['request'] = 'random_bird'
                    cursor.execute(sql('select_random_bird.sql'))
                    res_dict['result'] = list(
                        map(lambda tpl: {key: val for key, val in zip([title.name for title in cursor.description],
                                                                      tpl)},
                            cursor.fetchall()))[0]
                    while res_dict['result']['species_titleru'] is None:
                        cursor.execute(sql('select_random_bird.sql'))
                        res_dict['result'] = list(
                            map(lambda tpl: {key: val for key, val in zip([title.name for title in cursor.description],
                                                                          tpl)},
                                cursor.fetchall()))[0]
                case 'birds_by':
                    res_dict['request'] = f'{command}?bird_title={bird_title}&count={count}'
                    cursor.execute(sql('select_birds_by_family.sql', bird_title=bird_title, bird_count=count))
                    res_dict['result'] = list(
                        map(lambda tpl: {key: val for key, val in zip([title.name for title in cursor.description],
                                                                      tpl)},
                            cursor.fetchall()))
                case _:
                    abort(404)
            response = Response(
                response=json.dumps(res_dict, indent=4, ensure_ascii=False),
                mimetype='application/json',
                status=200
            )
            response.headers.add("Access-Control-Allow-Origin", "*")
            return response


if __name__ == '__main__':
    try:
        db_connection = psycopg2.connect(
            host=config.host,
            user=config.user,
            password=config.password,
            database=config.db_name
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
