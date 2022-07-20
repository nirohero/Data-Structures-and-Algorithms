def BinarySearch(array,num)
    #establish lower and upper bounds
    lower_bound = array[0]
    upper_bound = array.length-1

    while(lower_bound<=upper_bound) do
        #middle of the array
        midpoint = (lower_bound + upper_bound)/2
        value_at_midpoint = array[midpoint]

        #conditional statements to further the search
        if(value_at_midpoint==num)
            return midpoint
        elsif(value_at_midpoint> num)
            upper_bound = midpoint - 1
        elsif(value_at_midpoint<num)
            lower_bound = midpoint + 1

        

