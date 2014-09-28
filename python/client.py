import urllib2
import time
import sys
import random
import json
import subprocess

server_url = "http://tap-me.herokuapp.com"
token = None

if len(sys.argv) == 2:
    token = sys.argv[1]
else:
    token = hex(random.randrange(0,2 ** 32))[2:]

token = 'cat'

print "Your token is", token
print "NFC URL", server_url + "/tap/" + token


while 1:
    response = json.loads(urllib2.urlopen(server_url + "/poll/" + token).read())
    if (response["message"] == "Notify!"):
        print "Notifications!"
        subprocess.call("notify-send \"Somebody is behind you!\"",shell=True)
    time.sleep(1)
