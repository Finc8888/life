console.log("Init");
const GRID_WIDTH = 1200;
const GRID_HEIGHT = 720;
const GRID_ROWS = 32;
const GRID_COLS = 64;
const GRID_SPEED = 100;

const grid = createGrid(GRID_ROWS,GRID_COLS);
const nextGrid = createGrid(GRID_ROWS,GRID_COLS);
console.log(grid);

let isPlaying = false;
const root = document.getElementById('root');
const table = createTable(GRID_ROWS,GRID_COLS);
console.log(table);

function handleClick(){
  this.classList.toggle("alive");
}

createControls();
function createTable(rows,cols){
  const table = document.createElement('table');

  table.className = 'grid';

  for (var i = 0; i < rows; i++) {
    const row = document.createElement('tr');

    row.className = 'row';
    for (var j = 0; j < cols; j++) {
      const cell = document.createElement('td');

      cell.className = 'cell';
      cell.width = GRID_WIDTH / cols;
      cell.height = GRID_HEIGHT / rows;
      // cell.addEventListener('click',event => cell.classList.toggle('alive'));
      // cell.addEventListener('click',handleClick);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  table.addEventListener('click',event =>{
    if(!event.target.classList.contains('cell') ) return;
    const cell = event.target;
    cell.classList.toggle('alive');
  })
  root.appendChild(table);
  return table;
}
function createControls(){
  const startButton = document.createElement('button');
  startButton.className = 'material-icons';
  startButton.textContent = 'play_arrow';
  startButton.addEventListener('click',function(){
    if(isPlaying){
      isPlaying = false;
      this.textContent = 'play_arrow';
    }
    else{
      isPlaying = true;
      this.textContent = 'pause';

    }
  });

  const resetButton = document.createElement('button');
  resetButton.className = 'material-icons';
  resetButton.textContent = 'replay';
  resetButton.addEventListener('click',function(){
    isPlaying = false;
    startButton.textContent = 'play_arrow';
  });

  const randomizeButton = document.createElement('button');
  randomizeButton.className = 'material-icons';
  randomizeButton.textContent = 'transform';
  randomizeButton.addEventListener('click',function(){
    isPlaying = false;
    startButton.textContent = 'play_arrow';

  });

  const container = document.createElement('div');
  container.className = 'controls';

  container.append(startButton,resetButton,randomizeButton);

  root.appendChild(container);

}

function createGrid(rows,cols){
  const grid = [];
  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < cols; j++) {
    
    }
  }
}