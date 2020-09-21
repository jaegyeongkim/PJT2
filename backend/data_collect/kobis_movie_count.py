import requests
import json

# file_path = "./datas/movies_list.json"
# with open(file_path, "r", encoding="UTF8") as json_file:
#     json_data = json.load(json_file)

# kobis_api_movie_detail_url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=%s&movieCd=%s"
# kobis_api_url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=%s&openStartDt=%d&itemPerPage=%d&repNationCd=%d&movieTypeCd=%d&curPage=%d'
kobis_api_movie_count_url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=%s&targetDt=%s&weekGb=%s&repNationCd=%s"

YY = []
for _ in range(1993, 1996):
    YY.append(str(_))
MM = []
MM.append('01')
MM.append('02')
MM.append('03')
MM.append('04')
MM.append('05')
MM.append('06')
MM.append('07')
MM.append('08')
MM.append('09')
for _ in range(10,13):
    MM.append(str(_))
DD = []
DD.append('01')
DD.append('02')
DD.append('03')
DD.append('04')
DD.append('05')
DD.append('06')
DD.append('07')
DD.append('08')
DD.append('09')
for _ in range(10,32):
    DD.append(str(_))

data = dict()
data["movie_count"] = {}

week = '0'
re = 'K'

Date = '19900101'
print(data)
cnt = 0
flag = 0
while flag == 0:
    for i in YY:
        if flag:
            break
        for j in MM:
            if flag:
                break
            for k in DD:
                cnt += 1
                print(cnt)
                if cnt > 1120:
                    flag = 1
                    break

                try:
                    Date = i+j+k
                    api_url = kobis_api_movie_count_url % (kobis_api_key, Date, week, re)
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
print(Date)

with open('./datas/movies_count_3.json', 'w', encoding='utf-8') as make_file:
    json.dump(data, make_file, ensure_ascii = False, indent='\t')