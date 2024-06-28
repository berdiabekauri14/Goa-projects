#lambda function
x = lambda y: y + 1

print(x(1))

def func(x, y: int):
    z = lambda a: (a * x) + (a // x)
    b = lambda c: (c * y) + (c // y)
    d = 10
    d = z(d) + b(d)
    d = z(d) - b(d)
    print(d)

    return d

func(3, 2)

r = lambda q: (q * 2) - (q // 2)
s = lambda q: (q * 3) - (q // 3)
x = 3
x = r(x) + s(x)
x = r(x) - s(x)