console.log("Init");
const GRID_WIDTH = 1200;
const GRID_HEIGHT = 720;
const GRID_ROWS = 32;
const GRID_COLS = 64;
const GRID_SPEED = 100;

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

  const resetButton = document.createElement('button');
  resetButton.className = 'material-icons';
  resetButton.textContent = 'replay';

  const randomizeButton = document.createElement('button');
  randomizeButton.className = 'material-icons';
  randomizeButton.textContent = 'transform';

  const container = document.createElement('div');
  container.className = 'controls';
  container.append(startButton,resetButton,randomizeButton);
  root.appendChild(container);

}
