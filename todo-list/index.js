const root = document.getElementById("root");
root.style.maxWidth = "928px";
root.style.width = "100%";
root.style.height = "700px";
root.style.backgroundColor = "lightgrey";
root.style.border = '2px solid black';
root.style.borderRadius = '10px';
root.style.margin = '0 auto';
const deleteAll = document.createElement('button');
const text = document.createTextNode('Delete All');
deleteAll.appendChild(text);
root.appendChild(deleteAll);
deleteAll.classList.add('delete-button');

const inputToDo = document.createElement('input');
inputToDo.classList.add('input-to-do');
root.appendChild(inputToDo);

inputToDo.placeholder = 'Enter todo...';

const addButton = document.createElement('button');
const textAdd = document.createTextNode('Add');
addButton.appendChild(textAdd);
root.appendChild(addButton);
addButton.classList.add('add-button');

const headerDiv = document.createElement('div');
root.appendChild(headerDiv);
headerDiv.appendChild(deleteAll);
headerDiv.appendChild(inputToDo);
headerDiv.appendChild(addButton);
headerDiv.classList.add('header-div');

const firstMainDiv = document.createElement('div');
root.appendChild(firstMainDiv);
firstMainDiv.classList.add('first-main-div');

const okButton = document.createElement('button');
firstMainDiv.appendChild(okButton);
okButton.classList.add('ok-button');
const noButton = document.createElement('button');
firstMainDiv.appendChild(noButton);
noButton.classList.add('no-button');

const toDoText = document.createElement('input');
firstMainDiv.appendChild(toDoText);
toDoText.setAttribute(`type`, `text`);
toDoText.classList.add('to-do-input');

toDoText.placeholder = 'Todo text';

const dateInput = document.createElement('input');
firstMainDiv.appendChild(dateInput);
dateInput.setAttribute(`type`, `text`);
dateInput.classList.add('date-input');

dateInput.placeholder = 'Date';

const textInOkBut = document.createTextNode('V');
okButton.appendChild(textInOkBut);

const textInNoBut = document.createTextNode('X');
noButton.appendChild(textInNoBut);

const secondMainDiv = document.createElement('div');
root.appendChild(secondMainDiv);
secondMainDiv.classList.add('second-main-div');

const okButton2 = document.createElement('button');
secondMainDiv.appendChild(okButton2);
okButton2.classList.add('ok-button');

const textInOkBut2 = document.createTextNode('V');
okButton2.appendChild(textInOkBut2);

const noButton2 = document.createElement('button');
secondMainDiv.appendChild(noButton2);
noButton2.classList.add('no-button');

const textInNoBut2 = document.createTextNode('X');
noButton2.appendChild(textInNoBut2);

const toDoText2 = document.createElement('input');
secondMainDiv.appendChild(toDoText2);
toDoText2.setAttribute(`type`, `text`);
toDoText2.classList.add('to-do-input');

toDoText2.placeholder = 'Todo text';

const dateInput2 = document.createElement('input');
secondMainDiv.appendChild(dateInput2);
dateInput2.setAttribute(`type`, `text`);
dateInput2.classList.add('date-input');

dateInput2.placeholder = 'Date';


