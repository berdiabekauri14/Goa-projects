result = [1, 2, 3, 4, 5]

def remove_smallest(numbers):
    result = []
    
    for i in range(len(numbers)): # 0, 1, 2
        if i != numbers.index(min(numbers)):
            result.append(numbers[i])
    return result

print(remove_smallest(result))

print(result) # [2, 3, 4, 5]