# codewars-ები გვქონდა დასაწერად

# 1)

def bumps(road):
    if road == "n" or road == "n" and road.count("_") >= 2 or road.count("_") == 1:
        return "Woohoo!"
    elif road.count("_") == 0:
        return "Car Dead"
    
    return "Car Dead"

# 2)

def greet(name): 
    return f"Hello {name.capitalize()}"

# 3)

def sum_even_numbers(seq): 
    result = []
    
    for i in seq:
        if i % 2 == 0:
            result.append(sum(list(seq)[i]))
        
    return result

# 4)

def reverse(lst):
    empty_list = []
    
    empty_list.append(reversed(lst))
    
    return empty_list

# 5)

def averages(arr):
    result = []
    
    if arr == 0 or arr == 1:
        return []
    
    for i in arr:
        result.append(i + 2)
        
    return result

# 6)

def add(num1, num2):
    result = ""
    
    for i in range(num1, num2):
            result = num1[i] + [num2]
    
    return result

# 7)

def last_survivor(letters, coords): 
    for i in letters:
        for x in coords:
            if letters[i] >= coords[x]:
                return letters[i]
            
            return coords[x]

# 8)

def initialize_names(name):
    if name.count(" ") >= 3:
        return name.replace(" ", "")
    
    return name

# 9)

def get_issuer(number):
    cards = {
        "VISA": 4111111111111111,
        "AMEX": 378282246310005,
        "Mastercard": 5152535455,
        "Discover": 6011
    }

    match number:
        case cards if number == 4111111111111111:
            return "VISA"
        case other if number == 378282246310005:
            return "AMEX"
        case other if number == 5152535455:
            return "Mastercard"
        case other if number == 6011:
            return "Discover"
        case _:
            return "Unknown"

# 10)

def even_or_odd(s):
    odd = [1, 3, 4, 5, 7, 9]
    
    for i in odd:
        if s % 2 == 0 and s >= i:
            return "Even is greater then Odd"
        elif s % 2 == 0 and s == i:
            return "Even and Odd are the same"
        
        return "Odd is greater then Even"