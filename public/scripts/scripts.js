$(onReady);

//on click - click button and that sends inputs to server
function onReady() {

  $('#add').on('click', sendAdd);
  $('#subtract').on('click', sendSubtract);
  $('#multiply').on('click', sendMultiply);
  $('#divide').on('click', sendDivide);
  $('#calculate').on('click', getCalculation);
}

//    <div id="inputFields">
//       <input id="inputOne" type="text" placeholder="x">
//       <input id="inputTwo" type="text" placeholder="y">
//       <input id="solution" type="text" placeholder="Solution">
//     </div>
//
//     <div class="mathButtons">
//       <button type="button" name="button" id="add"> + </button>
//       <button type="button" name="button" id="subtract"> - </button>
//       <button type="button" name="button" id="multiply"> * </button>
//       <button type="button" name="button" id="divide"> / </button>
//       <button type="button" name="button" id="calculate"> =  </button>

//input fields

//buttons that specify add/subtract/multiply/divide

//function that 'if' calculation type button is pressed, sends equation to server

//send input to server
$.ajax({
  type: 'POST',
  url: '/setNumber',
  data: requestObject,
  success: function(response) {
    console.log(response);
  }
});

//displays response in field
