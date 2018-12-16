CoderDojo Göteborgs GitHub Pages
================================

Här samlar vi länkar till våra onlinegrejer.

Commits till master på detta repo autopublicerar innehållet i detta repo till följande adress:

https://gbgcoderdojo.github.io till vilken vi pekar från https://coderdojogbg.org/

Sidan baseras på statisk generering med hjälp av [Jekyll](https://jekyllrb.com/)

För att redigera sidan kan man köra den lokalt:

* gem install bundler
* bundle update
* bundle install
* bundle exec jekyll serve --safe

Det mesta av redigeringen sker i _config.yml. Vill man lägga till en nyhet görs detta _posts. Se [Jekylls dokumentation](https://jekyllrb.com/usage) för mer information.

Om man vill lägga till en separat undersida så skapas detta enklast genom att:

* Lägga till ett nytt repo
* Skapa en branch som heter gh-pages
* Skapa en index.html i repo-roten som fungerar som landningssida
* Länka till sidan https://coderdojogbg.org/REPO_NAMN

[casual-game-tutorial](https://github.com/gbgcoderdojo/casual-game-tutorial) funkar på det sättet.
