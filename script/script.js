'use strict'
const divContainer = document.querySelector('.container');
let div = document.createElement('div');
const initialGridWidth = 16;
const initialGidHeight = 16;
const makeNewGridBtn = document.querySelector('.newGrid');

// function moveMousechageColor(e) {
//   e.target.style.backgroundColor ="red";
// }
//   //Change Background Color MouseEvent
//   div.addEventListener('mouseover', moveMousechageColor);

//   //Clear Button
//   clearBtn.addEventListener('click', () => {
//     div.style.backgroundColor = '';
//   });
// }

//     for (let i = 0; i < newGridNumber*newGridNumber; i++) {
//         let div = document.createElement('div');
//         div.classList.add('square');
//         divNewContainer.appendChild(div);
//         div.addEventListener('mouseover', moveMousechageColor);
//         clearBtn.addEventListener('click', () => {
//         div.style.backgroundColor = '';
//         });
//     }

function createGrid(div,divContainer) {
  for (let i = 0; i < initialGridWidth*initialGidHeight; i++) {
    div = document.createElement('div');
    div.classList.add('square');
    divContainer.appendChild(div);
  }
}

function makeNewGrid() {
  let newGridNumber = prompt(
    'How many squares per side, do you want?'
    );
  
  if(newGridNumber === null) return;
  if(newGridNumber > 100) return alert(
    "Your's enter number was too big. Please enter number again(min:1 max:100)"
    );

  while (divContainer.firstChild) {
  divContainer.removeChild(divContainer.lastChild);
  }

  for (let i = 0; i < newGridNumber*newGridNumber; i++) {
  div = document.createElement('div');
  div.classList.add('square');
  divContainer.appendChild(div);
  }

  divContainer.style.gridTemplateColumns = `repeat(${newGridNumber} , 1fr)`;
  divContainer.style.gridTemplateRows = `repeat(${newGridNumber} , 1fr)`;
  chageBackgroundColor();
}

function chageBackgroundColor() {
  let divList = document.querySelectorAll('div.square');
  divList.forEach(item => {
    item.addEventListener('mousemove' , () =>{
      item.style.background = 'red';
    })
  })
}

function clearBtn() {
  let divList = document.querySelectorAll('div.square');
  divList.forEach(item => {
    item.style.background = '';
  })
}

createGrid(div,divContainer);
chageBackgroundColor();


