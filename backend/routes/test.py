import base64
import sys

result = str(sys.argv[1])
print(base64.b64encode(result.encode('utf-8')))