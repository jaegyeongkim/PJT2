import requests
import json

file_path = "./datas/movies_list.json"
with open(file_path, "r", encoding="UTF8") as json_file:
    json_data = json.load(json_file)

# kobis_api_key = '154cd46e45e67d2d6a50b9fb41f0ad15'  # 종현
kobis_api_key = '051bf14672daa986b8f9b40e3b9a3c74'  # 재경


kobis_api_movie_detail_url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=%s&movieCd=%s"
# kobis_api_url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=%s&openStartDt=%d&itemPerPage=%d&repNationCd=%d&movieTypeCd=%d&curPage=%d'

data = dict()
data["movie_detail_data"] = []


cnt = 0
for detail in json_data["movie_data"]:
    cnt += 1
    if cnt < 5401:                       # 
        continue
    # if cnt == 5401:
        # break
    api_url = kobis_api_movie_detail_url % (kobis_api_key, detail["movieCd"])
    
    r = requests.get(api_url)

    if r.status_code != 200:
        print('[%d Error]' %s (r.status_code, r.reason))
        quit()

    r.encoding = 'utf-8'
    result = json.loads(r.text)
    # result = result["movieInfoResult"]["movieInfo"]["movieNm"]
    result = result["movieInfoResult"]["movieInfo"]
    # print(result)
    data["movie_detail_data"].append(result)
    # for i in result:
    #     data["movie_detail_data"].append(i)
    print(cnt)

with open('./datas/movies_detail.json', 'w', encoding='utf-8') as make_file:
    json.dump(data, make_file, ensure_ascii = False, indent='\t')