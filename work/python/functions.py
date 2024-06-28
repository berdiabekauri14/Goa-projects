def new_func():
    for i in range(1, 50):
        print(i)

new_func()

def sum_numbers(*number: float) -> float:

    return sum(number)

print(sum_numbers(1, 2, 3, 4, 5))

def sum_number(*numbers: float) -> float:
    print(numbers)

    return sum(numbers)

print(sum_number(1, 2, 3, 4, 5))

from typing import Union

def some_calculation(x: Union[int, float], y: Union[int, float]) -> int:
    return (x + y) ** 2

def payment(value: float):
    balance: bool = value > 0

    if balance:
        print('accepted')

        print('payment success')
    else:
        print('denied')

        print('payment denied')

    return balance

payment(1)

def happy_birthday1(name, age):
    print(f'happy birthday {name}')
    print(f'you are {age} years old')
    print('happy birthday to you')

happy_birthday1('berdia', 11)

def happy_birthday2(name, age):
    print(f'happy birthday {name}')
    print(f'you are {age} years old')
    print('happy birthday to you')

happy_birthday2('berdia', 11)
happy_birthday2('batoni nika', 25)
happy_birthday2('nika', 15)