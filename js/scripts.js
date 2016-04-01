function PingPong(input){
  for(var counter = 1, userInput = input; counter <= userInput; counter++){
    if(counter % 15 === 0){
      $('#list').append('<li class = "pingpong">' + 'pingpong' + '</li>');
    }else if(counter % 5 === 0){
      $('#list').append('<li class = "pong">' + 'pong' + '</li>');
    }else if(counter % 3 === 0){
      $('#list').append('<li class = "pingpong">' + 'ping' + '</li>');
    }else{
      $('#list').append('<li>' + counter + '</li>');
    }
  }
}

//event listener for user's choice
$(document).ready(function(){
  $('#button').click(function(event){
    event.preventDefault();
    var userSelectedNumber = $('#numberChoice').val();
    PingPong(userSelectedNumber);
    $('#button').hide();
  });
});
