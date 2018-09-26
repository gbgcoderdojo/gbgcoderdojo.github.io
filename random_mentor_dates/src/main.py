import random
import wikiquote
import collections


def clear_screen():
    print('\n' * 100)


def print_quote():
    (quote, author) = wikiquote.quote_of_the_day()
    qotd = 'Quote of the day'
    dash = '-' * len(qotd)
    print(f'{qotd}\n{dash}')
    print(f'"{quote}"\n\t({author})')
    print(dash)


def names(s):
    return [n.strip() for n in s.split(',')]
assert(names('jim, olof,kristoffer') == ['jim', 'olof', 'kristoffer'])


def freqcount_assignment(assignment):
    c = collections.Counter()
    for contenders in assignment:
        c += collections.Counter(contenders)
    return c


def balanced_assignment(assignment, expected_count):
    freqtable = freqcount_assignment(assignment)
    print(f"Kontrollerar om {str(freqtable)} är balanserad...")
    for mentor in freqtable:
        freq = freqtable[mentor]
        de = abs(freq - expected_count)
        print(f"Mentor {mentor} har {freq} tillfällen, dvs delta={de:.1f}.")
        max_dist = 0.75
        if de > max_dist:
            print(f"Detta är mer än {max_dist} i avstånd till förväntan! Skrotar assignment.")
            return False
    return True


def generate_one_assignment(mentors, dojos, mentors_per_dojo, suggestions):
    ''' Algorithm: build a random assignment until one that is valid'''
    dates = []
    for _ in range(dojos):
        contenders = sorted(mentors)
        random.shuffle(contenders)
        dates.append(tuple(contenders[:mentors_per_dojo]))
    return dates


def expected_dojos_per_mentor(mentor_count, dojo_count, mentors_per_dojo):
    return (dojo_count * mentors_per_dojo) / mentor_count
assert(expected_dojos_per_mentor(1, 1, 1) == 1)
assert(expected_dojos_per_mentor(2, 2, 2) == 2)
assert(expected_dojos_per_mentor(3, 3, 1) == 1)
assert(expected_dojos_per_mentor(2, 10, 2) == 10)
assert(expected_dojos_per_mentor(2, 10, 1) == 5)
assert(expected_dojos_per_mentor(4, 1, 2) == 0.5)


def generate_assignment(mentors, dojos, mentors_per_dojo, suggestions, expected_count):
    for i in range(100):
        assignment = generate_one_assignment(mentors, dojos, mentors_per_dojo, suggestions)
        if balanced_assignment(assignment, expected_count):
            return assignment
    return []


def run():
    mentors = names(input("Namn på mentorer (kommaseparera): "))
    dojos = int(input("Hur många tillfällen? "))
    mentors_per_dojo = int(input("Hur många mentorer per tillfälle? "))
    suggestions = int(input("Antal förslag: "))
    expected_count = expected_dojos_per_mentor(len(mentors), dojos, mentors_per_dojo)
    for i in range(1, suggestions+1):
        print(f'\n** Förslag {i} **')
        print(f'Förväntat antal Dojos per mentor: {expected_count}')
        assignment = generate_assignment(
            mentors,
            dojos,
            mentors_per_dojo,
            suggestions,
            expected_count)
        for (i, contenders) in enumerate(assignment):
            ns = ', '.join(sorted(contenders))
            print(f'   - Mentorer tillfälle {i + 1}: {ns}')
        freqtable = freqcount_assignment(assignment)
        print(f"   - Antal dojos per mentor: {str(freqtable)} ")



if __name__ == '__main__':
    clear_screen()
    print_quote()
    run()


'''
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
'''