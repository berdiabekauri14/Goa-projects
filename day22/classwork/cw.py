#შექმენით სტრინგი სადაც გექნებათ 6 სიმბოლო, ხოლო ჩამოაჭერით ამ სტრინგს მისი მეორე ნახევარი

string1 = 'python' 
print(string1[4:6])

#2) შექმენით სია სადაც slice ინგის გამოყენებით ჩამოაჭრით პირველ 4 ელემენტს

list = [1, 2, 3, 4, 5, 6]
print(list[0:5])

#3) ბონუსი: შექმენით 8 ელემენტიანი სია, და slice ინგის გამოყენებით გამოიტანეთ მხოლოდ ლუწ ინდექსებზე მდგომი რიცხვები
#მინიშნვბა: როგორც range() მუშაობს ისე იმუშავებს slice ინგიც

number_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
even_numbers = []

for number in number_list:
    if number % 2 == 0:
        even_numbers.append(number)
print(even_numbers[6:9])

#დავალება: შექმენით თქვენი ხელით range-ის ფუნქციონალი

x = [x for x in range(1,50)]
print(x)

#დავალება2: შექმენიტ თქვენი ხელით slicing-ის ფუნქციონალი

list_slice = []

start = 0
end = 5
step = 2

while start < end:
    list_slice.append(step)
    start = start + step

print(list_slice)


#დავალება3: შექმენით სთრინგი და ჩამოაჭერით სამი სიმბოლო slicing-ის გამოყენებით

string2 = 'Goa oriented academy'

print(string2[12:19])

#დავალება: შექმენით range-ის ალგორითმი სადაც გექნებათ step -1ის ტოლი, ანუ იქნება კლებადობით.

numbers = []

start = 5
end = 0
step = -1

while step < end:
    numbers.append(step)
    start = start + end

print(numbers)

#დავალება2: შექმენით ალგორითმი, სადაც შეაბრუნებთ სიას slicing-ის გამოყენებით, აქაც დაგჭირდებათ უარყოფითი მნიშვნელობის სტეპი - დაწერეთ თქვენი ალგორითმი

names = ['berdia' 'batoni nika' 'batoni luka' 'batoni dato']

sliced_list = []

start = 0
end = 5
step = 2

while start < end:
    sliced_list.append(names[2])
    start = start + step

print(sliced_list)