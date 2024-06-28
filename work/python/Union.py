#Union

from typing import Union

def some_calculation(x: Union[int, float], y: Union[int, float]) -> int:
    return (x + y) ** 2

some_calculation(10, 10)