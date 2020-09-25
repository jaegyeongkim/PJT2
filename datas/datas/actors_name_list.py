import json

file = open("filtered_movies_detail.json","r",encoding='utf-8')
jsondata = json.load(file)

# actors = dict()
# actors["name"] = []
# cnt = 0
# for data in jsondata["movies_data"]:    
#     actor_cnt = 0
#     for actor in data["actors"]:
#         actor_cnt += 1
#         if actor["peopleNm"] not in actors["name"]:
#             actors["name"].append(actor["peopleNm"])
#             cnt += 1
#         if actor_cnt == 8:
#             break
# print(cnt)
# with open('./actors_name_list_5.json', 'w', encoding='utf-8') as make_file:
#     json.dump(actors, make_file, ensure_ascii = False, indent='\t')

#### dictionary ####

actors = dict()
cnt = 0
for data in jsondata["movies_data"]:    
    actor_cnt = 0
    for actor in data["actors"]:
        actors[actor["peopleNm"]] = ''
        cnt += 1
        actor_cnt += 1
        if actor_cnt == 8:
            break


print(cnt)
with open('./actors_name_dic_8146.json', 'w', encoding='utf-8') as make_file:
    json.dump(actors, make_file, ensure_ascii = False, indent='\t')