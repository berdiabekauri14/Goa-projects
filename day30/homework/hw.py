#შექმენით ფუნქცია, რომელსაც გადაეცემა სტრინგი და დააბრუნეთ ეს სტრინგდი შებრუნებულ + დიდი ასოებით (reversed / upper)
 
#test_case = ("VaNo MoTiashvili) ---> "ILIVHSAITOM ONAV"

def reversed_upper(text):
    print(text[::-1].upper())

    return str(text)

reversed_upper('BeRdIa BeKaUrI')

#შექმენით ფუნქცია რომელსაც გადაეცემა სია შემდგარი სტრინგებისგან ---> (["vano" , "nika" , "bubazi" , "zauri"....)], დამატებით შექმენით ორი სია odd = [] და even = [], გადაუარეთ ორიგინალ სიას for ციკლით და გაიგეთ რომელი ელემენტი შედგება კენტი ასოებისგან და რომელი ლუწი, საბოლოოდ ჩაამატეთ შესაბამისი სტრინგები შესაბამის სიებში (odd / even) დიდ ასოებათ (upper) და ბოლოს დაბეჭდეთ.

#test_case = (["vano" , "davit" , "zuka" , "yiyliyo"]) ---> odd = ["davit" , "yiyliyo"] / even = ["vano" , "zuka"]

def odd_even(name_list):
    odd = []
    even = []

    for index in range(len(name_list)):
        if index % 2 == 0:
            even.append(index)
            return even
        else:
            odd.append(index)
            return odd
    
    return index

print(odd_even(["vano" , "davit" , "zuka" , "yiyliyo"]))

#შექმენით ფუნქცია რომელსაც გადაეცემა სია შემდგარი სტრინგებისგან, გადაუარეთ ამ სიას და შეამოწმეთ თუ მისი characterების რაოდენობა არის ლუწი, ჩაამატეთ ეს კონკრეტული სიის ელემენტი ახალ ცარიელ სიაში და გადააკეთეთ იგი upper ფუნქციით, თუ იქნება ამ სტრინგის ასოების რაოდენობა კენტი, ჩაამატეთ ეს ელემენტი ახალ სიაში რომელსაც პირველი character ექნება გადიდებული, დანარჩენი პატარა. საბოლოოდ გამოიტანეთ ეს სია.

# test_case = (["goa_best" , "vano" , "nesvi" , "tskhVarAdzE"]) ---> result = ["GOA_BEST" , "VANO" , "Nesvi" , "Tskhvaradze"]

def string(string_list):
    odd_string = []
    even_string = []

    for index in range(len(string_list)):
        if index % 2 == 0:
            even_string.append(string_list)
            return even_string
        else:
            odd_string.append(string_list)
            return odd_even
    
    return index

print(string(["goa_best" , "vano" , "nesvi" , "tskhVarAdzE"]))

#შექმენით ფუნქცია რომელსაც გადაეცემა სია შემდგარი ყველანაირი სტრინგისგან (დიდი ასოებით / პატარა ასოებით : "vano" , "LUKA") , გადაურეთ ამ სიას და თუ ეს კონკრეტული ელემენტი არის შემდგარი დიდი ასოებისგან, დაამატეთ სიაში ისე როგორც lower, ხოლო თუ შედგება პატარა ასოებისგან დაამატეთ სიაში ისე როგორც upper

#!HINT : გადახედეთ ფუნქციებს, isupper() და islower()!

#test_case = (["vano" , "DAVIT" , "LUKA" , "nika"]) ---> result_list = ["VANO" , "davit" , "luka" , "NIKA"]

def upper_lower(string_list):
    result = []

    for index in range(len(string_list)):
        result = result + string_list[index]
        if index == result:
            result.append(index)
            return string_list.upper()
        else:
            result.append(index)
            return string_list.lower()

print(upper_lower(["vano" , "DAVIT" , "LUKA" , "nika"]))

# შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგი, ამ სტრინგზე გამოიყენეთ find() ფუნქცია და თუ find ფუნქცია დააბრუნებს ლუწ ინდექს მაშინ ეს სტრინგი დააბრუნეთ დიდი ასოებით (upper) ხოლო თუ დააბრუნებს კენტ ინდექსს, მაშინ დააბრუნეთ ეს სტრინგი რომლის პირველი ასოც იქნება დიდი (capitalize)

# test_case = ("vano motiashvili") ---> name.find("n") = "VANO MOTIASHVILI" // name.find("m") = Vano motiashvili.

def find_upper_capitalize(string):
    for index in string:
        string += index
        if string[index] % 2 == 0:
            string.find(index)
            return string.upper()
        else:
            string.find(index)
            return string.capitalize()

print(find_upper_capitalize('berdia bekauri'))