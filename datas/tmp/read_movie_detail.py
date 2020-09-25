import json

file = open("movies_detail_1~5429.json","r",encoding='utf-8')              # merge 하고자하는 1번 파일
jsondata = json.load(file)
cnt = 0
for data in jsondata["movie_detail_data"]:
    if len(data["audits"]) > 0:
        if data["audits"][0]["watchGradeNm"] == "청소년관람불가":
            if len(data["genres"]) > 0 :
                print(data["genres"])
            # cnt += 1
print(cnt)
