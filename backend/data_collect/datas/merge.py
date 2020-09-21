import json

file = open("actors_detail_1~7500.json","r",encoding='utf-8')        # merge 하고자하는 1번 파일
jsondata = json.load(file)

file = open("actors_detail_7501~8416.json","r",encoding='utf-8')     # merge 하고자하는 2번 파일
jsondata2 = json.load(file)

# print(jsondata)
# print(jsondata2)

for data in jsondata2["actors"]:
    jsondata["actors"].append(data)

# print(jsondata)
with open('./actors_detail_1~8416.json', 'w', encoding='utf-8') as make_file:
    json.dump(jsondata, make_file, ensure_ascii = False, indent='\t')