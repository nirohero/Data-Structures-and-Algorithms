function isSubSet(array1, array2){
    let largerArray;
    let smallerArray;
    let hashTable = {};
    //Determine which array is smaller:
    if(array1.length > array2.length){
        largerArray= array1;
        smallerArray = array2;
    }
    else{
        largerArray = array2;
        smallerArray = array1;
    }

    //Store all items from largerArray inside hashTable:
    for(const value of largerArray){
        hashTable[value] = true;
    }
    //Iterate through each item in smallerArray and return false if we encounter an item not inside hashTable:
    for(const value of smallerArray){
        if(!hashTable[value]){
            return false;
        }
    }
    //If we got this far without our code returning false, it means that all the items inthe smallerArray must be contained within largerArray
    return true;
}