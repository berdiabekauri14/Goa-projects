# codewars-ი გვქონდა

def even_numbers(arr,n):
    result = []
    a = list(reversed(arr))
    for i in a:
        if n == 0:
            break
        if i % 2 == 0:
            result.append(i)
            n -= 1
    
    return list(reversed(result))