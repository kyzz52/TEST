function sumArray(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let num = Math.abs(arr[i]); 
        let numString = num.toString();
        
        for (let j = 0; j < numString.length; j++) {
            sum += parseInt(numString[j]);
        }
    }
    
    return sum;
}
let numbers = [123, 456, 789];
let result = sumArray(numbers);
console.log(result); 
