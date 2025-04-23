# Codewars-ები გვქონდა დასაწერად

# 1)

def most_frequent_item_count(collection):
    highest = 0
    for element in collection:
        if collection.count(element) >= highest:
            highest = collection.count(element)
    return highest

# 2)

def sum_args(*args):
    return sum(args)

# 3)

def sum_digits(number):
    n = number if number > 0 else -number
    if number == 0:
        return 0
    sum = 0
    
    while n > 0:
        sum += n % 10
        n//=10
    return sum

# 4)

def my_languages(results):
    result = []
    
    for i in results:
        if results[i] >= 60 and i not in result:
            result.append(results[i])
    
    result.sort()
    result2 = []
    for i in result:
        for x in results:
            if i == results[x]:
                result2.append(x)
    
    result2 = result2[::-1]
    
    return result2