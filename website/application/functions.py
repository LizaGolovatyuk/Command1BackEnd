"""
Содержит вспомогательные функции для работы приложения
"""

from flask import Template


def sql(filename, **kwargs):
    """
    Преобразует sql скрип заданного файла в строку, шаблонизируя необходимые параметры с помощью библиотеки jinja.
    В случае если файл не найден или шаблонная переменная некорректна - возвращает пустую строку.
    @param filename: имя файла в папке application/sql/scripts
    @param kwargs: словарь шаблонных переменных
    @return: строка с sql скриптом по преобразованным переменным
    """
    script = ""
    try:
        with open(f'application/sql/scripts/{filename}', 'r', encoding='utf-8') as file:
            script = file.read()
    except Exception as ex:
        pass #todo Добавить логгер
    return Template(script).render(**kwargs)
