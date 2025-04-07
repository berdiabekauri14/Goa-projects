# Codewars-ი გვქონდა დასაწერად

def palindrome(num):
    if type(num) != "<class int>":
        return "Not valid"
    elif len(str(num)) == 1:
        return 0
    
    if str(num)[::-1] == str(num):
        return num
    else:
        return 0