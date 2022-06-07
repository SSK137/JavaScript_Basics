//Write a program that takes day and month from the command line and prints true
// if day of month is between March 20 and June 20,false otherwise.
let day = 20;
let month = 3;
console.log("Date : "+day+"\tMonth : "+month)

if(( month >= 3 && day >= 20 && month <= 6 && day <= 20 ))
{
    console.log("True");
}
else{
    console.log("False");
}