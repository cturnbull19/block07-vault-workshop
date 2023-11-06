//Create a string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination:
const message1 = 'You have received this message because you have been chosen to open an important vault.'
const message2 = 'Here is the secret combination:'


/*Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator
Each must equal one of the three codes in the combination. */
let x = 5+5;
let y = 8*5;
let z = 40-1;

//if i just used x + y + z without the commas, it would've added the values together
console.log(x, + y, + z,)


//Add comments throughout the code to explain each step in the process.


//Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.

//I want to first create a dialog box that will display the original message.
alert(message1)
alert(message2)

//I originally tried the string concatenation and it didn't work the way i wanted
//so then i fixed it by using the template literals way
alert(`${x} ${y} ${z}`)
