# Codewars-ები გვქონდა დასაწერად

# 1)

def calculator(x, y, op):
    if str(op) == "+":
        return x + y
    elif str(op) == "-":
        return x - y
    elif str(op) == "*":
        return x * y
    elif str(op) == "/":
        return x / y
    elif op != "+" and op != "-" and op != "*" and op != "/":
        return "unknown value"
    else:
        return "unknown value"
    
# 2)

def kata_13_december(lst): 
    result = []
    
    for i in lst: 
        if i % 2 != 0: 
            result.append(i)

    return result

# 3)

def replace_exclamation(st):
    vowels = "aeiou"
    result = ""
    
    if st == vowels:
        return "!!!!!"
    
    for i in range(len(st)):
        for x in range(len(vowels)):
            if st[i] == vowels[x]:
                st.replace(st[i], "!")
                result += st
                
    return result

# 4)

# class Cat extends Animal {
#   constructor(name) {
#     super(name);
#   }
  
#   speak() {
#     return `${this.name} meows.`
#   }
# }