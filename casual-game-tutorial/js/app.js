
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
        "kollision punkt i cirkel",
        "x/y animation längs linje",
        "visa och räkna poäng",
        "musklick",
        "slumptal"
    ]
  },
  {
    challenge: "Regnig stad",
    image: "cityrain",
    description: "Bygg en stad i regn med hjälp av en inladdad bakgrundsbild och vertikalt regn i form av små streck.",
    achiements: [
        "rita linjer",
        "ladda och visa bilder",
        "dynamiskt antal entiteter"
    ]
  },
  {
    challenge: "Studsboll",
    image: "bouncingball",
    description: "Simulera en studsande boll, med hjälp av acceleration i y-led (gravitation). När bollen rör marken byter y-rörelsen riktning på enklaste sätt. Bollen ska ritas ut som en bild som roteras (rotation i samma riktning som bollen rör sig).",
    achiements: [
        "rita roterade bilder",
        "accelerationsmekanik"
    ]
  },
  {
    challenge: "Sparka bollen",
    image: "kicktheball",
    description: "I detta minispel styr man en gubbe som kan stå stilla, gå vänster och gå höger, samt sparka. En stillaliggande boll animeras om den sparkas (fotpunkt inom bollcirkel), men bollen bromsar in och stannar upp efterhand tiden går. Om bollen faller ned genom en korg - ritad i bakgrundsbild - får spelaren poäng. Vid 5 poäng byts skärmen till 'GAME OVER' tills dess man trycker någon knapp, och spelet börjar om.",
    achiements: [
        "animation",
        "spelhändelser",
        "retardation",
        "hantera flera spelskärmar"
    ]
  },
  {
    challenge: "Dogfight",
    image: "dogfight",
    description: "Bygg ett helt 2D-spel som du kan spela med en kompis! I detta spel duellerar två småflygplan. De har oändligt med skott, och kan träffas 3 gånger innan de exploderar. Om flygplanen flyger för brant uppåt, eller nuddar toppen av skärmen, tappar de flygförmågan och störtar utan kontroll nedåt. De kan dock återfå flygförmågan om spelaren riktar flygplanets nos rakt neråt och tillräckligt hög hastighet uppnås. Flygplanen startar på varsin liten flygplats på marken. Sprinkla luften med rökpuffar, smådelar och explosioner och ljudeffekter så att det blir en riktigt kul spelupplevelse!",
    achiements: [
        "avancerad dynamik",
        "komplett spel",
        "2 spelare samtidigt",
        "dekorera med effekter"
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

