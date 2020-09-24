import pandas as pd
from pandas import DataFrame as df
import json

eyebrow = df(
    data={
        'EyebrowId': [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'
            ],
        'Eyebrow': [
            '검미', '신월미', '용미', '청수미', '팔자미', '일자미', '단촉수미', '대단촉미', '경청미', '와잠미', '호미', '사자미', '첨도미', '유엽미', '소추미', '소소추미', '나한미', '전청후소미', '소산미', '황박미', '교가미', '귀미', '간단미', '선라미'
            ],
        'picture': [
            ['./Coronation/male/eyebrow/01.png', './Coronation/female/eyebrow/01.png'],
            ['./Coronation/male/eyebrow/02.png', './Coronation/female/eyebrow/02.png'],
            ['./Coronation/male/eyebrow/03.png', './Coronation/female/eyebrow/03.png'],
            ['./Coronation/male/eyebrow/04.png', './Coronation/female/eyebrow/04.png'],
            ['./Coronation/male/eyebrow/05.png', './Coronation/female/eyebrow/05.png'],
            ['./Coronation/male/eyebrow/06.png', './Coronation/female/eyebrow/06.png'],
            ['./Coronation/male/eyebrow/07.png', './Coronation/female/eyebrow/07.png'],
            ['./Coronation/male/eyebrow/08.png', './Coronation/female/eyebrow/08.png'],
            ['./Coronation/male/eyebrow/09.png', './Coronation/female/eyebrow/09.png'],
            ['./Coronation/male/eyebrow/10.png', './Coronation/female/eyebrow/10.png'],
            ['./Coronation/male/eyebrow/11.png', './Coronation/female/eyebrow/11.png'],
            ['./Coronation/male/eyebrow/12.png', './Coronation/female/eyebrow/12.png'],
            ['./Coronation/male/eyebrow/13.png', './Coronation/female/eyebrow/13.png'],
            ['./Coronation/male/eyebrow/14.png', './Coronation/female/eyebrow/14.png'],
            ['./Coronation/male/eyebrow/15.png', './Coronation/female/eyebrow/15.png'],
            ['./Coronation/male/eyebrow/16.png', './Coronation/female/eyebrow/16.png'],
            ['./Coronation/male/eyebrow/17.png', './Coronation/female/eyebrow/17.png'],
            ['./Coronation/male/eyebrow/18.png', './Coronation/female/eyebrow/18.png'],
            ['./Coronation/male/eyebrow/19.png', './Coronation/female/eyebrow/19.png'],
            ['./Coronation/male/eyebrow/20.png', './Coronation/female/eyebrow/20.png'],
            ['./Coronation/male/eyebrow/21.png', './Coronation/female/eyebrow/21.png'],
            ['./Coronation/male/eyebrow/22.png', './Coronation/female/eyebrow/22.png'],
            ['./Coronation/male/eyebrow/23.png', './Coronation/female/eyebrow/23.png'],
            ['./Coronation/male/eyebrow/24.png', './Coronation/female/eyebrow/24.png']
            ],
        'Content': [
            ['강인', '권위', '지혜', '관직'],
            ['부유', '원만', '사교', '지혜', '선함'],
            ['부유', '귀인', '강직', '충실'],
            ['총명', '지혜', '선함'],
            ['장수', '부유', '고독'],
            ['어진', '의로움', '부귀', '장수', '고독'],
            ['효심', '신의', '영웅', '충성', '장수'],
            ['간악', '부유', '사기'],
            ['신의', '예의'],
            ['총명', '관직', '처세술', '기교', '눈치'],
            ['부유', '장수', '냉정', '담력', '정직', '명예'],
            ['독선적', '관직'],
            ['거침', '날카로움', '간교', '욕심'],
            ['출세', '명성', '대범', '정의', '신의'],
            ['부유', '표리부동'],
            ['성공'],
            ['옹졸', '우유부단'],
            ['관직', '부유'],
            ['부유', '성급', '줏대없음'],
            ['역마살', '가난'],
            ['가정분란', '가난'],
            ['도적', '간교', '사기', '악함', '표리부동', '실패', '도벽'],
            ['부유', '가난', '고독'],
            ['장수', '지혜', '강직'],
            ]
        }
    )

