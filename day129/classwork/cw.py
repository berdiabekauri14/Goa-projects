# codewars-ები გვქონდა

# Find twins

def elimination(arr):
    if arr == []:
        return None
    
    for i in range(len(arr)):
        if i == i:
            return arr[i]
    
    return None