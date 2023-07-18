import requests
import json
import os
from bs4 import BeautifulSoup
from .functions import sql
from psycopg2._psycopg import connection
from typing import Tuple

class BirdParser:
    def __init__(self, db_connection: connection, bird_latin: str):
        self.__db_connection__ = db_connection
        self.__bird_latin__ = bird_latin
        with db_connection.cursor() as cursor:
            cursor.execute(sql('select_bird_data_by_latin.sql', bird_latin=self.__bird_latin__))
            data = list(
                        map(lambda tpl: {key: val for key, val in zip([title.name for title in cursor.description],
                                                                       tpl)},
                            cursor.fetchall())
                       )[0]
            self.__bird_id__ = data['id']
            self.__ebird_code__ = data['ebirdid']
            self.__avatar_patch__ = data['avatar']
            self.__video_patch__ = data['video']
            self.__preview_patch__ = data['preview']
            if self.__ebird_code__ is None:
                self.__ebird_code__ = self.get_ebird_code()
                cursor.execute(sql('update_bs_set_column_eq_str_value.sql',
                                   column='ebirdid',
                                   value=self.__ebird_code__,
                                   bird_id=self.__bird_id__))
            if self.__avatar_patch__ == 'undefined.jpg':
                self.__avatar_patch__ = self.get_avatar_patch()
                cursor.execute(sql('update_bs_set_column_eq_str_value.sql',
                                   column='avatar',
                                   value=self.__avatar_patch__,
                                   bird_id=self.__bird_id__))
            if self.__video_patch__ is None or self.__preview_patch__ == 'undefined.png':
                video_patch, preview_patch = self.__get_video_and_preview_patches__()
            if self.__video_patch__ is None:
                self.__video_patch__ = video_patch
                cursor.execute(sql('update_bs_set_column_eq_str_value.sql',
                                   column='video',
                                   value=self.__video_patch__,
                                   bird_id=self.__bird_id__))
            if self.__preview_patch__ == 'undefined.png':
                self.__preview_patch__ = preview_patch
                cursor.execute(sql('update_bs_set_column_eq_str_value.sql',
                                   column='preview',
                                   value=self.__preview_patch__,
                                   bird_id=self.__bird_id__))


    def get_latin(self) -> str:
        return self.__bird_latin__

    def get_ebird_code(self) -> str:
        if not (self.__ebird_code__ is None):
            return self.__ebird_code__
        url = f'https://api.ebird.org/v2/ref/taxon/find?locale=ru&cat=species&key=jfekjedvescr&q={self.__bird_latin__}'
        headers = {
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36'
        }
        req = requests.get(url, headers=headers)
        src = json.loads(req.text)
        self.__ebird_code__ = src[0]['code']
        return self.__ebird_code__

    def get_avatar_patch(self) -> str:
        if self.__avatar_patch__ != 'undefined.jpg':
            return self.__avatar_patch__
        url = f'https://ebird.org/species/{self.__ebird_code__}'
        headers = {
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36'
        }
        req = requests.get(url, headers=headers)
        html = req.text
        soup = BeautifulSoup(html, 'lxml')
        image_url = soup.find('div', {'class': 'MediaThumbnail Media--playButton'}).findChild().get('src')
        img_data = requests.get(image_url).content
        work_dir = os.getcwd()
        with open(f'{work_dir}/application/database/images/{self.__bird_id__}.jpg', 'wb') as handler:
            handler.write(img_data)
        self.__avatar_patch__ = f'{self.__bird_id__}.jpg'
        return self.__avatar_patch__

    def __get_video_and_preview_patches__(self) -> Tuple[str, str]:
        url = f'https://media.ebird.org/api/v1/search?taxonCode={self.__ebird_code__}&count=10&sort=rating_rank_desc&mediaType=v&regionCode=&locale=ru&taxaLocale=ru'
        headers = {
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36'
        }
        req = requests.get(url, headers=headers)
        src = json.loads(req.text)
        preview_url = src['results']['content'][0]['previewUrl']
        video_url = src['results']['content'][0]['mediaUrl']
        preview_data = requests.get(preview_url).content
        video_data = requests.get(video_url).content
        work_dir = os.getcwd()
        with open(f'{work_dir}/application/database/previews/{self.__bird_id__}.jpg', 'wb') as handler:
            handler.write(preview_data)
        with open(f'{work_dir}/application/database/videos/{self.__bird_id__}.mp4', 'wb') as handler:
            handler.write(video_data)
        return f'{self.__bird_id__}.jpg', f'{self.__bird_id__}.mp4'

    def get_video_patch(self) -> str:
        return self.__video_patch__

    def get_preview_patch(self) -> str:
        return self.__preview_patch__