eye = df(
    data={
        'EyeId': [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'
            ],
        'Eye': [
            '용안', '서봉안', '공작안', '우안', '사안', '마안', '호안', '사자안', '하안', '저안', '도화안', '음양안', '취안', '낭목', '아안', '봉안', '수봉안', '명봉안', '녹안', '웅안', '어안', '원앙안', '후안', '원안', '양안', '해안', '학안', '복서안', '노사안', '귀안', '관형안', '안안', '합안', '묘안', '상안', '자고안', '작안', '난안', '연목'
            ],
        'picture': [
            ['./Coronation/male/eye/01.png', './Coronation/female/eye/01.png'],
            ['./Coronation/male/eye/02.png', './Coronation/female/eye/02.png'],
            ['./Coronation/male/eye/03.png', './Coronation/female/eye/03.png'],
            ['./Coronation/male/eye/04.png', './Coronation/female/eye/04.png'],
            ['./Coronation/male/eye/05.png', './Coronation/female/eye/05.png'],
            ['./Coronation/male/eye/06.png', './Coronation/female/eye/06.png'],
            ['./Coronation/male/eye/07.png', './Coronation/female/eye/07.png'],
            ['./Coronation/male/eye/08.png', './Coronation/female/eye/08.png'],
            ['./Coronation/male/eye/09.png', './Coronation/female/eye/09.png'],
            ['./Coronation/male/eye/10.png', './Coronation/female/eye/10.png'],
            ['./Coronation/male/eye/11.png', './Coronation/female/eye/11.png'],
            ['./Coronation/male/eye/12.png', './Coronation/female/eye/12.png'],
            ['./Coronation/male/eye/13.png', './Coronation/female/eye/13.png'],
            ['./Coronation/male/eye/14.png', './Coronation/female/eye/14.png'],
            ['./Coronation/male/eye/15.png', './Coronation/female/eye/15.png'],
            ['./Coronation/male/eye/16.png', './Coronation/female/eye/16.png'],
            ['./Coronation/male/eye/17.png', './Coronation/female/eye/17.png'],
            ['./Coronation/male/eye/18.png', './Coronation/female/eye/18.png'],
            ['./Coronation/male/eye/19.png', './Coronation/female/eye/19.png'],
            ['./Coronation/male/eye/20.png', './Coronation/female/eye/20.png'],
            ['./Coronation/male/eye/21.png', './Coronation/female/eye/21.png'],
            ['./Coronation/male/eye/22.png', './Coronation/female/eye/22.png'],
            ['./Coronation/male/eye/23.png', './Coronation/female/eye/23.png'],
            ['./Coronation/male/eye/24.png', './Coronation/female/eye/24.png'],
            ['./Coronation/male/eye/25.png', './Coronation/female/eye/25.png'],
            ['./Coronation/male/eye/26.png', './Coronation/female/eye/26.png'],
            ['./Coronation/male/eye/27.png', './Coronation/female/eye/27.png'],
            ['./Coronation/male/eye/28.png', './Coronation/female/eye/28.png'],
            ['./Coronation/male/eye/29.png', './Coronation/female/eye/29.png'],
            ['./Coronation/male/eye/30.png', './Coronation/female/eye/30.png'],
            ['./Coronation/male/eye/31.png', './Coronation/female/eye/31.png'],
            ['./Coronation/male/eye/32.png', './Coronation/female/eye/32.png'],
            ['./Coronation/male/eye/33.png', './Coronation/female/eye/33.png'],
            ['./Coronation/male/eye/34.png', './Coronation/female/eye/34.png'],
            ['./Coronation/male/eye/35.png', './Coronation/female/eye/35.png'],
            ['./Coronation/male/eye/36.png', './Coronation/female/eye/36.png'],
            ['./Coronation/male/eye/37.png', './Coronation/female/eye/37.png'],
            ['./Coronation/male/eye/38.png', './Coronation/female/eye/38.png'],
            ['./Coronation/male/eye/39.png', './Coronation/female/eye/39.png']
            ],
        'Content': [
            ['위엄', '사리분명', '의리', '신의', '관직'],
            ['부유', '온화', '명성', '관직'],
            ['온순', '총명', '소박', '청렴'],
            ['성실', '근면', '부유', '기백'],
            ['간교', '사기', '사나움', '지혜', '불신', '끈기', '승부욕'],
            ['가난', '우직', '관대', '고생'],
            ['부유', '강직', '침착'],
            ['충성', '효심', '정조', '호탕', '절제', '인품'],
            ['부유', '신중', '공경', '인품'],
            ['저독적', '다혈질', '욕심', '구설'],
            ['유혹', '음란', '바람', '유흥', '향락'],
            ['부유', '눈치', '권모술수', '거짓'],
            ['실패', '뻔뻔함', '문란', '도박', '오락', '유흥'],
            ['부유', '탐욕', '흉폭'],
            ['선함', '건전', '온순', '인정베품'],
            ['총명', '관대', '포용', '통솔'],
            ['온유', '공정', '너그러움', '아량'],
            ['현달', '귀함', '명망', '부유'],
            ['성급', '의리', '불안', '우유부단', '동정', '자비심'],
            ['용맹', '굳셈', '거침', '배짱', '어리석음'],
            ['허약', '무기력'],
            ['부유', '음란'],
            ['근심', '고심', '부유'],
            ['의리', '교활', '의심', '질투', '허영', '영악', '재주', '재치'],
            ['멍청'],
            ['완고', '포악', '불효', '허풍', '방랑', '고독'],
            ['청렴', '부유', '공정', '중책'],
            ['청렴' '대귀', '신의', '온화', '인심', '지혜'],
            ['가난', '어짐', '온화', '지혜', '총명', '청렴'],
            ['행운', '꾀', '장수'],
            ['현달', '인덕'],
            ['의로움', '착실', '온화', '총명', '현명', '낭만', '사교적', '호감'],
            ['총명', '부덕', '허황', '음란', '게으름', '지혜'],
            ['온화', '총명', '책임'],
            ['복', '수명', '지혜', '총명', '포용력', '화합', '자수성가'],
            ['가난', '눈치', '경솔', '고생'],
            ['부유', '신의', '충성심'],
            ['부유', '관직'],
            ['가난', '성실', '재주', '급함', '신용']
            ]
        }
    )

