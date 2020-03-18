//document represents HTML allows access to and modification of content.
//querySelector returns the first element in the document that matches the specified selector
const addButton = document.querySelector('.addButton'); //create variable for html addButton element
let input = document.querySelector('.input'); //create variable for html div class input
const container = document.querySelector('.container'); //create variable for html div class container

class item { //create class called item
    constructor(itemName) { //create constructor with parameter itemName
        this.createDiv(itemName); //create method for item class with parameter itemName
    }

    createDiv(itemName) { //create method and use parameter for class
        let input = document.createElement('input'); //define input variable that creates an element node for 'input' in html.
        input.value = itemName; //use input variable and property value, a string, to equal "itemName" the value/string entered into 'input'  
        input.disabled = true; //use input variable and property disabled that equals true when a string is entered 
        input.classList.add('item_input'); //use input variable and property "classList" (a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list. This returns a token class name of an element, as a DOMTokenList object. .add adds the "item_input" to the to do list.
        input.type = "text"; //use input variable and property "type" to return the text inside the element 

        let itemBox = document.createElement('div'); //define variable for itemBox to create an element node for the 'div' in html.
        itemBox.classList.add('item'); //use itemBox variable and "classList" property to add the 'item_input' to display the item. 

        let editButton = document.createElement('editButton'); //define variable for editButton 
        editButton.innerHTML = "EDIT"; //edit button 
        editButton.classList.add('editButton'); //manipulates the text in the classList

        let removeButton = document.createElement('removeButton');//define variable for removeButton
        removeButton.innerHTML = "REMOVE"; //remove button
        removeButton.classList.add('removeButton'); //removes the text from the classList

        container.appendChild(itemBox); //returns a copy of the node

        itemBox.appendChild(input); //returns a copy of the node
        itemBox.appendChild(editButton); //returns a copy of the node
        itemBox.appendChild(removeButton); //returns a copy of the node

        editButton.addEventListener('click', () => this.edit(input)); //on click allow text to be edited in input

        removeButton.addEventListener('click', () => this.remove(itemBox)); //on click allow text to be removed from itemBox

    }

    edit(input) {  //define edit method for input
        input.disabled = !input.disabled; //input disabled equals not input disabled
    }

    remove(item) { //define remove method for item
        container.removeChild(item); //removechild node item in containers item
    }
}

function runInput() { //function to check input value
    if (input.value != "") { //if input value is not equal to a string
        new item(input.value); //allow a new item in the input value
        input.value = ""; //let the input value equal the string entered
    }
}

addButton.addEventListener('click', runInput); //when the addButton is clicked, runInput function
window.addEventListener('keydown', (e) => { //in the webpage listen for keystrokes in html page to start event
    if (e.which == 13) { //if the keydown(return/enter button '13') is pressed runInput function 
        runInput();
    }
})

