import base64
import sys
import os
import dlib
import glob
from cv2 import cv2
import numpy
import json
import random

ESC_KEY = 27

'''
RGB > BGR or BGR > RGB 변환 
dlib는 RGB 형태로 이미지를 사용하고
openCV는 BGR 형태이므로 B와 R을 바꿔주는 함수가 필요하다.
'''

def swapRGB2BGR(rgb):
    r, g, b = cv2.split(img)
    bgr = cv2.merge([b,g,r])
    return bgr

# 랜드마크 파일 경로
sys.argv.append('/home/ubuntu/project/new_backend/routes/shape_predictor_68_face_landmarks.dat')
predictor_path = sys.argv[2]
# 이미지 경로
face = '../frontend/build/static/img/actor/' + sys.argv[1]
# print(sys.argv)
# print(face)
# 얼굴 인식용 클래스 생성 (기본 제공되는 얼굴 인식 모델 사용)
detector = dlib.get_frontal_face_detector()
# 인식된 얼굴에서 랜드마크 찾기위한 클래스 생성 
predictor = dlib.shape_predictor('/home/ubuntu/project/new_backend/routes/shape_predictor_68_face_landmarks.dat')

# 두번째 매개변수로 지정한 폴더를 싹다 뒤져서 jpg파일을 찾는다.
eyepoint = []
eyebrowpoint = []
nosepoint = []
mouthpoint = []
face = face.encode('euc-kr')
img = dlib.load_rgb_image(face)
cvImg = swapRGB2BGR(img) 

#이미지를 두배로 키운다.
cvImg = cv2.resize(cvImg, None, fx=4, fy=4, interpolation=cv2.INTER_AREA)

# Ask the detector to find the bounding boxes of each face. The 1 in the
# second argument indicates that we should upsample the image 1 time. This
# will make everything bigger and allow us to detect more faces.
dets = detector(img, 1)
# print("Number of faces detected: {}".format(len(dets)))
# print(cnt)

# 이제부터 인식된 얼굴 개수만큼 반복하여 얼굴 윤곽을 표시할 것이다. 
for k, d in enumerate(dets):
    # k 얼굴 인덱스
    # d 얼굴 좌표
    # print("Detection {}: Left: {} Top: {} Right: {} Bottom: {}".format(
    #     k, d.left(), d.top(), d.right(), d.bottom()))

    shape = predictor(img, d)
    # print(shape.num_parts)
    for i in range(0, 68):
        # 해당 X,Y 좌표를 두배로 키워 좌표를 얻고
        x = shape.part(i).x*4
        y = shape.part(i).y*4
        if 17 <= i < 27:
            if i == 17:
                point_x = x
                point_y = y
            eyebrowpoint.append((x - point_x, y - point_y))
        elif 27 <= i < 36:
            if i == 27:
                point_x = x
                point_y = y
            nosepoint.append((x - point_x, y - point_y))
        elif 36 <= i < 48:
            if i == 36:
                point_x = x
                point_y = y
            eyepoint.append((x - point_x, y - point_y))
        elif 48 <= i < 68:
            if i == 48:
                point_x = x
                point_y = y
            mouthpoint.append((x - point_x, y - point_y))
        # 이미지 랜드마크 좌표 지점에 인덱스(랜드마크번호, 여기선 i)를 putText로 표시해준다.
        cv2.putText(cvImg, str(i), (x, y), cv2.FONT_HERSHEY_SCRIPT_SIMPLEX, 0.3, (0, 255, 0))                    

    with open('/home/ubuntu/project/new_backend/routes/coronation_eye.json', 'r', encoding='utf-8') as json_file:
        eyedata = json.load(json_file)
    with open('/home/ubuntu/project/new_backend/routes/coronation_eyebrow.json', 'r', encoding='utf-8') as json_file:
        eyebrowdata = json.load(json_file)
    with open('/home/ubuntu/project/new_backend/routes/coronation_nose.json', 'r', encoding='utf-8') as json_file:
        nosedata = json.load(json_file)
    with open('/home/ubuntu/project/new_backend/routes/coronation_mouth.json', 'r', encoding='utf-8') as json_file:
        mouthdata = json.load(json_file)
    eyemin = float('inf')
    eye_idx = 0
    if len(eyepoint) == 12:
        for i in range(39):
            eyesum = 0
            for j in range(1, len(eyepoint)):
                sums = abs(eyepoint[j][0] - eyedata[i]['Point'][j][0]) + abs(eyepoint[j][1] - eyedata[i]['Point'][j][1])
                eyesum += sums
            if eyesum <= eyemin:
                eyemin = eyesum
                eye_idx = i

    eyebrowmin = float('inf')
    eyebrow_idx = 0
    if len(eyebrowpoint) == 10:
        for i in range(24):
            eyebrowsum = 0
            for j in range(1, len(eyebrowpoint)):
                sums = abs(eyebrowpoint[j][0] - eyebrowdata[i]['Point'][j][0]) + abs(eyebrowpoint[j][1] - eyebrowdata[i]['Point'][j][1])
                eyebrowsum += sums
            if eyebrowsum <= eyebrowmin:
                eyebrowmin = eyebrowsum
                eyebrow_idx = i

    nosemin = float('inf')
    nose_idx = 0
    if len(nosepoint) == 9:
        for i in range(24):
            nosesum = 0
            for j in range(1, len(nosepoint)):
                sums = abs(nosepoint[j][0] - nosedata[i]['Point'][j][0]) + abs(nosepoint[j][1] - nosedata[i]['Point'][j][1])
                nosesum += sums
            if nosesum <= nosemin:
                nosemin = nosesum
                nose_idx = i

    mouthmin = float('inf')
    mouth_idx = 0
    if len(mouthpoint) == 12:
        for i in range(39):
            mouthsum = 0
            for j in range(1, len(mouthpoint)):
                sums = abs(mouthpoint[j][0] - mouthdata[i]['Point'][j][0]) + abs(mouthpoint[j][1] - mouthdata[i]['Point'][j][1])
                mouthsum += sums
            if mouthsum <= mouthmin:
                mouthmin = mouthsum
                mouth_idx = i
    coro = eyedata[eye_idx]['Content'] + eyebrowdata[eyebrow_idx]['Content'] + nosedata[nose_idx]['Content'] + mouthdata[mouth_idx]['Content']
    coro_data = coro.split(' / ')[:-1]
    coro_data = list(set(coro_data))
    random.shuffle(coro_data)
    coro_data = coro_data[:6]
    coro = ' / '.join(coro_data)
    result = str(coro)
    print(base64.b64encode(result.encode('utf-8')))
