const wrapper = document.querySelector(".wrapper");
const btnNewGrid = document.querySelector(".btnNewGrid");
let SIZE = 16;

createGrid();

wrapper.onmouseover = fillElem;
btnNewGrid.onclick = getSize;

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
