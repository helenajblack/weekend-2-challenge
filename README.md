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


---------------

two values (use input fields)
the types of mathematical operations (using button's): add, subtract, divide, multiply
a clear button will empty the input fields
The Client will be bundle up the inputs and mathematical operator into an object and then send it to the server via a POST request. So when the object leaves the Client, it should look something like this:

{
   x: 3,
   y: 4,
   type: "add"
}
Once the Server receives the request, it will compute the numbers in one of four different ways:

addition,
subtraction
multiplication
division
Once the result of the mathematical operation is determined, it should be sent back down to the Client where it will be displayed on the Front End.

HARD MODE

Create a calculator-like Front End!

Convert the input fields for the two values to buttons. This experience would allow the user to

click on a numerical button
click on a mathematical operator
click on a numerical button
click on an equal button that sends all of the information to the server
Remember, you will need to modify your Client logic to accommodate this new interface.

PRO MODE

Create a delay from when the Client receives the response from the Server, and when the calculation is actually displayed on the Front End:

The delay should be 3 seconds.
During that delay, show a message that says computing until the 3 second delay has finished, then remove the computing message while showing the calculation.
