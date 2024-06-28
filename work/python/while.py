age = 11
while age < 18:
    age = age + 18
    break
print(age)

word = input('enter a word: ')
reversed_word = ''

while word == reversed_word:
    reversed_word = reversed_word + word
    break
print(word, 'is palindrome')

number_list1 = []

start = 0
end = 5
step = 2

while start < end:
    number_list1.append(start)
    start = start + step

print(number_list1)

number_list2 = []

sliced_list = []

start = 0
end = 5
step = 2

while start < end:
    sliced_list.append(step)
    start = start + step

sliced_list