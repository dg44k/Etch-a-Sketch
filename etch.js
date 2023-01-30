const wrapper = document.querySelector(".wrapper");
const btnNewGrid = document.querySelector(".btnNewGrid");
const btnErase = document.querySelector(".btnErase");
const btnEraseAll = document.querySelector(".btnEraseAll");
let SIZE = 16;

createGrid();
wrapper.onmouseover = fillRandomRGB;
btnNewGrid.onclick = getSize;
btnErase.onclick = () => wrapper.onmouseover = eraseElem;
btnEraseAll.onclick = eraseAll;

function createGrid(){
  wrapper.style.cssText = `grid-template-columns: repeat(${SIZE}, 1fr);
                           grid-template-rows: repeat(${SIZE}, 1fr);`;
  for (let i = 0; i < SIZE*SIZE; i++) {
    const elem = document.createElement("div");
    elem.classList.add("child");
    wrapper.append(elem); 
  }
}

function fillElem(e){
  const goal = e.target;
  if(goal == wrapper) return;
  goal.style.backgroundColor = "#000";
}

function getSize(){
  SIZE = +prompt("Enter new size of grid", 16);

  if(isNaN(SIZE) || SIZE > 100 || SIZE < 1){
    alert('Enter a number greater than 1 and less than 100');
    SIZE = +prompt("Enter size grid:", 16);
  }
  wrapper.innerHTML = '';
  createGrid();
}

function fillRandomRGB(e){
  const goal = e.target;
  if(goal == wrapper) return;
  if(goal.style.backgroundColor == "rgb(0, 0, 0)") return;
  
  goal.style.backgroundColor = `RGB(${Math.random()* 255}, 
                                    ${Math.random()* 255}, 
                                    ${Math.random()* 255})`; 
}

function eraseElem(e){
  e.target.style.backgroundColor = "#fff";
}

function eraseAll(){
  const listElems = document.querySelectorAll(".child");
  for(let i = 0; i < SIZE*SIZE; i++){
    listElems[i].style.backgroundColor = "#fff";
  }
}