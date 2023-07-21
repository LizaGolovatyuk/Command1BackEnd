import psycopg2
from flask import Flask, request
from application.api import Api
from application.functions import db_connecting

DEBUG = True
BASE_URL = 'http://127.0.0.1:5000'


app = Flask(__name__)
app.config.from_object(__name__)

db_connection = db_connecting()


@app.route('/<string:command>', methods=['GET'])
@Api(db_connection, request)
def api(command):
    pass # todo логгер


if __name__ == '__main__':
    app.run()
