import requests
import pandas as pd
import json
import matplotlib

kobis_api_key = '154cd46e45e67d2d6a50b9fb41f0ad15'  # 종현
# kobis_api_key = '051bf14672daa986b8f9b40e3b9a3c74'  # 재경

kobis_api_url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=%s&openStartDt=%d&itemPerPage=%d&repNationCd=%d&movieTypeCd=%d&curPage=%d'

years = 1990
items = 100
nation = 22041011
movieType = 220101
page = 56

data = dict()
data["movie_data"] = []
for i in range(1, page):
    api_url = kobis_api_url % (kobis_api_key, years, items, nation, movieType, i)

    r = requests.get(api_url)

    if r.status_code != 200:
        print('[%d Error]' %s (r.status_code, r.reason))
        quit()

    r.encoding = 'utf-8'
    result = json.loads(r.text)
    result = result["movieListResult"]["movieList"]
    for i in result:
        data["movie_data"].append(i)
        

with open('./datas/movies_list.json', 'w', encoding='utf-8') as make_file:
    json.dump(data, make_file, ensure_ascii = False, indent='\t')