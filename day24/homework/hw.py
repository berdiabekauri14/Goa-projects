#1) შექმენით 3 ფუნქცია თქვენი ფანტაზიით, გამოიყენეთ პარამეტრები და return keyword. (ძალიან მარტივები არ გინდათ, რაც უფრო რთულს გააკეთებთ თქვენი დონისთვის მით უფრო კარგი იქნება)

#1)
def payment(value: float):
    balance: bool = value > 0

    if balance:
        print('accepted')

        print('payment success')
    
    else:
        print('denied')

        print('payment denied')
    
    return balance

payment(1)

#2)
def sum_numbers(*number: float) -> float:

    return sum(number)

print(sum_numbers(1, 2, 3, 4, 5))

#3)
def create_name(first, last):
    first_name = first.capitalize()
    last_name = last.capitalize()

    return first + '  ' + last

full_name = create_name(input('enter a first name: '), input('enter a last name: '))

print(full_name)