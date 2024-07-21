# match and case is same as if, else and elif statments

name = 'berdia bekauri'
age = 14

match name:
    case 'berdia bekauri'|'nikoloz nutsubidze' if age >= 14:
        print('you are too tall')
    case other if age == 14:
        print('same age')
    case other:
        print('you are too small')