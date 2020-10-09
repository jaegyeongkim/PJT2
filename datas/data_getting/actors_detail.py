import json
import requests

file = open("actors_code_1~8146.json","r",encoding='utf-8')
jsondata = json.load(file)

# kobis_api_key = '154cd46e45e67d2d6a50b9fb41f0ad15'  # 종현1
kobis_api_key ='59e3450225540d4069b7b872185385f0'   # 종현2
# kobis_api_key = '051bf14672daa986b8f9b40e3b9a3c74'  # 재경1
# kobis_api_key = '19352259e82e6ab580c5e1a18b630154'  # 재경2
# kobis_api_key = 'e73906ab4271f8c0db902c1ababef78f'  # 준모1
# kobis_api_key = '1e408fbd9a16e43d7ab44ff0c2cb1835'  # 준모2

kobis_api_actors_code_url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json?key=%s&peopleCd=%s"

data = dict()
data["actors"] = []

cnt = 0
for actor in jsondata["actors"]:
    cnt += 1

    if cnt < 7501:
        continue
    print(actor["peopleCd"])
    # if cnt == 7501:
    #     break
    actor_cd = actor["peopleCd"]
    api_url = kobis_api_actors_code_url % (kobis_api_key, actor_cd)
    
    r = requests.get(api_url)

    if r.status_code != 200:
        print('[%d Error]' %s (r.status_code, r.reason))
        quit()
    r.encoding = 'utf-8'
    result = json.loads(r.text)["peopleInfoResult"]["peopleInfo"]
    # print(result) #  키용량 확인

    data["actors"].append(result)
    print(cnt)
    if cnt % 10 == 0:   # 끝까지 가서 json 파일을 만드는 게 아니라 (기도메타 X)
                        # N개의 데이터를 받을때마다 저장한다.
        file_name = './actors_detail_7500~8416.json'
        with open(file_name, 'w', encoding='utf-8') as make_file:
            json.dump(data, make_file, ensure_ascii = False, indent='\t')