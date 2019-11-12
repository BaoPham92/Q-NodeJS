# About:
__*A repository for building a NodeJS API (application programming interface.) with security vulnerable endpoints for SQL(i) testing.*__

## Overview:
---

#### The gist:
    Containing a minimum of 6 endpoints, there are a couple of endpoints that are vulnerable (not sanitized).

    Participants are supplied with the objective of creating a SQL(injection) on a vulnerable endpoint that they must find.

## Student Objectives:
---
> Find and identify the vulnerable endpoint(s).

> Find a obvious, yet adjustable syntax for cross site scripting. This would appear as a typical ```<a>``` tag on the client-side.

> Successfully excute a SQL(i)njection dumping "flag" & "user" tables and user credentials (username & password) allowing students to access and update values for the "flag".

## Instructor Guide:
---
> Learning objectives are to guide and instruct experience in finding exploits for SQL based endpoints for students.

#### Instructor Notes:
- There are 3 front-end folders that focuses on individual challenges for the students.

> CTF is for capture the flag. Dumping the flag tables and reading the flag table.

> XSS for students to access & read the flag table.

> SQL(i) is for the injection.

- API Notes:
> From Joseph: The "API" folder is the section that is built around the unsecure API objective of the hackathon, whereas the "login" folder is the section that is built around the SQL(i) injection objective of the hackathon. Neither are related and do not depend on each other and do not have the same themes. They are 2 completely different projects.