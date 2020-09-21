import json

file = open("movies_detail_1~5429.json","r",encoding='utf-8')
jsondata_total = json.load(file)
file = open("movies_detail_ok19.json","r",encoding='utf-8')
jsondata_filtered_19 = json.load(file)
cnt = 0


filtered_movies = dict()
filtered_movies["movies_data"] = []
# print(filtered_19)

# print(data19)

cnt = 0
for data in jsondata_total["movie_detail_data"]:
    # print(data["movieNm"])
    if len(data["audits"]) > 0:
        if data["audits"][0]["watchGradeNm"] == "청소년관람불가":
            if len(data["genres"]) > 0 :
                for genre in data["genres"]:
                    if genre["genreNm"] == "성인물(에로)" or genre["genreNm"] == "멜로/로맨스":
                        if data["movieNm"] in jsondata_filtered_19["movie_19_data"]:
                            filtered_movies["movies_data"].append(data)
                            cnt += 1
                            break
                        else:
                            break
                        break
                else:
                    filtered_movies["movies_data"].append(data)
                    cnt += 1
        else:
            filtered_movies["movies_data"].append(data)
            cnt += 1
    elif len(data["audits"]) == 0:
        filtered_movies["movies_data"].append(data)
        cnt += 1
    # print(cnt)
print('end', cnt)
with open('./test.json', 'w', encoding='utf-8') as make_file:
    json.dump(filtered_movies, make_file, ensure_ascii = False, indent='\t')
