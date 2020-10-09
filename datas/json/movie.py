import json

with open('movies_detail.json', 'r', encoding='utf-8') as f:
  json_data = json.load(f)["movies_data"]

dic = []

dic2 = {}
cnt = 0

for data in json_data:
  dic1 = {}
  cnt += 1
  dic1['id'] = cnt

  dic1['name'] = data['movieNm']

  dic1['poster'] = ''

  dic1['genre'] = ''
#   genre = data['genres']
  for g in data['genres']:
    dic1['genre'] += g['genreNm'] + ','
  dic1['genre']=dic1['genre'][:-1]

  dic1['birth'] = data['openDt']

  dic1['userRating'] = 0

  dic1['movie_cd'] = data['movieCd']


  

  dic.append(dic1)
with open('./test_movieCd.json', 'w', encoding='utf-8') as make_file:
    json.dump(dic, make_file, ensure_ascii = False, indent='\t')