function PingPong(input){
  var userInput = input.length, i = 0,
  while(userInput % 3 === 0){
    $('#result').append('ping');
    i++;
  }
  while(userInput % 5 === 0){
    $('#result').append('pong');
    i++;
  }
  while(userInput % 15 === 0){
    $('#result').append('pingpong');
    i++;
  }
  while(userInput % 3 !== 0 && userInput % 5 === 0 && userInput % 15 === 0){
    $('#result').append(i);
  }
  i++;


}
$(document).ready(function(){
  $('#button').click(function(){
    PingPong();





  });
});
