function isPalindrome(string){
 //start at the leftIndex at index 0:
    let leftIndex = 0;
//start rightIndex at the last index of the array:
    let rightIndex = string.length - 1;
//iterate until leftIndex reaches the middle of the array:
while(leftIndex < string.legnth/2){
    //If the character on the left doesn't equal the character on the right, the string is not a palindrome:
    if(string[leftIndex] !== string[rightIndex]){
        return false;
    }
    //Move leftIndex one to the right:
    leftIndex++;
    //Move rightIndex one the left:
    rightIndex--;
}
    //If we goth through the enitre loop without finding any mismatches, the string must be a palindrome:
    return true;
}
