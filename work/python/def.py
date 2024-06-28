def loop():
    for i in range(3):
        print(i)

loop()

def text_loop():
    for i in range(3):
        print('Goa is the best')

text_loop()

def new_type():
    Text = True
    Text2 = False
    print(type(Text))
    print(type(Text2))

new_type()

from typing import Union

def some_calculation(x: Union[int, float], y: Union[int, float]) -> int:
    return(x + y) ** 2

def some_calculation(x: int | float, y: int | float) -> int:
    return(x + y) ** 2

def new_variable():
    __name__ = 'berdia'
    __last__ = 'bekauri'
    __age__ = 11

def question_input():
    question = int(input('who is the best player in football history:'))
    print(question)
    print('incorrect')
    question2 = int(input('who is the best player in football history:'))
    print(question2)
    print('correct')

def variable_loop():
    x = [i for i in range(3)]
    print(x)

    y = [j for j in range(3)]
    print(y)

variable_loop()

def tuple_type():
    x = ()
    print(type(x))

    y = tuple(('hello world'))
    print(type(y))

tuple_type()

def lambda_func():
    r = lambda q: (q * 2) - (q // 2)
    s = lambda q: (q * 3) - (q // 3)
    x = 3
    x = r(x) + s(x)
    x = r(x) - s(x)

lambda_func()

def sum_numbers(*number: float) -> float:

    return sum(number)

print(sum_numbers(1, 2, 3, 4, 5))

def sum_number(*numbers: float) -> float:
    print(numbers)

    return sum(numbers)

print(sum_numbers(1, 2, 3, 4, 5))

def print_name(name, amount):
    for i in range(amount):
        print(name)

print_name('berdia', 11)
print_name('luka', 20)
print_name('nikachad', 30)

def payment(value: float):
    balance: bool = value > 0

    if balance:
        print('accepted')

        print('payment succeed')

    else:
        print('denied')

        print('payment denied')
    
    return balance

payment(1)

def args_func(*args):

    for args in args:
        print(args)

args_func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

def kwargs_func(**kwargs):

    for key, value in kwargs.items():
        print(f'{key}: {value}')

kwargs_func(name='berdia', last_name='bekauri', age=11)