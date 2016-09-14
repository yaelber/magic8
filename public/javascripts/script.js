//LOGIC:
//1. Promise should handle capturing question or alert user to enter text
//2. Once that's done a random answer should be selected and presented

//move the new promise to before the if
console.log("Hi");


$("#magic8").submit(function(event){
  var questionText = $("input[name=question]").val();
  event.preventDefault();
  var magic8Ball = new Promise(function(resolve,reject) {
    if (questionText.length != 0) {
      setTimeout(function() {
        resolve(answer);}, 3000);
    } else {
        reject(alert("Please enter a question in the input box!"))
    }
  });
  magic8Ball.then(function(questionText){
  var answerArray = ["You will live forever", "You're making the right decision","SO AWSOME!", "Nahhhh Dude"];
  var randomAnswer = answerArray[Math.floor(Math.random() * answerArray.length)];
  $("#answer").innerHTML = randomAnswer;
});
});




