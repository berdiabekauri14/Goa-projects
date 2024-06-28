#დავალება: შექმენით ფუნქცია, რომელსაც გადაეცემა ორი რიცხვი: start, end. ფუნქციამ უნდა დაბეჭდოს მათ შორის არსებული რიცხვები range-ის გამოყენებით

def print_name(name, start, end):
    for i in range(start, end):
        print(name)

print_name('berdia', 1, 10)

#დავალება2: შექმენით ფუნქცია, რომელსაც გადაეცემა start, end. ამ შემთხვევაში გამოთვალეთ მათ შორის არსებული რიცხვების ჯამი

def numbers(start, end):
    print_name(start + end)

numbers(1, 1)

#დავალება3: შექმენით ფუნქცია, რომელსაც გადაეცემა start, end. ამ ორ რიცხვს შორის არსებული, ყველა დაამატეთ ახალ სიაში. საბოლოოდ დაბეჭდეთ სიის საშუალო არითმეტიკული

def nums(start, end):
    print([start, end])

nums(1, 10)

#დავალება4: შექმენით ფუნქცია, რომელსაც გადაეცემა სახელი და ინდექსი. თქვენი დავალებაა, რომ სახელის ინდექსზე მყოფი ასო დაბეჭდოთ

def name_index(name):
    print(name[0], name[3])

name_index('berdia')

#შექმენით ფუნქცია სადაც გამოიყენებთ for loops რომელსაც დაატრიალებთ 100 ჯერ

def for_loop():
    for i in range(100):
        print(i)
    
for_loop()

#როდესაც ასაკი მიაღწევს 18 წელს დაპრინტეთ რომ თქვენ გახდით ზრდასრული

def years_old(age1: int):
    age2 = 18

    if age1 < age2:
        print('i am ზრდასული')
    else:
        print('i am young')

years_old(11)

#როდესაც ასაკი მიაღწევს 60 წელს დაპრინტეთ რომ თქვენ გახვედით პენსიაზე

def older(age: int):
    old = 60

    if old > age:
        print('i am adult')
    else:
        print('i am young')

older(11)

#როდესაც ასაკი მიაღწევს 100 წელს დაპრინტეთ რომ თქვენ უკვე მოხუცებული ხართ

def oldest(adult_age: int):
    old_age = 100

    if old_age > adult_age:
        print('i am old')
    else:
        print('i am adult')

oldest(60)

#დავალება5: შექმენით ფუნქცია, სადაც შექმნით ცვლადს. ეს ცვლადი საბოლოოდ ფუნქციის გარეთ დაბეჭდეთ

def sum_numbers(*numbers: int):
    print(numbers)

    return sum(numbers)

print(sum_numbers(1, 2, 3, 4, 5))

#დავალება6: შექმენით ფუნქცია, რომელსაც გადაეცემა ორი რიცხვი. საბოლოოდ ფუნქციამ უნდა დააბრუნოს ამ ორი რიცხვის ჯამი, ფუნქციის გარეთ დაბეჭდეთ ეს შედეგი

def numbers(num1, num2: int):
    print(num1 + num2)

    return num1 + num2

numbers(1, 1)

#დავალება7: შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების სია. თქვენი დავალებაა, რომ დააბრუნოთ სიაში არსებული რიცხვების ჯამი, ასევე დაბეჭდოთ ის ფუნქციის გარეთ

def number_list(num1, num2: int):
    result = 0
    print([num1 + num2])

    result = result == num1 + num2

    return num1 + num2

number_list(int(input('enter a num1: ')), int(input('enter a num2: ')))