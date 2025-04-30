# 1)

def count_vowel(s):
    count = 0

    for i in range(len(s)):
        if s[i] == "a" or s[i] == "A":
            count = count + 1
        elif s[i] == "e" or s[i] == "E":
            count = count + 1
        elif s[i] == "i" or s[i] == "I":
            count = count + 1
        elif s[i] == "o" or s[i] == "O":
            count = count + 1
        elif s[i] == "u" or s[i] == "U":
            count = count + 1
        else:
            count = count + 0

    return count

print(count_vowel("aaaAA"))