# codewars-ი გვქონდა გასაკეთებლად

def tower_builder(n_floors):
    result = []
    
    num = n_floors * 2 - 1
    
    for i in range(num , 0, -2):
        spaces = (num - i) // 2 
        result.append(" " * spaces + "*" * i + " " * spaces)
    return result[::-1]