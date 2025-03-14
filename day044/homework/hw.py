# codewars-ები გვქონდა გასაკეთებლად

# 1)

def pig_it(text):
    symbols = ['!', '?']
    words_list = text.split(" ")
    result = []
    
    for word in words_list:
        if word not in symbols:
            result.append(word[1:] + word[0] + "ay")
        else:
            result.append(word)
    
    return " ".join(result)

# 2)

def duplicate_count(text):
    for i in text:
        return text.count(text[i])