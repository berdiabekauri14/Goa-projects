#განიხილეთ ეს კოდი და გაიგეთ როგორ მუშაობს, აგრეთვე გააკეთეთ მსგავსი ალგორითმები მინიმუმ(5) 

name = "Berdia"
even_indexes_string = ''
        #  0 1 2 3 4
for i in range(0, len(name)):
    if i % 2 == 0:
        even_indexes_string = even_indexes_string + name[i]

print(even_indexes_string)