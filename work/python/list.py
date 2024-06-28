var = ['hello world']
print(var)

num1 = int(input('enter a num1:'))
num2 = int(input('enter a num2:'))
num3 = int(input('enter a num3:'))
print([num1 - num2 - num3])

x = [i for i in range(10)]
print(x)

y = [i for i in range(0,28)]
print(type(y))

a = list(i for i in range(0,28))
print(a)

y = [i for i in range(0,28)]
print(type(y))

from typing import Union

def some_calculation(x: Union[int, float], y: Union[int, float]) -> int:
    return (x + y) ** 2