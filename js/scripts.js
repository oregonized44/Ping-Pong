function PingPong(input){
  //declaring my variables
  var userInput = input.length, i = 0
  //while these conditions are met...
  while(userInput % 3 === 0){
    $('#list').append('<li>' + 'ping' + '</li>');
    i++;
  }
  while(userInput % 5 === 0){
    $('#list').append('<li>' + 'pong' + '</li>');
    i++;
  }
  while(userInput % 15 === 0){
    $('#list').append('<li>' + 'pingpong' + '</li>');
    i++;
  }
  while(userInput % 3 !== 0 && userInput % 5 === 0 && userInput % 15 === 0){
    $('#list')
    i++;
  }
}
//event listener for user's choice
$(document).ready(function(){
  $('#button').click(function(event){
    event.preventDefault();
    console.log('event fires');
    var userSelectedNumber = .val();
    PingPong(userSelectedNumber);





  });
});
