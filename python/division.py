def division(a,b):
    # Integer division
    div1 = a//b 

    # Float division
    div2 = a/b

    return print(div1, div2, sep='\n')

a = int(input())
b = int(input())
division(a,b)