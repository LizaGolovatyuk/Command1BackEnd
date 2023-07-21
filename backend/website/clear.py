import os
import glob
from application.functions import db_connecting, sql

print('Запущена очистка медиа файлов')
print('Перезапись БД')
conn = db_connecting()
with conn.cursor() as cursor:
    cursor.execute(sql('clear_avp.sql'))

file_patch = fr'{os.getcwd()}\application\database\images\*.*'
files = glob.glob(file_patch)
if len(files) > 1:
    print('Удаление аватаров:')
for clean_up in files:
    if not clean_up.endswith('undefined.jpg'):
        print(fr'{clean_up}')
        os.remove(clean_up)


file_patch = fr'{os.getcwd()}\application\database\previews\*.*'
files = glob.glob(file_patch)
if len(files) > 1:
    print('Удаление превью:')
for clean_up in files:
    if not clean_up.endswith('undefined.png'):
        print(fr'{clean_up}')
        os.remove(clean_up)

file_patch = fr'{os.getcwd()}\application\database\videos\*.*'
files = glob.glob(file_patch)
if len(files):
    print('Удаление видео:')
for clean_up in files:
    print(fr'{clean_up}')
    os.remove(clean_up)
