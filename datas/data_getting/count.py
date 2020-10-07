import requests
import json

file_path = "./datas/movies_list.json"
with open(file_path, "r", encoding="UTF8") as json_file:
    json_data = json.load(json_file)

# kobis_api_movie_detail_url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=%s&movieCd=%s"
# kobis_api_url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=%s&openStartDt=%d&itemPerPage=%d&repNationCd=%d&movieTypeCd=%d&curPage=%d'
kobis_api_movie_count_url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=%s&targetDt=%s&weekGb=0"

YY = []
for _ in range(1990, 2021):
    YY.append(str(_))
MM = []
for _ in range(1,13):
    MM.append(str(_))
DD = []
for _ in range(1,32):
    DD.append(str(_))

data = dict()
data["movie_count"] = {}

Date = '19900101'
print(data)
while int(Date) < 20200910:
    for i in YY:
        for j in MM:
            for k in DD:
                try:
                    Date = i+j+k
                    api_url = kobis_api_movie_count_url % (kobis_api_key, Date)
                    r = requests.get(api_url)

                    if r.status_code != 200:
                        print('[%d Error]' %s (r.status_code, r.reason))
                        quit()

                    r.encoding = 'utf-8'
                    result = json.loads(r.text)
                    result = result["boxOfficeResult"]["weeklyBoxOfficeList"]
                    for l in result:
                        try:
                            cd = l["movieCd"]
                            if data["movie_count"][cd] < l["audiAcc"]:
                                data["movie_count"][cd] = l["audiAcc"]
                            else:
                                continue
                        except:
                            data["movie_count"][cd] = l["audiAcc"]
                except:
                  continue
print(data)
print (Date)

# with open('./datas/movies_count.json', 'w', encoding='utf-8') as make_file:
#     json.dump(data, make_file, ensure_ascii = False, indent='\t')