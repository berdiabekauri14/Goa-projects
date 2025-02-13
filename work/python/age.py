class person:
    name = input('enter your name: ')
    last_name = input('enter your last name: ')

    def person_age(year1, year2: int):
        age = int(input('enter your age: '))

        if age:
            print(year2 - year1)
        else:
            print(age)
        
        return age
    
    person_age(int(input('enter a year1: ')), int(input('enter a year2: ')))