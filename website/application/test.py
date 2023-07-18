import requests
import json

url = f'https://media.ebird.org/api/v1/search?taxonCode=blcbul2&count=1&sort=rating_rank_desc&mediaType=v&regionCode=&locale=ru&taxaLocale=ru'
headers = {
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36'
        }
req = requests.get(url, headers=headers)
src = json.loads(req.text)
preview_url = src['results']['content'][0]['previewUrl']
video_url = src['results']['content'][0]['mediaUrl']
print(video_url)
preview_data = requests.get(preview_url).content
video_data = requests.get(video_url).content
with open(f'database/previews/{1}.jpg', 'wb') as handler:
    handler.write(preview_data)
with open(f'database/videos/{1}.mp4', 'wb') as handler:
    handler.write(video_data)