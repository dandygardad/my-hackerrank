def plusMinus(arr):
    i = 0
    positive = 0
    negative = 0
    zero = 0
    while(i<n):
        if arr[i] > 0:
            positive = positive + 1
        elif arr[i] == 0:
            zero = zero + 1
        else:
            negative = negative + 1
        i += 1

    # Print
    positive = positive/n
    negative = negative/n
    zero = zero/n

    print(round(positive, 6))
    print(round(negative, 6))
    print(round(zero, 6))



n = int(input().strip())
arr = list(map(int, input().rstrip().split()))

plusMinus(arr)