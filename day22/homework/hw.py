#1. მომხმარებელს შემოატანინეთ ნებისმიერი სიტყვა. თუ მისი სიგრძე აღემატება სამს, დაბეჭდეთ მისი პირველი სამი ასო. ხოლო თუ ნაკლებია ან ტოლი სამის, დაბეჭდეთ სიტყვის პირველი ასო.

word = input('enter a word: ')
print(word[0:3])

#2. for ციკლით შექმენით 10-იდან 20-ის ჩათვლით არსებული მთელი რიცხვების სია. შემდეგ გამოიყენეთ slicing, სადაც სტეპი იქნება 2-ის ტოლი.

number_list = [i for i in range(10, 21)]

sliced_list = []

start = 0
end = 5
step = 2

while start < end:
    sliced_list.append(number_list)
    start = start + step

print(sliced_list)

#3. მომხმარებელს შემოატანინეთ სიტყვა. შემდეგ გამოიყენეთ ნასწავლი მასალა და შეაბრუნეთ ის.

word_input = input('enter a word: ')
print(word_input[5] + word_input[4] + word_input[3] + word_input[2] + word_input[1] + word_input[0])