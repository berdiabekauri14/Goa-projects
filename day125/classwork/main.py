# codewars-ი გვქონდა გასაკეთებლად

# 7 kyu

def similarity(a, b):
    if a == b:
        return 1
    else:
        return 0
    
    for i in range(len(a)):
        for x in range(len(b)):
            if i == b[x] or a[i] == x:
                return 0.5
            else:
                return 0
    
    return 0