from collatz import collatz as cll


def largestNumber(ls):
    maxNum = 0
    for i in ls:
        if i > maxNum:
            maxNum = i
    return maxNum


if __name__ == '__main__':
    print(largestNumber(cll(27)))  # You can change 27 for any number
