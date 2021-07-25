# Welcome to the Survey creation tool

Steps to run the project locally:
1) Clone the repository
2) In terminal, navigate to the root folder of the project
3) Run command: yarn install
4) To start the application locally run command: yarn start
5) To login as admin the password is moonshiner

My overall approach:
I used `create-react-app` command line tool to get all the needed boilerplate and basic project setup.
I worked with hooks in all the components that would formerly be done using class components.
For the CSS part I chose to only work with basically one large CSS file instead of 'scoped' local styles of components, I don't have a good reason for this besides that I'm currently interested in large CSS files where cascade can be seen directly.
Already at this size of the project it felt that it would be useful to use TypeScript instead of plain JavaScript, but I was not sure if people who would look at the code know it so I decided not to use TS to keep things easier for everyone.

It is not yet possible to see or answer the surveys, only to create them.