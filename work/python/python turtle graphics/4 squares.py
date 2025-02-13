from turtle import *

#we want to paint 4 squares

#step 1:draw a first square

width(7)
speed(30)

forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)

def square(x, y):
    for i in range(4):
        penup()
        goto(x, y)
        pendown()

        forward(200)
        left(90)
        forward(200)
        left(90)
        forward(200)
        left(90)
        forward(200)

square(200, 200)

exitonclick()