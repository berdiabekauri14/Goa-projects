#asteroid and commit: time, day, month, year, planet, check

time = int(input('enter a time: '))
day = int(input('enter a day:'))
month = int(input('enter a month: '))
year = int(input('enter a year: '))
planet = input('enter a planet: ')

if time % 4 == 0:
    if time % 100 == 0:
        if time % 400 == 0:
            if day % 4 == 0:
                if day % 100 == 0:
                    if day % 360 == 0:
                        if month % 4 == 0:
                            if month % 100 == 0:
                                if month % 400 == 0:
                                    if year % 4 == 0:
                                        if year % 100 == 0:
                                            if year % 400 == 0:
                                                if planet == time:
                                                    if planet == day:
                                                        if planet == month:
                                                            if planet == year:
                                                                print('no attack discovered')
                                                            else:
                                                                print('asteroid discoverd')
                                                        else:
                                                            print('commit discovered')
                                                    else:
                                                        print('no attack discovered')
                                                else:
                                                    print('asteroid discovered')
                                            else:
                                                print('commit discovered')
                                        else:
                                            print('no attack discovered')
                                    else:
                                        print('asteroid discovered')
                                else:
                                    print('commit descovered')
                            else:
                                print('no attack discovered')
                        else:
                            print('asteroid discovered')
                    else:
                        print('commit discovered')
                else:
                    print('no attack discovered')
            else:
                print('asteroid discovered')
        else:
            print('commit discovered')
    else:
        print('no attack discovered')

def solar_system(attack1, attack2: str) -> str:
    attack: bool = attack1 + attack2

    if attack == attack1:
        print(f'{attack1} discovered')

    elif attack == attack2:
        print(f'{attack2} discovered')
    
    else:
        print('no attack discovered')

    return attack == solar_system('asteroid', 'commit')