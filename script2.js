let i = 10;
let a = 100;

const paragraph = document.querySelector("#paragraph")


console.log("All numbers from 10 to 100 that are even and divisible by 3")
for (i=10;i<=a;i++)
{
 
  if(i%2==0 && i%3==0){
   paragraph.innerHTML += i + "<br>"
    console.log(i)
    
  }
}