num1 = int(input("Enter num1: "))
num2 = int(input("Enter num2: "))
result = []

for i in range(num1, num2 + 1):
    result.append(i + i)
    print(result[max(result)])
    print(result[min(result)])