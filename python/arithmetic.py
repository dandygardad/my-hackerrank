def arithmetic(a,b):
    add = a + b
    dif = a - b
    prod = a * b

    return print(str(add) ,  str(dif) , str(prod), sep='\n')


a = int(input().strip())
b = int(input().strip())
arithmetic(a,b)