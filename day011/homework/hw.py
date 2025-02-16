#შექმენით პროგრამა, რომელიც ბეჭდავს 5-ის ჯერადებს 1-დან 50-ის ჩათვლით for loop-ის გამოყენებით.

for i in range(1, 50):
    if i % 5:
        print(i)

#დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 2-დან 20-ის ჩათვლით for loop-ის გამოყენებით.

for i in range(1, 20):
    if i % 2:
        print(i)

#დაწერეთ ალგორითმი, რომელიც დაბეჭდავს 5-იდან ათის ჩათვლით რიცხვების ნამრავლს for loop-ის გამოყენებით.

for i in range(5,10):
    i *= i
print(i)

#დაწერეთ ალგორითმი, რომელიც მომხმარებელს შეეკითხება რიცხვს. თუ რიცხვი ლუწია გაყავით ორზე, სხვა შემთხვევაში გაამრავლეთ სამზე და მიუმატეთ ერთი.

num1 = int(input('enter a num1:'))
num2 = int(input('enter a num2:'))
for i in range(num1, num2):
    if i % 2:
        print(i)

num3 = int(input('enter a num3:'))
num4 = int(input('enter a num4:'))
for i in range(num3, num4):
    if i * 3:
        print(i)

num5 = int(input('enter a num5:'))
num6 = int(input('enter a num6:'))
for i in range(num5, num6):
    if i + 1:
        print(i)

#დაწერეთ ალგორითმი, რომელიც მომხმარებელს შეეკითხება რიცხვს და თქვენ გამოიტანთ ამ რიცხვის ფაქტორიალს, შეასრულეთ for loop-ით.

num = int(input('enter a num:'))
for i in range(5, 11):
    num *= i
print(num)