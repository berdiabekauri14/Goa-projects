#inheritance

class person:
    def __init__(self, name, last_name):
        self.name = name
        self.last_name = last_name
    
    def func(self) -> str:
        return f'{self.name} {self.last_name}'
    
class student(person):
    pass

p1 = student('berdia' 'bekauri')
p1.func()

class person:
    def __init__(self, name, last_name):
        self.name = name
        self.last_name = last_name
    
    def printname(self):
        return f'{self.name} {self.last_name}'
    
class student(person):
    def __init__(self, name, last_name):
        person().__init__(name, last_name)

p1 = student('berdia', 'bekauri')
p1.printname()