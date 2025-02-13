number_list = []
repeat_value = []

for i in range(5):
    num = int(input('enter a num:'))
    number_list.append(num)

for number in number_list:
    count = number_list.count(number)
    if count > 1 and number not in repeat_value:
        repeat_value.append(number)
print(repeat_value)