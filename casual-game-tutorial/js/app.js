
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
  },
  {
    challenge: "Animerad box",
    image: "animatedbox",
    description: "Skriv ett program som ritar en fyrkantig låda som rör sig fram-och-tillbaka horisontellt över skärmen. När den nuddar endera sidan, vänder den riktning.",
    achiements: [
        "rita rektanglar",
        "enkel animation",
        "enkel kantkollission"
    ]
  },
  {
    challenge: "Skjut bollen!",
    image: "shoottheball",
    description: "Skriv ett program där en boll åker runt diagonalt över skärmen (lika stor ändring i x- som y-led). När man vänsterklickar med muspekaren på bollen försvinner den och börjar om på slumpartad position på skärmen. Skriv ut hur många poäng spelaren har på skärmen.",
    achiements: [
        "rita cirkelskivor",
        "x/y animation längs linje",
        "visa och räkna poäng",
        "musklick",
        "slumptal"
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

