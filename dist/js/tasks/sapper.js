class GridElem {
  gridElemDOM;
  positionX;
  positionY;
  bomb;
  constructor(positionX,positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.gridElemDOM = document.createElement('div');
    this.gridElemDOM.style.gridColumnStart = positionX + 1;
    this.gridElemDOM.style.gridColumnEnd = positionX + 2;
    this.gridElemDOM.style.gridRowStart = positionY + 1;
    this.gridElemDOM.style.gridRowEnd = positionY + 2;
    this.gridElemDOM.className = 'sapper_gridElem';
    this.bomb = false;
  }
}

class Grid {
  gridDOM;
  gridMatrix;
  size;
  constructor(gridDOM,size) {
    this.gridDOM = gridDOM;
    this.size = size;
    this.gridMatrix = new Array(this.size);
    for (let i = 0;i < this.size;i++) this.gridMatrix[i] = new Array(this.size);
  }

  fillGrid() {
    if (this.gridMatrix.length != 0) this.clearGrid();
    for (let i = 0;i < this.size;i++){
      for (let j = 0;j < this.size;j++) {
        const gridElem = new GridElem(i,j);
        this.gridMatrix[i][j] = gridElem;
      }
    }
  }

  clearGrid() {
    for (let i = 0;i < this.size;i++){
      for (let j = 0;j < this.size;j++) {
        this.gridMatrix[i][j] = undefined;
      }
    }
  }

  distributeBombs(counter) {
    while (counter != 0) {

    }
  }

  renderGrid() {
    if (this.gridDOM.children.length != 0) {
      for (let i = 0; i < this.gridDOM.length; i++) {
        this.gridDOM.children[i].remove();
      }
    }
    for (let i = 0;i < this.size;i++){
      for (let j = 0;j < this.size;j++) {
        this.gridDOM.appendChild(this.gridMatrix[i][j].gridElemDOM);
      }
    }
  }
}
class Sapper {
  sapperDOM;
  sapperButtonStartDOM;
  grid;
  constructor(sapperDOM) {
    this.sapperDOM = sapperDOM;
    this.grid = new Grid(sapperDOM.getElementsByClassName('sapper_grid')[0],10);
    this.sapperButtonStartDOM = sapperDOM.getElementsByClassName('sapper_buttonStart')[0];
    this.sapperButtonStartDOM.addEventListener('click',this.startGame.bind(this))
  }
  startGame() {
    this.grid.gridDOM.style.display = 'grid';
    this.grid.fillGrid();
    this.grid.distributeBombs(10);
    this.grid.renderGrid();
  }
}

new Sapper(document.getElementsByClassName('sapper')[0]);



