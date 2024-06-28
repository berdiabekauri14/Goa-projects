#8kg, 7kg, 6kg და 5kg ამოცანები გვქონდა

#1)

def array_plus_array(arr1, arr2):
    return sum(arr1) + sum(arr2)

#2)

def rps(p1, p2):
    if p1 == "rock" and p2 == "paper":
        return "Player 1 won!"
    if p1 == "scissors" and p2 == "rock":
        return "Player 2 won!"
    if p1 == "paper" and p2 == "scissors":
        return "Player 2 won!"
    if p1 == "paper" and p2 == "rock":
        return "Player 2 won!"
    if p1 == "rock" and p2 == "scissors":
        return "Player 1 won!"
    if p1 == "scissors" and p2 == "paper":
        return "Player 1 won!"
    if p1 == p2:
        return "Draw!"

#3)

def area_or_perimeter(l , w):
    if l != w : 
        return 2 * (l + w)
    if l == w :
        return l * w