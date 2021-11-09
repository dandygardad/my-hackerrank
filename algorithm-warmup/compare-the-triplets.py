def compareTriplets(a,b):
    i = 0
    a_score = 0
    b_score = 0
    while i < len(a):
        if a[i] > b[i]:
            a_score = a_score + 1
        elif a[i] < b[i]:
            b_score = b_score + 1
        else:
            pass
        i += 1

    score = [a_score, b_score]
    return score

a = list(map(int, input().rstrip().split()))
b = list(map(int, input().rstrip().split()))

result = compareTriplets(a,b)
for i in result:
    print(i, end=' ')