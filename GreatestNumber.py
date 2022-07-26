def greatestNumber(array):
    for i in array:
        #assume i is the greatest
        isValTheGreatest = True
        
        for j in array:
        #If we found another value that is greater than i.
        #i is not the greatest:
            if j < i:
                isValTheGreatest = False
    #If, by the time we checked all the other numbers, i
    #is still the greatest, it means that i is the greatest number:
    if isValTheGreatest:
        return i