#1) შექმენით ფუნქცია სახელად manual_index, რომელსაც გადაეცემა 2 მნიშვნელობა, პარამეტრებად სახელები დაარქვიათ numbers_list and search_value, ფუნქციამ უნდა დააბრუნოს საძიებელი მნიშვნელობის ინდექსი სიიდან (ყველა ხაზი ახსენით კომენტარებით და შექმენით ნახატი)

def manual_index(numbers_list, search_value):
    if search_value not in numbers_list:
        return -1
    
    for index in range(0, len(numbers_list)):
        if search_value == numbers_list[index]:
            pass



#კიდე უნდაგვეყურა day32-ის ჩანაწერი