# IronClub :swimmer: :tennis: :soccer:

## Description

Plataforma para realizar y crear actividades deportivas.

## User Sories

- homepage - 
- sign up - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- login - As a user I want to be able to log in on the webpage so that I can get back to my account
- logout - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- events list - As a user I want to see all the events available so that I can choose which ones I want to attend
- events create - As a user I want to create an event so that I can invite others to attend
- events detail - As a user I want to see the event details and attendee list of one event so that I can decide if I want to attend
- event attend - As a user I want to be able to attend to event so that the organizers can count me in

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



