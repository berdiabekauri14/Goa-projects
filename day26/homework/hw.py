#შექმენით ფუნქცია, რომელიც დააბრუნებს მარტივია თუ არა რიცხვი (მარტივია რიცხვი, თუ მას მარტო ორი გამყოფი აქვს).

def easy_hard(number: int):
    easy_number = []
    hard_number = []

    if number % 1 and number == 0:
        easy_number.append(number)
        print(number, 'is easy')
    else:
        hard_number.append(number)
        print(number, 'is hard')
    
    return number

easy_hard(int(input('enter a number: ')))

#შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია. თქვენი დავალებაა, რომ დააბრუნოთ ამ სიის განახლებული ვერსია, სადაც ყველა სახელი დიდი ასოთი დაიწყება.

def capitalize_list(name: list):
    name.capitalize()

    return name + ''

capitalize_list('berdia')

#შექმენით ფუნქცია, რომელსაც გადაეცემა მთელი რიცხვების სია. შემდეგ გამოიყენეთ ციკლი, რათა განიხილოთ ამ სიის ყველა რიცხვი - თუ რიცხვი ლუწია, ახალ სიაში დაამატეთ მისი განაყოფი ორზე, ხოლო თუ კენტია, მაშინ რიცხვის ნამრავლი ორზე. საბოლოოდ დააბრუნეთ განახლებული სია

def odd_even(number: int):
    even_numbers = []
    odd_numbers = []

    if number % 2 == 0:
        even_numbers.append(number)
        print(number, 'is even')
    else:
        number * 2
        odd_numbers.append(number)
        print(number, 'is odd')
    
    return even_numbers, odd_numbers

odd_even(int(input('enter a number: ')))