import json

with open('movies_detail.json', 'r', encoding='utf-8') as f:
  json_data = json.load(f)["movies_data"]

dic = []

dic2 = {}

for data in json_data:
  dic1 = {}
  cnt += 1
  dic1['id'] = int(data['movieCd'])
  dic1[]


  

  dic.append(dic1)
with open('./test_movieCd.json', 'w', encoding='utf-8') as make_file:
    json.dump(dic, make_file, ensure_ascii = False, indent='\t')
with open('./test2_movieCd.json', 'w', encoding='utf-8') as make_file:
    json.dump(dic2, make_file, ensure_ascii = False, indent='\t')