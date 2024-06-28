#class func method

class myclass:
    x = 5

    print(x)

#the __init__() func

class person:
    def __init__(self, name, last_name):
        self.name = name
        self.last_name = last_name
    
p1 = person('berdia ', 'bekauri')
print(p1.name)
print(p1.last_name)

#the __str__() func

class person:
    def __init__(self, name, last_name, age):
        self.name = name
        self.last_name = last_name
        self.age = age
    
    def __str__(self):
        return f'{self.name} {self.last_name} {self.age}'
    
p1 = person('berdia', 'bekauri', 11)
print(p1)

#the del func del = delete

class person:
    def __init__(self, name, last_name, age):
        self.name = name
        self.last_name = last_name
        self.age = age
    
    def __str__(self):
        return f'{self.name} {self.last_name}'

p1 = person('berdia', 'bekauri', 11)

del p1.age

print(p1)

#modifying

class person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __str__(self):
        return f'{self.name} {self.age}'

p1 = person('berdia', 'bekauri', 9)
p1.age = 11
print(p1)

class person:
    def __init__(self, name, last_name, age):
        self.name = name
        self.last_name = last_name
        self.age = age
    
    def __str__(self):
        return f'{self.name} {self.last_name} {self.age}'

p1 = person('berdia', 'bekauri', 10)
p1.age = 11
print(p1)

#the pass func

class error_pass:
    pass