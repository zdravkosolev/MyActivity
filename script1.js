const TheNumberYouWrote = prompt("Enter a number: ");
const paragraph = document.querySelector("#paragraph")
//check if the number is even
if(TheNumberYouWrote % 2 === 0) {

   
    paragraph.innerHTML = `The number ${TheNumberYouWrote} is even.`
    console.log(`The number ${TheNumberYouWrote} is even.`);
}

// if the number is not even
else {
    paragraph.innerHTML = `The number ${TheNumberYouWrote} is not even.`
    console.log(`The number ${TheNumberYouWrote} is not even.`);
}