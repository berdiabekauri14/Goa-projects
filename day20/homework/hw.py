#1. მომხმარებელს შემოატანინეთ სიტყვა და შეამოწმეთ არის თუ არა ის პალინდრომი. პალინდრომი არის სიტყვა, რომელიც შებრუნებულიც ზუსტად იგივე გამოდის - radar, level, rotor. ამ დავალებისთვის გამოიყენეთ ციკლი და indexing.

word = ['radar', 'level', 'rotor']
print(word[0], word[1], word[2])

#2. მომხმარებელს შემოატანინეთ ხუთი რიცხვი და შეიტანეთ ისინი სიაში. შემდეგ თქვენ უნდა იმუშაოთ ამ სიაზე: თუ რომელიმე ელემენტი სიაში ორჯერ მეორდება, დაამატეთ ის ახალ სიაში. საბოლოოდ გექნებათ ორი ვარიანტი: ცარიელი ახალი სია / ახალი სია სადაც იქნება მინიმუმ ერთი ელემენტი. თუ სია ცარიელი იქნება, დაბეჭდეთ რომ სია ცარიელია. სხვა შემთხვევაში დაბეჭდეთ ახალი სია.

#test case: [1, 1, 2, 2, 3] -> [1, 2]
#test case: [1, 2, 3, 4, 5] -> "List is empty"

numbers = 5, 7, 27, 4, 8
print([numbers])

#3. მომხმარებელს შემოატანინეთ ხუთი სიტყვა. თქვენი დავალებაა, რომ ააწყოთ ახალი სიტყვა - თითოეულის პირველი ასო დაამატოთ მას. საბოლოოდ კი დაბეჭდოთ ეს სიტყვა.

#test case: ["Hello", "this", "is", "best", "academy"] -> "Htiba"
#test case: ["Join", "Goa", "and", "become", "chad"] -> "JGabc"

word_list1 = ['Hi', 'My', 'Name', 'Is', 'Berdia']
word_list2 = ['I', 'Am', 'A', 'Programmer']
print(word_list1, word_list2)

#4. პირველ სიაში დაამატეთ 10-იდან 20-ის ჩათვლით არსებული ყველა მთელი რიცხვი. მეორე სიაში კი 30-იდან 50-ის ჩათვლით ყველა 5-ის ჯერადი. საბოლოოდ შეაერთეთ ეს ორი სია და დაბეჭდეთ ამ სახით.

number_list1 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
number_list2 = [30, 31, 32, 33, 34, 35, 36, 37, 38, 49, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
print(number_list1 * 5 * number_list2)