# Codewars

def name_shuffler(str):
    return " ".join(str.split(" ")[::-1])

def get_real_floor(n):
    if n <= 0: return n
    if n < 13: return n - 1
    if n > 13: return n - 2

def xor(a, b):
    return a != b

def position(letter):
    return "Position of alphabet: {}".format(ord(letter) - 96)

def get_char(c):
    return "%c" % c

def pipe_fix(nums):
    return list(range(nums[0], nums[-1] + 1))

def unusual_five():
    return len("five!")