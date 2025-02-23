# codewars-ი გვქონდა გასაკეთებლად

# remove the smallest elemment in an array

def remove_smallest(numbers):
    if numbers == []:
        return [];
    
    numbers.remove(min(numbers))
    
    result = numbers    

    return result

print(remove_smallest([2, 3, 1, 5]))