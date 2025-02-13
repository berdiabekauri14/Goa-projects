def multiple_numbers(number: int):
    num = int(input('enter a num: '))
    for multiply in range(num):
        if multiply > 0 and number not in num:
            print(multiply)
        elif number * num:
            print(num * number)
        
        return num * number + multiply

for func_call in range(int(input('enter a num to call the function: '))):
    numbers = int(input('enter numbers: '))
    multiple_numbers(numbers)