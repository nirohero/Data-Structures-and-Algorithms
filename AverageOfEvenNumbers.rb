def average_of_even_numbers(array)
    #The mean average of even numbers will be defined as teh sum of the even numbers dived by the count of even numbers,
    # so we keep track of both the sum and the count

    sum = 0.0
    count_of_even_numbers=0

    # we iterate through each number in the array, and if we counter an even number, we modify the sum and the count:

    array.each do |number|
        if number.even?
            sum += number
            count_of_even_numbers += 1
        end
    end

    # We return the mean average:
    return sum / count_of_even_numbers
end