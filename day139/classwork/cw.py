# Codewars-ები გვქონდა გასაკეთებლად

# 1)

def is_letter(s):
    return len(s) == 1 and s.isalpha()

# 2)

def count_red_beads(n):
    if n <= 2:
        return (n - 1) * 0
    else:
        return (n * 4) // 2 - 2