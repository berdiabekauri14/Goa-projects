# codewars-ები გვქონდა

# 1)

def min_max(lst):
    result = [min(lst), max(lst)]
    
    return result

# 2)

def number(lines):
    if lines == []:
        return []
    
    result = []
    for i in range(len(lines)):
        result.append(f"{i + 1}: {lines[i]}")
    
    return result

# 3)

def bonus_time(salary, bonus):
    if bonus == True:
        return f"${salary * 10}"
    else:
        return f"${salary}"

# 4)

def maskify(cc):
    result = "";
    
    if len(cc) == 3:
        return cc
    
    for i in range(len(cc)):
        result += cc.replace(cc[-1:i], "#" * i)
    
    return result

# 5)

def double_char(s):
    result = ""
    
    for i in range(len(s)):
        result += f"{s[i]}{s[i]}"
    
    return result