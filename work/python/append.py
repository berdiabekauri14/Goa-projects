number_list = [1, 2, 3, 4]
even_numbers = []

for number in number_list:
    if number % 2 == 0:
        even_numbers.append(number)

print(even_numbers)

odd_numbers = []

for number in number_list:
    if number % 2 == 1:
        odd_numbers.append(number)

print(odd_numbers)