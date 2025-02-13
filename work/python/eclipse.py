time = int(input('enter a time: '))
day = int(input('enter a day: '))
month = int(input('enter a month: '))
year = int(input('enter a year: '))
country = input('enter a country: ')

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
                                                if country == time:
                                                    if country == day:
                                                        if country == month:
                                                            if country == year:
                                                                print('no eclipse')
                                                            else:
                                                                print('lunar eclipse')
                                                        else:
                                                            print('solar eclipse')
                                                    else:
                                                        print('no eclipse')
                                                else:
                                                    print('lunar eclipse')
                                            else:
                                                print('solar eclipse')
                                        else:
                                            print('no eclipse')
                                    else:
                                        print('lunar eclipse')
                                else:
                                    print('solar eclipse')
                            else:
                                print('no eclipse')
                        else:
                            print('lunar eclipse')
                    else:
                        print('solar eclipse')
                else:
                    print('no eclipse')
            else:
                print('lunar eclipse')
        else:
            print('solar eclipse')
    else:
        print('no eclipse')

def solar_system(eclipse: str) -> str:
    eclipse: bool = eclipse + solar_system

    if eclipse == 'lunar eclipse':
        print('lunar eclipse')
    elif eclipse == 'solar eclipse':
        print('solar eclipse')
    else:
        print('no eclipse')

    return solar_system(eclipse)