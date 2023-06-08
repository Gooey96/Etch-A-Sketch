const container = document.querySelector('.container');
const gridBtn = document.querySelector('.btnGrd');
const textGridSize = document.querySelector('.gridSize');
const resetBtn = document.querySelector('.reset');
const eraserBtn = document.querySelector('.eraser');
const input = document.querySelector('.input');
let gridSize = 16;

function creatGrid(size) {
  const createDiv = document.createElement('div');
  createDiv.classList.add('grid');
  createDiv.style.width = `${size}px`;
  createDiv.style.height = `${size}px`;
  return createDiv;
}

function applyGrid(grid) {
  for(let i = 0; i < grid; i++) {
    for(let j = 0; j < grid; j++) {
      container.appendChild(creatGrid(container.clientWidth / grid));
    }
  }
}

window.onload = () => applyGrid(gridSize);

/*container.addEventListener('mouseover', function (e) {
  if (e.target.matches('.grid')) {
    e.target.classList.add('active');
  }          Comment this out for reference
});*/

function reset() {
  container.innerHTML = '';
}

gridBtn.addEventListener('click', function () {
  const getGridSize = prompt('Number of Grids','16');
  +getGridSize;
  if((getGridSize !== gridSize) && (getGridSize > 0)) {
    reset();
    applyGrid(getGridSize);
    textGridSize.textContent = `${getGridSize} x ${getGridSize}`;
  }
  else if(getGridSize === gridSize) {
    reset();
    applyGrid(gridSize);
  };
});

resetBtn.addEventListener('click', () => {
  reset();
  applyGrid(gridSize);
  textGridSize.textContent = `${gridSize} x ${gridSize}`;
})

eraserBtn.addEventListener('click', function() {
  container.addEventListener('mouseover', function(e) {
    if (e.target.matches('.grid')) {
      e.target.style.backgroundColor = '#fefefe';
    }
  });
});

input.addEventListener('input', function(e) {
  console.log(e.target.value);
  let color = e.target.value;
  container.addEventListener('mouseover', function(event) {
    if (event.target.matches('.grid')) {
      event.target.style.backgroundColor = `${color}`;
    }
  });
});

input.addEventListener('click', function(e) {
  console.log(e.target.value);
  let color = e.target.value;
  container.addEventListener('mouseover', function(event) {
    if (event.target.matches('.grid')) {
      event.target.style.backgroundColor = `${color}`;
    }
  });
});