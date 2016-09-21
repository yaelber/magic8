//LOGIC:
//1. Promise should handle capturing question or alert user to enter text
//2. Once that's done a random answer should be selected and presented

//move the new promise to before the if
//1. user enter text
//2. press enter - listen to that event;
//3. capture his text just to see that he entered something - 

  


//   $("#magic8").on("keypress"), function(event) {
//     if (event.which == 13) {
//       var questionText = $("input[name=question]").val();



$(document).ready(function() {
  $("#magic8").on("keypress",function(event) {
    if (event.which == 13) {
    var questionText = $("input[name=question]").val();
    event.preventDefault();
    var magic8Ball = new Promise(function(resolve,reject) {
      var questionText = $("input[name=question]").val();
      if (questionText.length != 0) {
        setTimeout(function() {
          resolve(questionText);}, 3000);
      } else {
          reject("Please enter a question in the text box");
      }
    });
    
    magic8Ball.then(function(questionText){
    var answerArray = ["You will live forever", "You're making the right decision","SO AWSOME!", "Nahhhh Dude"];
    var randomAnswer = answerArray[Math.floor(Math.random() * answerArray.length)];
    $("#answer").text(randomAnswer);
  });
    magic8Ball.catch(function(err){
      alert(err)
    })
  }
  });
});



