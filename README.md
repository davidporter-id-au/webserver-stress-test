A quick investigation into the performance characteristics of nodeJS servers under heavy load. 

#### Contents: 
* A mock endpoint which delays by 200ms to emulate response lag
* A trivial koa webserver which calls this endpoint
* A trivial [locust](http://locust.io) config which is to hit the webserver and generate load

#### Requires
* some version of node with generator support
* locust to be installed (`pip install locustio`)

**Running:***
./run-stress-test.sh
