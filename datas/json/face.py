import json

file = open("actor_com3.json","r",encoding='utf-8')        # merge 하고자하는 1번 파일
jsondata = json.load(file)

file = open("test_actor.json","r",encoding='utf-8')     # merge 하고자하는 2번 파일
jsondata2 = json.load(file)

# print(jsondata)
# print(jsondata2)

for data in jsondata2:
    # print(data["face"])
    a = data['face']
    # print(a)
    for data2 in jsondata:
        if data['id'] == data2['id']:
            data2['face'] = data['face']
    # b = jsondata["face"]
    # jsondata["face"] += data["face"]

# print(jsondata)
with open('actor_com4.json', 'w', encoding='utf-8') as make_file:
    json.dump(jsondata, make_file, ensure_ascii = False, indent='\t')