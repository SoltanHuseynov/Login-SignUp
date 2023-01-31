# all setup to the librarys 
import os
import json
import time
with open("package.json","r") as file:
    value=json.load(file)
# to get keys from the josn
#these are convert a list
toGetKeys=value.get("dependencies")
theConvertList=list(toGetKeys)

toGetInput=input('Install Node.JS ? [Y/N]:')
def setupPKG(v):
    return os.system(v)

if( toGetInput in ["Y","y","n","N"]):
    if(toGetInput in ["N","n"]):
        setupPKG("npm install {}".format(theConvertList[1]))
        setupPKG("npm install {}".format(theConvertList[2]))
        setupPKG("npm install {}".format(theConvertList[3]))
        setupPKG("npm install {}".format(theConvertList[4]))
        setupPKG("npm install {}".format(theConvertList[5]))
        time.sleep(1)
        setupPKG("npm start")
    elif(toGetInput in ["y","Y"]):
        setupPKG("winget install -e --id OpenJS.NodeJS")
        time.sleep(1.5)
        setupPKG("npm install {}".format(theConvertList[1]))
        setupPKG("npm install {}".format(theConvertList[2]))
        setupPKG("npm install {}".format(theConvertList[3]))
        setupPKG("npm install {}".format(theConvertList[4]))
        setupPKG("npm install {}".format(theConvertList[5]))


