import json
# 네이버 검색 API예제는 블로그를 비롯 전문자료까지 호출방법이 동일하므로 blog검색만 대표로 예제를 올렸습니다.
# 네이버 검색 Open API 예제 - 블로그 검색
import os
import sys
import urllib.request
client_id = "PX59dEp99gCNwxPwUjqg"
client_secret = "HnUX3K1Xlm"
import time
with open('movie_com.json', 'r', encoding='utf-8') as f:
  json_data = json.load(f)

# curl "https://openapi.naver.com/v1/search/movie.xml?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&genre=1" \
#     -H "X-Naver-Client-Id:PX59dEp99gCNwxPwUjqg" \
#     -H "X-Naver-Client-Secret:PX59dEp99gCNwxPwUjqg" -v
# 여기부터 3535 부터 하면됨

start = 0
# while start < 3554:
for x in range(3547)
    
    time.sleep(0.5)
    end = 9
    print(start)
    # cnt = 1
    for idx,j in enumerate(json_data[start:]):
        # print(idx)
        if idx > end:
            break
        name = j["name"]
        birth = int(j["birth"][:4])
        # print(name)
        encText = urllib.parse.quote(name)
        url = "https://openapi.naver.com/v1/search/movie.json?query=%s&country=KR&yearfrom=%d&yearto=%d" # json 결과
        # url = "https://openapi.naver.com/v1/search/blog.xml?query=" + encText # xml 결과
        url = url % (encText, birth-2, birth)
        request = urllib.request.Request(url)
        request.add_header("X-Naver-Client-Id",client_id)
        request.add_header("X-Naver-Client-Secret",client_secret)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if(rescode==200):
            response_body = response.read()
            # print(response_body.decode('utf-8'))
            try:
                movie_json = json.loads(response_body.decode('utf-8'))
                # print(movie_json)
                # if len(movie_json['items']) >= 1:
                for i in range(len(movie_json['items'])):
                    # print(movie_json['items'][i]['title'])
                    names = movie_json['items'][i]['title'][3:]
                    names = names[:len(name)] + names[len(name)+4:]
                    # print(names)
                    if names == j["name"]:
                        # print(len(movie_json['items'][i]['title']))
                        # print(len(j["name"]))
                        j["poster"] = movie_json["items"][i]["image"]
                        j['userRating'] = movie_json["items"][i]["userRating"]
                        
                        break


            except:
                pass

        else:
            pass

    start += end

with open('./movie_com.json', 'w', encoding='utf-8') as make_file:
    json.dump(json_data, make_file, ensure_ascii = False, indent='\t')



