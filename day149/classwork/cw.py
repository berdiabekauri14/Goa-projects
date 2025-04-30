# codewars-ები გვქონდა დასაწერად

# 1)

def cap_me(arr):
    result = []
    
    for i in range(len(arr)):
        result.append(arr[i].capitalize())
    
    return result

# 2)

def square_color(file, rank):
    names = "abcdefgh"
    m = names.index(file)
    color = ["black", "white"]
    if m % 2:
        return color[rank % 2]
    return color[not rank % 2]