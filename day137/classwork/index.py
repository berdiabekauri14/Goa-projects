# codewars-ი გვქონდა დასაწერად

def battle(x, y):
    alphabet = "ABCDEFGHIJKLMNOPQRSTUIWXYZ"
    
    if x == alphabet[:25] and y == alphabet[:24]:
        return x
    elif y == x[::-1]:
        return "Tie!"
    else:
        return y