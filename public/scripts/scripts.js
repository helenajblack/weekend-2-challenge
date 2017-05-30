$(onReady);

var dataToSend= {
     x: 0,
     y: 0,
     type: ""
};

//on click - click button and that sends inputs to server
function onReady() {

  $('#add').on('click', sendAdd);
  $('#subtract').on('click', sendSubtract);
  $('#multiply').on('click', sendMultiply);
  $('#divide').on('click', sendDivide);
  $('#calculate').on('click', getCalculation);
  $('#clear').on('click', clearInputs);
}

//send input to server
function sendAdd(){
  dataToSend.type = "add";
  $('#operator').text('+');
  console.log("I'm adding!");
}
function sendSubtract(){
  dataToSend.type= "subtract";
    $('#operator').text('-');
  console.log("I'm subtracting!");
}
function sendMultiply(){
  dataToSend.type= "multiply";
    $('#operator').text('*');
  console.log("I'm multiplying!");
}
function sendDivide(){
  dataToSend.type= "divide";
    $('#operator').text('/');
  console.log("I'm dividing!");
}

//clear function
function clearInputs(){
  $('#inputOne').val('');
  $('#inputTwo').val('');
  $('#solution').text('?');
  $('#operator').text('Ω');
}

//getCalculation
function getCalculation(){

  dataToSend.x= $('#inputOne').val();
  dataToSend.y= $('#inputTwo').val();

//ajax
$.ajax({
  type: 'POST',
  url: '/calculate',
  data: dataToSend,
  success: function(response) {
    console.log(response);
    $('#solution').text(response.answer);
  }
});
}
