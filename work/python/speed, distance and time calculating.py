#speed calculating

def calculate_speed(distance, time):

    speed = distance / time

    return speed

country1 = input('enter a country1: ')
country2 = input('enter a country2: ')
distance = float(input(f'enter a distance from {country1} to {country2}: '))
time = float(input('enter the time it will take to reach in hours: '))

speed = calculate_speed(distance, time)

print(f'to reach {country1} from {country2} will take {speed} km/h')

#distance calculating

def calculate_distance(speed, time):

    distance = speed * time

    return speed

station1 = input('enter a station1: ')
station2 = input('enter a station2: ')
speed = float(input(f'enter a speed from {station1} from {station2}: '))
time = float(input('enter the time it will take to reach in hours: '))

distance = calculate_distance(speed, time)

print(f'to reach {station1} from {station2} will take {distance} km')

#time calculating

def calculate_time(distance, speed):
    time = distance / speed

    return time

planet1 = input('enter a planet1: ')
planet2 = input('enter a planet2: ')
distance = float(input(f'enter a distance from {planet1} to {planet2}: '))
speed = float(input(f'enter a speed from {planet1} to {planet2}: '))

time = calculate_time(distance, speed)

print(f'to reach from {planet1} to {planet2} will take {time} hours')