#proffesinal functions

from typing import Union

def some_calculation(x: Union[int, float], y: Union[int, float]) -> int:
    return (x + y) ** 2

def some_calculation(x: int | float, y: int | float) -> int:
    return (x + y) ** 2

__name__ = 'berdia'
__last_name__ = 'bekauri'
__age__ = 11

x = [i for i in range(3)]
print(x)

y = [j for j in range(3)]