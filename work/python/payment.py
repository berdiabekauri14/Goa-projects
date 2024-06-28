def payment(value: float):
    balance: bool = value > 0

    if balance:
        print('accepted')

        print('payment succeed')

    else:
        print('denied')

        print('payment denied')

    return balance

payment(1)