nose = df(
    data={
        'NoseId': [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'
            ],
        'Nose': [
            '절통비', '성낭비', '산비', '용비', '응취비', '검봉비', '녹비', '즉어비', '노척비', '우비', '호양비', '편요비', '호비', '사자비', '후비', '삼만삼곡비', '고봉비', '현담비', '구비', '성비', '장비', '원비', '복서비', '노조비'
            ],
        'picture': [
            ['./Coronation/male/nose/01.png', './Coronation/female/nose/01.png'],
            ['./Coronation/male/nose/02.png', './Coronation/female/nose/02.png'],
            ['./Coronation/male/nose/03.png', './Coronation/female/nose/03.png'],
            ['./Coronation/male/nose/04.png', './Coronation/female/nose/04.png'],
            ['./Coronation/male/nose/05.png', './Coronation/female/nose/05.png'],
            ['./Coronation/male/nose/06.png', './Coronation/female/nose/06.png'],
            ['./Coronation/male/nose/07.png', './Coronation/female/nose/07.png'],
            ['./Coronation/male/nose/08.png', './Coronation/female/nose/08.png'],
            ['./Coronation/male/nose/09.png', './Coronation/female/nose/09.png'],
            ['./Coronation/male/nose/10.png', './Coronation/female/nose/10.png'],
            ['./Coronation/male/nose/11.png', './Coronation/female/nose/11.png'],
            ['./Coronation/male/nose/12.png', './Coronation/female/nose/12.png'],
            ['./Coronation/male/nose/13.png', './Coronation/female/nose/13.png'],
            ['./Coronation/male/nose/14.png', './Coronation/female/nose/14.png'],
            ['./Coronation/male/nose/15.png', './Coronation/female/nose/15.png'],
            ['./Coronation/male/nose/16.png', './Coronation/female/nose/16.png'],
            ['./Coronation/male/nose/17.png', './Coronation/female/nose/17.png'],
            ['./Coronation/male/nose/18.png', './Coronation/female/nose/18.png'],
            ['./Coronation/male/nose/19.png', './Coronation/female/nose/19.png'],
            ['./Coronation/male/nose/20.png', './Coronation/female/nose/20.png'],
            ['./Coronation/male/nose/21.png', './Coronation/female/nose/21.png'],
            ['./Coronation/male/nose/22.png', './Coronation/female/nose/22.png'],
            ['./Coronation/male/nose/23.png', './Coronation/female/nose/23.png'],
            ['./Coronation/male/nose/24.png', './Coronation/female/nose/24.png']
            ],
        'Content': [
            ['온화', '곧음'],
            ['부유', '호탕', '추진력'],
            ['존경', '유순', '정', '우애'],
            ['대귀', '관직', '명예', '정열적'],
            ['간악' '음험', '간사', '편협', '욕심', '간교'],
            ['흉', '완고', '거짓', '괴팍', '고독'],
            ['부유', '의리', '급함', '불안', '순박', '인자'],
            ['용렬', '배신', '우유부단', '고단'],
            ['간악', '우유부단', '고독'],
            ['관대', '어짐', '부지런'],
            ['부유', '명예', '귀함', '섬세', '고집'],
            ['고독', '가난', '곤란'],
            ['부유', '명예', '온화', '강직', '대장부'],
            ['강건', '용기', '실천력'],
            ['의심', '인색', '지혜', '알뜰'],
            ['고독'],
            ['고독', '가난', '곤란'],
            ['부유', '눈치', '예의', '건강'],
            ['도둑', '의리', '곤궁', '도벽'],
            ['부유', '너그러움', '고귀', '영특', '호쾌'],
            ['의리없음', '시기심', '고단', '배신'],
            ['시기', '기만', '경솔', '조급', '질투', '근심', '걱정'],
            ['총명' '기백', '지혜', '아량'],
            ['빈궁', '가난', '괴로움']
            ]
        }
    )

