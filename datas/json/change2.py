import json

with open('movie_com.json', 'r', encoding='utf-8') as f:
  json_data = json.load(f)
# print(json_data)
for j in json_data:
    if j["userRating"] == 0:
        j["userRating"] = '0.00'
    else:
        continue

with open('./movie_com2.json', 'w', encoding='utf-8') as make_file:
    json.dump(json_data, make_file, ensure_ascii = False, indent='\t')