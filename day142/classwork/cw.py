# Codewars-ები გვქონდა დასაწერად

# 1)

def calculate_years(principal, interest, tax, desired):
    years = 0
    
    while principal < desired:
        principal += (interest * principal) * (1 - tax)
        years += 1
        
    
    return years

# 2)

def round_to_five(arr):
    return [5 * (num // 5 + (num % 5 >= 2.5)) for num in arr]