mouse = df(
    data={
        'MouseId': [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'
            ],
        'Mouse': [
            '앵도구', '방구', '양월구', '만궁구', '후구', '양구', '용구', '즉어구', '우구', '복선구', '점어구', '호구', '사자구', '저구', '추문구', '취화구'
            ],
        'picture': [
            ['./Coronation/male/mouse/01.png', './Coronation/female/mouse/01.png'],
            ['./Coronation/male/mouse/02.png', './Coronation/female/mouse/02.png'],
            ['./Coronation/male/mouse/03.png', './Coronation/female/mouse/03.png'],
            ['./Coronation/male/mouse/04.png', './Coronation/female/mouse/04.png'],
            ['./Coronation/male/mouse/05.png', './Coronation/female/mouse/05.png'],
            ['./Coronation/male/mouse/06.png', './Coronation/female/mouse/06.png'],
            ['./Coronation/male/mouse/07.png', './Coronation/female/mouse/07.png'],
            ['./Coronation/male/mouse/08.png', './Coronation/female/mouse/08.png'],
            ['./Coronation/male/mouse/09.png', './Coronation/female/mouse/09.png'],
            ['./Coronation/male/mouse/10.png', './Coronation/female/mouse/10.png'],
            ['./Coronation/male/mouse/11.png', './Coronation/female/mouse/11.png'],
            ['./Coronation/male/mouse/12.png', './Coronation/female/mouse/12.png'],
            ['./Coronation/male/mouse/13.png', './Coronation/female/mouse/13.png'],
            ['./Coronation/male/mouse/14.png', './Coronation/female/mouse/14.png'],
            ['./Coronation/male/mouse/15.png', './Coronation/female/mouse/15.png'],
            ['./Coronation/male/mouse/16.png', './Coronation/female/mouse/16.png']
            ],
        'Content': [
            ['총명', '온유', '부유'],
            ['정직', '예의', '만사형통'],
            ['성실', '예술', '명성'],
            ['명성', '총명'],
            ['인색'],
            ['게으름', '인색', '가난'],
            ['통솔력', '부유'],
            ['고난', '고생'],
            ['부유', '장수', '총명'],
            ['가난', '고통'],
            ['빈궁', '고독'],
            ['덕망', '위엄', '강건', '부유'],
            ['총명', '재주', '지혜', '부유'],
            ['간교', '잔꾀', '흉포', '비방', '빈궁'],
            ['고난' '장수', '고독'],
            ['고생', '장애', '좌절']
            ]
        }
    )

eyebrow_dict = eyebrow.to_dict(orient='records')
eye_dict = eye.to_dict(orient='records')
nose_dict = nose.to_dict(orient='records')
mouse_dict = mouse.to_dict(orient='records')
with open('./datas/eyebrow.json', 'w', encoding='utf-8') as eyebrow_data:
    json.dump(eyebrow_dict, eyebrow_data, ensure_ascii = False, indent='\t')
with open('./datas/eye.json', 'w', encoding='utf-8') as eye_data:
    json.dump(eye_dict, eye_data, ensure_ascii = False, indent='\t')
with open('./datas/nose.json', 'w', encoding='utf-8') as nose_data:
    json.dump(nose_dict, nose_data, ensure_ascii = False, indent='\t')
with open('./datas/mouse.json', 'w', encoding='utf-8') as mouse_data:
    json.dump(mouse_dict, mouse_data, ensure_ascii = False, indent='\t')