#invoking

def print_name(name, amount):
    for i in range(amount):
        print(name)

print_name('berdia', 5)

print_name('luka', 10)

print_name('nika', 20)

def happy_birthday(name, age):
    print(f'happy birthday {name}')
    print(f'you are {age} years old')
    print('happy birthday to you')

happy_birthday('berdia', 11)

def create_name(first, last):
    first_name = first.capitalize()
    last_name = last.capitalize()

    return first + '' + last

full_name = create_name('berdia', ' bekauri')

print(full_name)