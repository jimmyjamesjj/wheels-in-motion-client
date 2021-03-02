# wheels-in-motion
## Description
on landing page the user is able to see different sport cars' posts from other users and is able to like/unlike the post signin toview details or create own posts, if the user does
does not have an account can be able to creat an account by signingup
## User Stories
**.404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.

**.Signup:** As an anon I can sign up in the platform so that I can start post or hire a sport car.

**.Login:** As a user I can login to the platform so that I can see/edit/delete/create a post.

**.Logout:** As a user I can logout from the profile so no one else can use it.

**.Add a post:** As a user I can add a sport car so that I can share it with the community.

**.List of posts:** As a user I want to see the posted sport cars by other users so that I can choose one rent and drive.

**.Search sport car:**  As a user I want to search sport care by name so that I know if it´s already in the platform.

**.Add to requests:** As a user I want to request to hire a sport car from other .

**.See requests:** i want to see requests made by other users for my posted sport car .
# Client

## Routes

/ - Homepage

/auth/signup - Signup form

/auth/login - Login form

/sportCar/:id - sport car detials

/sportCar/create - create a sport car post

/profile/user - my details 

404

# Models
## User model

firstname - String // required

secondname - String // required

email - String // required & unique

password - String // required

## sportCar model

owner - ObjectID<User> // required

carName - String // required

Tansmission - String

wheelDrive- String

Horsepower- number

wheelDrive- String

insurance -boolean

Model- String

## request model

adress - String // required

date - String // required

owner - ObjectID<User> // required

sportCar - ObjectID<sportCar> // required
