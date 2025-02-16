#დავალება 1:განიხილეთ ზემოთ მოცემული კოდი, დახატეთ მისი ალგორითმი, როგორც მე ვხატავ ხოლმე, გამოიყენეთ paint და ნახატის სქრინი ატვირთეთ github ზე

word = "ana"
reversed_word = ""

for index in range(len(word) - 1, -1, -1):
    reversed_word = reversed_word + word[index]

if word == reversed_word:
    print(word, "is palindrome")
else:
    print(word, "is not palindrome")

#დავალება 2: განიხილეთ ეს კოდი

numbers_list = []
repeat_value = []

for i in range(5):
    num = int(input("Please enter number: "))  #შეეკითხება მომხმარებელს რომ გამოატანინოს რიცხვი
    numbers_list.append(num) #გამოიტანს რიცხვს 5-თ ჯერ


for number in numbers_list:
    count = numbers_list.count(number) #დათვლის იმ ელემენტს რომელიც მეორდება სიაში
    if count > 1 and number not in repeat_value:
        repeat_value.append(number) #გამოიტანს მნიშნელობას რომელიც მეორდება
print(repeat_value) #გამოიტანს ცვლადის მნიშნელობას