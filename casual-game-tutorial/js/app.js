
// Data kept here for now! Would make sense to move
// into separate file in future.
var challenges = [
  {
    challenge: "Hello World",
    achiements: [
        "komma igång",
        "text på skärmen",
        "förstå x,y koordinatsystem",
        "ställa in värden utan omstart"
    ]
  },
  {
    challenge: "Trummaskin",
    achiements: [
        "spela upp ljud",
        "tangent ned-upp",
        "hantera true-false variabler"
    ]
  }
]

var app = new Vue({
  el: '#app',
  data: {
    challenges
  }
}) 

