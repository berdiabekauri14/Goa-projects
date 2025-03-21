# Codewars-ები გვქონდა

# 1)

def dna_to_rna(dna):
    return dna.replace("T", "U")

# 2)

def find_short(s):
    l = ""
    
    for i in s:
        if s[i] <= 5:
            return i
    
    return l