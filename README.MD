# Installation


Run the following commands

 - git clone https://github.com/carlosmarinho/ze-delivery-challenge-react.git
 - cd ze-delivery-challenge-react
 - npm install
 - npm start

The last command (npm start) will run the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

# Tecnologies used

 - React
 - GraphQl
 - Apollo Client
 - CSS in JS (Styled Components)
 - mobile-first solution

# About the application

The application is designed to help users buy drinks along the country, it's designed with React and Apollo Client + GraphQl and its a responsive application to work on desktop and mobile.

I started developing the application with the apollo-boost client, but when i started coding the unit testing, i have some problem for testing with the current configuration, because i was trying to mock with the MockedProvider from @apollo/client so i decided to use the apollo client and got to do a great refactor all around the aplication to not use '<Query>' tag and use 'useQuery()'. However you can take a look at the first approach in the branch apollo-boost, to do so you can run the following command:

 - git checkout apollo-boost
 
 to get back to the master branch, the main branch of the application run the following code:
 
 - git checkout master
 
## Branch master

It's the main branch where the application is more complete.

## Branch apollo-boost

It's the branch where started developed with apollo-boost.

# Testing

I didn't have enough time to implement all tests, and i have never configured the apollo to do some testing and i had a few troubles, however as you can see we have a few tests at the application. To run the tests run the command bellow:

 - npm run test
