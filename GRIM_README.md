# Application state
---
- The front-end, design for a presentable website for the students to access is complete.

- In Front-End(CTF) pathnames were going to be checked from hitting the URL of 'localhost:3000/users/invalid' There, students are able to adjust the URL to 'localhost:3000/users'. When the component loads for the URL VIA (AppRouter in Routes directory) that component would check the previous application URL history to confirm the previous location. If true, then dump the tables from users within from API.

- We were going to hint at creating a additional user object that would have the name of the localhost the API is being hosted on for the user data dump. If the students doing the challenge can find that as a hint, then can use the credentials for the API for access.

## Front-End:
---

- There are two separate FE's. One meant for SQL(i)jection.

- One meant for CTF (capture the flag - Flag table challenge)

#### Front-End Notes:

```

> Handling of authentication through form needs to be completed, receiving a token from the API.

> Pathnames for attacks and vulnerabilities needs to be connected for the FE to BE.

```
---