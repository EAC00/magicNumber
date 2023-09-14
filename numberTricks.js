// play gain button
function again() {
  window.location.reload(false);
}


// First, we get user input
var entry = prompt("Enter a whole number");
var entryNumber = parseInt(entry);

alert("The number you have entered is " + entryNumber);

if (isNaN(entry)) {
  alert("Not a whole number!");
  window.location.reload(false)
}

// The number trick begins
var temp = entryNumber;
var original = entryNumber;
document.write("<ul>");


document.write("<h1>Number Tricks App</h1>")

entryNumber += 9;
document.write("<li>I added 9 to " + temp + ". The new number is " + entryNumber + "<br><br>");
temp = entryNumber;

entryNumber *= 2;
document.write("<li>I multiplied " + temp + " by 2." + " The new number is " + entryNumber + "<br><br>");
temp = entryNumber;

entryNumber -= 4;
document.write("<li> I subtracted " + temp + " by 4." + " The new number is " + entryNumber + "<br><br>");
temp = entryNumber;

entryNumber /= 2;
document.write("<li> I divided " + temp + " by 2." + " The new number is " + entryNumber + "<br><br>");
temp = entryNumber;

entryNumber -= original;
document.write("<li> I subtracted " + temp + " by your original number." + " The new number is " + entryNumber + "<br><br>");
temp = entryNumber;
