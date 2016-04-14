var numbers = [];

function PingPong(input){
  for(var counter = 1, userInput = input; counter <= userInput; counter++){
    if(counter % 15 === 0){
      numbers.push("pingpong");
    }else if(counter % 5 === 0){
      numbers.push("pong");
    }else if(counter % 3 === 0){
      numbers.push("ping");
    }else{
      numbers.push(counter);
    }
  }
}

//event listener for user's choice
$(document).ready(function(){
  $('#button').click(function(event){
    event.preventDefault();
    var userSelectedNumber = $('#numberChoice').val();
    var result = PingPong(userSelectedNumber);
    for(var i = 0; i < userSelectedNumber; i++){
      $("#list").append("<li>" + numbers[i] + "</li>");
    }
  });
});
