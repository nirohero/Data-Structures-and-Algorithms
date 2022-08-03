function hasDuplicateValue(array){ //Nested loop approach O(N²)
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(i !== j && array[i] === array [j]){
                return true;
            }
        }
    }
}
function hasDuplicateValue(array){ //linear approach O(N)
    let existingNumbers = [];
    for(let i = 0; i < array.length; i++){
        if(existingNumbers[array[i]] ===1){
            return true;
        } else{
            existingNumbers[array[i]]=1;
        }
    }
    return false;
}

function hashDuplicate(array){
    let hashMap = {}; 
    //array = [4,5,7,4];

    for(let i = 0; i < array.length;i++)
    {
        if (hashMap[array[i]]){
            return console.log(array[i]); // return 4
        }
        else{
            hashMap[array[i]] = true;// there is no duplicate value so it's true
        }
    }  
}
array = [2,4,6,7,2];

hashDuplicate(array);
