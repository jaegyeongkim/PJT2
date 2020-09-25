import json

with open('actors.json', 'r', encoding='utf-8') as f:
  json_data = json.load(f)["actors"]

dic = []

dic2 = {}
dic2["director"] = []

for data in json_data:
  dic1 = {}
  dic1['id'] = int(data['peopleCd'])
  dic1['name'] = data['peopleNm']

  dic.append(dic1)
with open('./test_name.json', 'w', encoding='utf-8') as make_file:
    json.dump(dic, make_file, ensure_ascii = False, indent='\t')

