# IronClub :swimmer: :tennis: :soccer:

## Description

Plataforma para realizar y crear actividades deportivas.

## User Sories



## Back-end

Method | Route |	Description |	Request - Body
------ | ----- | ------------ | --------------
GET    |  /  | Main page route. Renders home index view.             
GET | /login | Renders login form view. 
POST | /login | Sends Login form data to the server. | { email, password }
GET | /signup | Renders signup form view.
POST | /signup | Sends Sign Up info to the server and creates user in the DB. | { username, email, password }
GET | /user/:id | Private route. Renders profile form view.
GET | /user/:id/edit | Private route. Renders edit-profile form view.
POST | /user/:id/edit | Private route. Renders edit-profile form view. | { img, username, age, instructor(y/n), activities }
GET | /user/create-class | Private route. Renders create-class form profile.
POST | /user/create-class | Private route. Renders create-class form profile. | { img, title, day, time, participants, amenity, description }
GET | /classes | Private route. Renders classes view. 
GET | /classes/:id | Private route. Renders class form profile.
GET | /classes/:id/edit-class | Private route. Renders edit-class form profile.
POST | /classes/:id/edit-class | Private route. Renders edit-class form profile. | { img, title, day, time, participants, amenity, description }


## Models

User Model



