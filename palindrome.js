function palindrome(...arr){
    reverse=[]
    for(let j= arr.length-1 ; j>=0;i--){

        reverse.append(arr[j]);

    }
    if(reverse==arr){
        return true;
    
    }
    return false;
}
console.log(palindrome("kanika"));
