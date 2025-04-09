# Codewars-ები:

# 1)

def get_count(sentence):
    vowels = "aeiou"
    
    if sentence == vowels:
        return 5
    elif sentence == "":
        return 0
    
    for i in range(len(sentence)):
        count = 0
        for x in range(len(vowels)):
            if i == x:
                count += 1
            elif i == "y":
                count += 0
            
            return count
        
# 2)

def calc_type(a, b, res):
    if int(a) + int(b) == int(res):
        return "addition"
    elif int(a) - int(b) == int(res):
        return "subtraction"
    elif int(a) * int(b) == int(res):
        return "multiplication"
    elif int(a) / int(b) == int(res) or int(a) // int(b) == int(res):
        return "division"
    
# 4)

def is_vowel(s): 
    if s == "a" or s == "A":
        return True
    elif s == "e" or s == "E":
        return True
    elif s == "i" or s == "i":
        return True
    elif s == "o" or s == "O":
        return True
    elif s == "u" or s == "U":
        return True
    
    return False

# 5)

def create_phone_number(n):
    for i in n:
        return f"({int(str(n[0]) + str(n[1]) + str(n[2]))}) {int(str(n[3]) + str(n[4]) + str(n[5]))}-{int(str(n[6]) + str(n[7]) + str(n[8]) + str(n[9]))}"