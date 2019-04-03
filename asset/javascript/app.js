
var counter = 0;
var timeleft = 30;

function setup() {
  noCanvas();
var timer = select("#timer")
timeleft.html(timeleft-counter);

function timeIt() {
  start++;
  timer.html("timeleft-counter");
}
setInterval (timeIt, 1000);
}

var questions = 
[
  {
    question: "What is the capital city of United Kingdom?",
    choices: ["Manchester", "Birmingham", "London", "Birmingham"],
    answer: 2
  },
  
  {
    question: "What is the capital of United States?",
    choices: ["California", "New York", "Miami", "Florida"],
    answer: 1
  },

{
    question: "What is my name?",
    choices: ["Solomon", "John", "Helen", "Lidya"],
    answer: 1
  },
  
  
  
];

for ( var i = 0; i < questions.length; i++ ) {
  var question = questions[i].question;
  document.write ( question );
  var options = questions[i].choices;
  document.body.appendChild(document.createElement("br"));
   var name = "radio"+i; 
  for ( var opt in options ) {
  
    var radioEle = document.createElement("input");
    radioEle.type = "radio";          
    radioEle.value = options[opt];
    radioEle.name = name;
    document.body.appendChild(radioEle);
    var label = document.createElement("Label");
    label.innerHTML = options[opt];
    document.body.appendChild(label);
    document.body.appendChild(document.createElement("br"));
  }
  
  document.body.appendChild(document.createElement("br"));
  
}


                


  


 /* var myQuestion = [{
      question: "what is my name",
      choice:
   ["solomon",
    "john",
    "helen",
    "lidya"],
   
   correct: "solomon"
},
{
    question: "what is my favourite sport",
    choice:
    ["soccer",
    "tennis",
    "swimming",
    "footbal"],

    correct: "swimming"
},
{
    question: "where am I from",
    choice:
    ["Ethiopia",
    "Eritrea",
    "Sudan",
    "Kenya"],

    correct: "Eritrea"

}
  ]
*/


