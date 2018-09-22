import wikiquote


def clear_screen():
	print('\n' * 100)


def print_quote():
	(quote, author) = wikiquote.quote_of_the_day()
	qotd = 'Quote of the day'
	dash = '-' * len(qotd)
	print(f'{qotd}\n{dash}')
	print(f'"{quote}"\n\t({author})')
	print(dash)


def run():
	print("to be implemented")


if __name__ == '__main__':
	clear_screen()
	print_quote()
	run()
