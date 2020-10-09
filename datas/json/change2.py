import json

with open('actor_com2.json', 'r', encoding='utf-8') as f:
  json_data = json.load(f)
# print(json_data)
for j in json_data:
    j['face'] = ''

with open('actor_com3.json', 'w', encoding='utf-8') as make_file:
    json.dump(json_data, make_file, ensure_ascii = False, indent='\t')