import requests
import json
import os
from bs4 import BeautifulSoup
from .functions import sql, to_url
from psycopg2._psycopg import connection
from typing import Tuple

class BirdParser:
    def __init__(self, db_connection: connection, bird_latin: str, bird_id: int):
        print('----------------------------')
        print(f'Parse bird ({bird_id}): {bird_latin}')
        self.__end_parse__ = False
        self.__db_connection__ = db_connection
        self.__bird_latin__ = bird_latin
        self.__bird_id__ = bird_id
        with db_connection.cursor() as cursor:
            cursor.execute(sql('select_bird_data_by_id.sql', bird_id=self.__bird_id__))
            data = list(
                        map(lambda tpl: {key: val for key, val in zip([title.name for title in cursor.description],
                                                                       tpl)},
                            cursor.fetchall())
                       )[0]
            self.__ebird_code__ = data['ebirdid']
            self.__avatar_patch__ = data['avatar']
            self.__video_patch__ = data['video']
            self.__preview_patch__ = data['preview']
            try:
                if self.__ebird_code__ is None:
                    self.__ebird_code__ = self.get_ebird_code()
                    cursor.execute(sql('update_bs_set_column_eq_str_value.sql',
                                       column='ebirdid',
                                       value=self.__ebird_code__,
                                       bird_id=self.__bird_id__))
            except Exception as ex:
                print(f'  ERROR: not found ebirdId, end parse')
                self.__end_parse__ = True
                return
            try:
                if self.__avatar_patch__ == 'undefined.jpg':
                    self.__avatar_patch__ = self.get_avatar_patch()
                    cursor.execute(sql('update_bs_set_column_eq_str_value.sql',
                                       column='avatar',
                                       value=self.__avatar_patch__,
                                       bird_id=self.__bird_id__))
            except Exception as ex:
                print(f'  ERROR: Avatar not found')
            try:
                if self.__video_patch__ is None:
                    self.__video_patch__ = self.get_video_patch()
                    cursor.execute(sql('update_bs_set_column_eq_str_value.sql',
                                       column='video',
                                       value=self.__video_patch__,
                                       bird_id=self.__bird_id__))
            except Exception as ex:
                print(f'  ERROR: Video not found')
            try:
                if self.__preview_patch__ == 'undefined.png':
                    self.__preview_patch__ = self.get_preview_patch()
                    cursor.execute(sql('update_bs_set_column_eq_str_value.sql',
                                       column='preview',
                                       value=self.__preview_patch__,
                                       bird_id=self.__bird_id__))
            except Exception as ex:
                print(f'  ERROR: Preview not found')
            self.__end_parse__ = True

    def get_latin(self) -> str:
        return self.__bird_latin__

    def get_ebird_code(self) -> str:
        if self.__end_parse__:
            return self.__ebird_code__
        print("- Parse ebirdId")
        url = f'https://api.ebird.org/v2/ref/taxon/find?locale=ru&cat=species&key=jfekjedvescr&q={to_url(self.__bird_latin__)}'
        headers = {
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36'
        }
        print(f'    Request: {url}')
        req = requests.get(url, headers=headers)
        src = json.loads(req.text)
        print(f'    Answer: {src}')
        self.__ebird_code__ = src[0]['code']
        print(f'    Result: {self.__ebird_code__}')
        return self.__ebird_code__

    def get_avatar_patch(self) -> str:
        if self.__end_parse__:
            return self.__avatar_patch__
        print("- Parse avatar")
        url = f'https://ebird.org/species/{self.__ebird_code__}'
        headers = {
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36'
        }
        print(f'    Request: {url}')
        req = requests.get(url, headers=headers)
        html = req.text
        soup = BeautifulSoup(html, 'lxml')
        image_url = soup.find('div', {'class': 'MediaThumbnail Media--playButton'}).findChild().get('src')
        print(f'    AvatarUrl: {image_url}')
        img_data = requests.get(image_url).content
        work_dir = os.getcwd()
        with open(f'{work_dir}/application/database/images/{self.__bird_id__}.jpg', 'wb') as handler:
            handler.write(img_data)
        self.__avatar_patch__ = f'{self.__bird_id__}.jpg'
        print(f'    AvatarPatch: {self.__avatar_patch__}')
        return self.__avatar_patch__



    def get_video_patch(self) -> str:
        if self.__end_parse__:
            return self.__video_patch__
        print('- Parse video')
        url = f'https://media.ebird.org/api/v1/search?taxonCode={self.__ebird_code__}&count=10&sort=rating_rank_desc&mediaType=v&regionCode=&locale=ru&taxaLocale=ru'
        headers = {
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36'
        }
        print(f'    Request: {url}')
        req = requests.get(url, headers=headers)
        src = json.loads(req.text)
        print(f'    Answer: {src}')
        video_url = src['results']['content'][0]['mediaUrl']
        print(f'    VideoUrl: {video_url}')
        video_data = requests.get(video_url).content
        work_dir = os.getcwd()
        with open(f'{work_dir}/application/database/videos/{self.__bird_id__}.mp4', 'wb') as handler:
            handler.write(video_data)
        self.__video_patch__ = f'{self.__bird_id__}.mp4'
        print(f'    VideoPatch: {self.__video_patch__}')
        return self.__video_patch__

    def get_preview_patch(self) -> str:
        if self.__end_parse__:
            return self.__preview_patch__
        print('- Parse preview')
        url = f'https://media.ebird.org/api/v1/search?taxonCode={self.__ebird_code__}&count=10&sort=rating_rank_desc&mediaType=v&regionCode=&locale=ru&taxaLocale=ru'
        headers = {
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36'
        }
        print(f'    Request: {url}')
        req = requests.get(url, headers=headers)
        src = json.loads(req.text)
        print(f'    Answer: {src}')
        preview_url = src['results']['content'][0]['previewUrl']
        print(f'    PreviewUrl: {preview_url}')
        preview_data = requests.get(preview_url).content
        work_dir = os.getcwd()
        with open(f'{work_dir}/application/database/previews/{self.__bird_id__}.jpg', 'wb') as handler:
            handler.write(preview_data)
        self.__preview_patch__ = f'{self.__bird_id__}.jpg'
        print(f'    PreviewPatch: {self.__preview_patch__}')
        return self.__preview_patch__
