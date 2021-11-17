def diagonalDifference(arr):
    sum_left = 0
    sum_right = 0
    i = 0
    j = 0

    while(i<n):
        sum_left = sum_left + arr[i][i]
        i += 1
    
    j = i-1
    i = 0

    while(j<n):
        if j != -1:
            sum_right = sum_right + arr[i][j]
            j -= 1
            i += 1
        else:
            return abs(sum_left - sum_right)

n = int(input().strip())

arr = []
for i in range(n):
    arr.append(list(map(int, input().rstrip().split())))

result = diagonalDifference(arr)
print(result)