//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

let num = process.argv[2];
if(num == 1 ){
    console.log("You Entered One Unit");
} else if (num == 10) {
    console.log("You Entered Ten Unit");
} else if (num == 100) {
    console.log("You Entered Hundred Unit");
} else if (num == 1000) {
    console.log("You Entered Thousand Unit");
} else if (num == 10000) {
    console.log("You Entered Ten Thousand Unit ");
} else {
    console.log("Entered Invalid Number ");
}