function countNumber(array, number)
{
    let count = 0;
    for(let i =0;i<array.length;i++){
        if(array[i] == number)
        count += 1;
    }
    return count;
}