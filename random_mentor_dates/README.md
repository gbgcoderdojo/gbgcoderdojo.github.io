Random mentor dates
===================

Ett litet Pythonscript för att slumpa fram vem som håller Dojo när!


Exempelsession
--------------

```
$ make run
Namn på mentorer: Adam, Christoffer, Jim, Kristoffer, Olof
Hur många tillfällen? 2
Hur många mentorer per tillfälle? 3
Slumpseed [enter för random]: 1
Antal förslag: 2

** Förslag 1 **
Tillfälle 1: Adam, Christoffer, Jim
Tillfälle 2: Kristoffer, Olof, Adam

** Förslag 2 **
Förslag på mentorer
Tillfälle 1: Christoffer, Jim, Olof
Tillfälle 2: Adam, Jim, Kristoffer

```


Hur kör man scriptet?
---------------------

Om du har Python3:

    $ cd src
    $ python main.py

Om du har docker:

    $ docker build -t random-mentor-dates .
    $ docker run -it random-mentor-dates

Om du har make och docker:

	$ make build
	$ make run

