let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));
let num3 = parseInt(prompt("Enter third number: "));
let largest;
let smallest;
const paragraph = document.querySelector("#paragraph");


if (num1 >= num2 && num1 >= num3){
    largest = num1;
}else if (num2 >= num1 && num2 >= num3){
    largest = num2;
}else{
    largest = num3;
}

if(num1 <= num2 && num1 <= num3){
    smallest = num1;
}else if(num2 <= num1 && num2 <= num3){
    smallest = num2;
}else {
    smallest = num3
}

function isPrime(n){
    if (n < 2 ) return ` ${n} is not a prime number`;

    for(let i=2; i<n; i++){
        if (n % i === 0){
            return ` ${n} is not a prime number`;
        }
    }
    return ` ${n} is a prime number`;
}



paragraph.innerHTML =  "the smallest number " + 
isPrime(smallest) +
" The largest number " + 
isPrime(largest)

console.log (
    "the smallest number " + 
    isPrime(smallest) +
    " The largest number " + 
    isPrime(largest)
);