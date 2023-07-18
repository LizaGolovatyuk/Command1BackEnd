import os
import glob
from application.functions import db_connecting, sql

conn = db_connecting()
with conn.cursor() as cursor:
    cursor.execute(sql('clear_avp.sql'))

file_patch = fr'{os.getcwd()}\application\database\images\*.*'
for clean_up in glob.glob(file_patch):
    print(fr'удаление файла {clean_up}')
    if not clean_up.endswith('undefined.jpg'):
        os.remove(clean_up)

file_patch = fr'{os.getcwd()}\application\database\previews\*.*'
for clean_up in glob.glob(file_patch):
    print(fr'удаление файла {clean_up}')
    if not clean_up.endswith('undefined.png'):
        os.remove(clean_up)

file_patch = fr'{os.getcwd()}\application\database\videos\*.*'
for clean_up in glob.glob(file_patch):
    print(fr'удаление файла {clean_up}')
    os.remove(clean_up)
