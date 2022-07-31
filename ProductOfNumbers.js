function twoNumberProducts(array){
    let products = [];
    
    //Outer array:
    for(let i = 0; i < array.length; i++){
        //Inner array, in which j always begins one index
        for(let j = i + 1; j < array.length;j++){
            products.push(array[i]*array[j]);
        }
    }
    return products;
}