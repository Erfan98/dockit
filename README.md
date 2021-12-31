### For Local Use, follow the commands
```
cd backend
```
```
npm i
```
```
npm run start
```

```
cd ../frontend
```
```
npm i
```
```
npm run start
```



### All the phases have done succefully.

```
    Practical Work Specifications

    Case: RG Todo app

    Phase 1: Initial setup (5 p)
    Phase 2: Dockerize localhost (5 p)
    Phase 3: CI/CD Pipeline & Remote Server (5 p)
    Phase 4: Implement the TODO app (10 p)
    Phase 5: Testing (5 p)
    Phase 6: Database (5 p)

```

### Phase Requirements Navigation 

#### Random Task List using faker endpoint
[/api/v1/task/random](/api/v1/task/random)

#### MongoDB Connected with atlas cluster
./backend/index.js
(const MONGODBURL = "mongodb+srv://tanvir:5**2@epitaph.gntgc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";)

#### Backend REST API End Points
    -   GET [/api/v1/task/random](/api/v1/task/random)
    -   GET [api/v1/task/list/get](/backendapi/v1/task/list/get)
    -   GET [api/v1/task/list/get/:tid](/api/v1/task/list/get/:tid)
    -   POST [api/v1/task/list/post](/api/v1/task/list/post)
    -   DELETE [api/v1/task/list/delete/:tid](/api/v1/task/list/delete/:tid)
    -   GET [api/v1/task/list](/api/v1/task/list)
    -   GET [/emojis](/emojis)
    -   GET [/api](/api)

#### Backend Custom Test Result
```
    GET /api 200 5.275 ms - 356
        ✔ responds withfound message (51ms)

    GET /api/v1/task/list/get
    GET /api/v1/task/list 200 1.166 ms - 36
        ✔ responds with a json message

    GET /api/emojis
    GET /api/emojis 200 1.459 ms - 22
        ✔ responds with a json message

    app
    GET /what-is-this-even 404 1.223 ms - 10664
        ✔ responds with a not found message

    GET /
    GET / 200 1.832 ms - 52
        ✔ responds with a json message

    5 passing (121ms)
```
