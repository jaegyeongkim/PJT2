import json

file = open("movies_detail_1~5429.json","r",encoding='utf-8')
jsondata = json.load(file)
cnt = 0


data19 = dict()
data19["movie_19_data"] = []

print(data19)
for data in jsondata["movie_detail_data"]:
    if len(data["audits"]) > 0:
        if data["audits"][0]["watchGradeNm"] == "청소년관람불가":
            if len(data["genres"]) > 0 :
                for genre in data["genres"]:
                    if genre["genreNm"] == "성인물(에로)" or genre["genreNm"] == "멜로/로맨스":
                        cnt += 1
                        data19["movie_19_data"].append(data["movieNm"])
                        break
                

print(5429-cnt)
print(data19)
with open('./movies_detail_19.json', 'w', encoding='utf-8') as make_file:
    json.dump(data19, make_file, ensure_ascii = False, indent='\t')
