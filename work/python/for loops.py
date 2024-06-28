#for loops

for i in range(0,28):
    print(i)

num1 = int(input("enter a num1:"))
num2 = int(input("enter a num2:"))
for i in range(num1,num2):
    print(i)

num1 = int(input("enter a num1:"))
num2 = int(input("enter a num2:"))
for i in range(num1 + 1, num2 + 1):
    print(i)

for i in range(3):
    print('Goa is the best')

for i in range(3):
    print(i)

for j in range(3):
    print(j)

x = [j for j in range(3)]
print(x)

a = [i for i in range(0,27 + 1)]
print(a)

b = [j for j in range(0,27 + 1)]
print(b)

num1 = int(input('enter a num1:'))
num2 = int(input('enter a num2:'))
for i in range(num1, num2):
    if i % 2:
        print(i)

num1 = int(input('enter a num1:'))
num2 = int(input('enter a num2:'))
for i in range(num1, num2):
    if i * 3:
        print(i)

num1 = int(input('enter a num1:'))
num2 = int(input('enter a num2:'))
for i in range(num1, num2):
    if i + 1:
        print(i)

result = 1
for i in range(5, 11):
    result *= i
print(result)

result = 1
for i in range(5, 11):
    result *= i
    print(i)

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