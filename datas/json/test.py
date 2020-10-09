import json

with open('actors.json', 'r', encoding='utf-8') as f:
  json_data = json.load(f)["actors"]

dic = []

dic2 = {}
dic2["director"] = []

for data in json_data:
  if data["repRoleNm"] == "감독":
    dic2["director"].append(data['peopleNm'])
    continue
  dic1 = {}
  dic1['id'] = int(data['peopleCd'])

  if data['sex'] == '여자':
    dic1['gender'] = '여자'
  else:
    dic1['gender'] = '남자'

  dic1['name'] = data['peopleNm']
  try:
    dic1['image'] = data['img']
  except:
    pass
  dic1['birth'] = ''
  dic1['face'] = ''
  dic1['movie'] = ''

  for m in data["filmos"]:
    dic1['movie']+=m['movieNm'] + '/'
  dic1['movie']=dic1['movie'][:-1]

  dic1['video'] = ''

  dic.append(dic1)
with open('./test_actor.json', 'w', encoding='utf-8') as make_file:
    json.dump(dic, make_file, ensure_ascii = False, indent='\t')
with open('./test2_director.json', 'w', encoding='utf-8') as make_file:
    json.dump(dic2, make_file, ensure_ascii = False, indent='\t')
