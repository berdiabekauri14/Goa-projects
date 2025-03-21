# codewars-ები გვქონდა გასაკეთებლად

# 1)

def row_weights(array):
    result = []
    
    for i in array:
        result.append(array[i] + i)
    
    return result

# 2)

def remove_smallest(numbers):
    result = []
    
    for i in range(len(numbers)):
        if i != numbers.index(min(numbers)):
            result.append(numbers[i])
    return result

# 3)

def generate_hashtag(s):
    result = "#" + s.title().replace(" ", "")
    return result if len(result) > 1 and len(result) <= 140 else False