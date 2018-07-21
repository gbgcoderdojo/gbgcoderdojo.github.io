
// Data kept here for now! Would make sense to move
// into separate file in future.
var challenges = [
  {
    challenge: "Hello World",
    image: "helloworld",
    description: "Bygg ett program som skriver HELLO WORLD på en plats på skärmen, som bestäms av innehållet i en textfil. Om textfilen ändras, ska HELLO WORLD flytta på sig inom en sekund utan att programmet behöver startas om.",
    achiements: [
        "komma igång",
        "text på skärmen",
        "förstå x,y koordinatsystem",
        "ställa in värden utan omstart"
    ]
  },
  {
    challenge: "Trummaskin",
    image: "drums",
    description: "Skriv ett program som spelar upp tre olika ljud när användaren trycker tangenterna A, S och D. Så länge A hålls nere, står det A på skärmen och samma för S och D.",
    achiements: [
        "spela upp ljud",
        "tangent ned-upp",
        "hantera true-false variabler"
    ]
  }
]

function getImageURL(name) {
  return 'images/' + name + '.png'
}

var app = new Vue({
  el: '#app',
  data: {
    challenges
  },
  methods: {
    getImageURL
  }
})

