# Codewars-ები გვქონდა გასაკეთებლად

# 1)

a = "code"
b = "wa.rs"
name = a + b

print(name)

# 2)

def solution(a, b):
    if len(a) > len(b):
        return f"{b}{a}{b}"
    
    return f"{a}{b}{a}"