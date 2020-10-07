import json

file = open("movie_com3.json","r",encoding='utf-8')        # merge 하고자하는 1번 파일
jsondata = json.load(file)

for data in jsondata:
    a = data['face']
    for data2 in jsondata:
        if data['id'] == data2['id']:
            data2['face'] = data['face']
    # b = jsondata["face"]
    # jsondata["face"] += data["face"]

# print(jsondata)
with open('actor_com4.json', 'w', encoding='utf-8') as make_file:
    json.dump(jsondata, make_file, ensure_ascii = False, indent='\t')