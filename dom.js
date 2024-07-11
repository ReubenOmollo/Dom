const test = document.getElementById("test");

test.innerText = "My name is Reuben";

// creating new elements

const newItem = document.createElement("h1");
const headingTitle = document.createTextNode("This is a new element");

newItem.appendChild(headingTitle)

const outPut = document.getElementById("newElement")
outPut.appendChild(newItem);




// creating favorite dish

const dishElement = document.createElement("h2");
const dishText = document.createTextNode("favorite Dish:Rice");

dishElement.appendChild(dishText);
const printDish = document.getElementById("favdish");
printDish.appendChild(dishElement);



// creating favorite pets
const petsElement = document.createElement("h3");
const petsText = document.createTextNode("Favorite pets:cat, dog and bear");
petsElement.appendChild(petsText);

const printpets = document.getElementById("favpet");
printpets.appendChild(petsElement);



// creating favorite color
const colorElement = document.createElement("h2");
const colorText = document.createTextNode("Favorite color blue and green");
colorElement.appendChild(colorText);
const printcolor = document.getElementById("favcolor");
printcolor.appendChild(colorElement);
