# Welcome to the Survey creation tool

Deployed demo of the application is at https://shiner-survey-tool.herokuapp.com/\
Code repository is at https://github.com/okramovic/ms

Steps to run the project locally:
1) Clone the repository
2) In terminal, navigate to the root folder of the project
3) Run command: yarn install
4) To start the application locally run command: yarn start
5) To login as admin the password is moonshiner

\
It is not yet possible to see or see or answer the surveys created, only to create them.
\
\
My overall approach:
\
\
I used `create-react-app` command line tool to get all the needed boilerplate and basic project setup.\
I worked with hooks in all the components that would formerly typically be done using class components.\
For the CSS part I chose mostly to only work with one large CSS file instead of scoped local styles of components, I don't have a good reason for this besides that I'm currently interested in large CSS files where cascade can be seen directly.\
Since this page is more of an Admin interface rather than actual customer-facing interface, responsiveness is currently rather minimal as it would be used more to create surveys and I believe people prefer to do such things in peace/on computer or tablet(sizes covered) rather than on phones while "in terrain".\
Already at this size of the project it felt that it would be useful to use TypeScript instead of plain JavaScript, but I was not sure if people who would look at the code know it so I decided not to use TS to keep things easier for everyone.
\
\
Survey popups are the only place where I've put more effort into doing the proper accessibility (ARIA labels etc), mostly because popups and modals are typically not done well around the web (tabbing gets users out of modals into page in the background) and as such they seem to me as an interesting little problem to tackle in this challenge.
To take care of keyboard focus management when Popup is shown, I used a library called focus-trap-react.
