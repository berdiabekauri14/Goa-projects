# codewars-ები გვქონდა დასაწერად

# 1)

def sum_str(a, b):
    return f'{int(a) + int(b)}'

# 2)

def flick_switch(lst):
    result = []
    
    for i in lst:
        if lst[i] == "flick" or lst[i] == 'flick':
            result.append(True, i = False)
    
    return result

# 3)

def open_or_senior(data):
    result = []
    
    for i in data:
          if data[i] >= 55:
                result.append("Senior")
          result.append("Open")
    
    return result

# 4)

def is_anagram(test, original):
    return sorted(test.lower()) == sorted(original.lower())

# 5)

def is_isogram(string):
    if string[0] == string.upper():
        return True
    
    return False

# 6)

def get_middle(s):
    result = ""
    
    for i in s:
        if i % 2 == 0:
            result += s[1, 2]
        
        result += s[1]
    
    return result

# 7)

def xo(s):
    if s[0] == "o":
        return True
    
    return False