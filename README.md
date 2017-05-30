# H1 Weekend Challenge 2

-------------------------------------------------------------------------------

**Steps**

- Installed express, npm, and nodemon(to autoupdate server as I save)

- Wrote server.js and tested to make sure server was running

- Created base folders and files:
  1. public
    *css/style.css*
    *scripts/scripts.js*
    *vendors/jquery-3.2.1.min.js*
  2. views
    *index.html*

- Created display components in index.html:
  + Buttons for mathematical operators, calculate, and clear
  + Input fields

- Linked .html to jquery and scripts .js and style.css files

- Bundled inputs and mathematical operators into an object to send to the server via a POST request
  {
     x: 3,
     y: 4,
     type: "add"
  }

- Wrote code in server.js that takes in property from scripts.js and uses switch statement to decide what type of calculation to do

- CSS (to make pretty)
