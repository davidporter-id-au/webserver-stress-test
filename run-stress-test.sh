#!/bin/bash

function finish {
    echo cleaning up 
    kill $APP 
    kill $TESTER
    kill $LOCUST
    exit 0
}
trap finish EXIT

node app.js &
APP=$!

node tester.js & >/dev/null  
TESTER=$!

locust -f test.py --host=http://localhost:3000 & 
LOCUST=$!

open http://localhost:8089

sleep 2147483647 #sleep infinite
