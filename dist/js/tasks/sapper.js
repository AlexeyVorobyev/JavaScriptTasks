class GridElem {
  gridElemDOM;
  positionX;
  positionY;
  bomb;
  hidden;
  visited;
  number;
  color;
  showUp;
  exploded;
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
    this.hidden = true;
    this.visited = false;
    this.showUp = false;
    this.number = '';
    this.exploded = false;
    this.color = ['#4169E1','#15D115','#FF2400','#191970','#753313','#30D5C8','#000000','#FFFFFF']
  }

  renderGridElem() {
    this.gridElemDOM.textContent = this.number;
    if (this.number != '') this.gridElemDOM.style.color = this.color[Number(this.number)-1];
    if (this.hidden) {
      this.gridElemDOM.style.backgroundColor = '';
      this.gridElemDOM.textContent = '';
    }
    else {
      this.gridElemDOM.style.backgroundColor = 'white';
      this.gridElemDOM.textContent = this.number;
    }
    if (this.showUp) {
      const bombImage = document.createElement('img');
      bombImage.className = 'sapper_gridElemImgBomb'
      bombImage.src = 'img/sapper/bomb.png';
      this.gridElemDOM.append(bombImage);
      if (this.exploded) this.gridElemDOM.style.backgroundColor='#FF2400';
    }
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

  getRandomInt(max) {
    return Math.floor(Math.random()*max);
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
        this.gridMatrix[i][j] = null;
      }
    }
  }

  distributeBombs(counter) {
    let x,y;
    while (counter != 0) {
      x=this.getRandomInt(9);
      y=this.getRandomInt(9);
      if (!this.gridMatrix[x][y].bomb) {
        counter--;
        this.gridMatrix[x][y].bomb = true;
        this.gridMatrix[x][y].gridElemDOM.textContent = '0';
      }
    }
  }

  deepFinder(x,y) {
    if (!this.gridMatrix[x][y].visited) {
      this.gridMatrix[x][y].visited = true;
      this.gridMatrix[x][y].hidden = false;
      if (this.gridMatrix[x][y].number == '') {
        for (let a = Math.max(x - 1, 0); a <= Math.min(x + 1, 9); a++) {
          for (let b = Math.max(y - 1, 0); b <= Math.min(y + 1, 9); b++) {
            this.deepFinder(a,b);
          }
        }
      }
    }
  }

  calculateNumbers() {
    for (let i = 0; i < this.size;i++) {
      for (let j = 0;j < this.size;j++) {
        let counter = 0;
        if (!this.gridMatrix[i][j].bomb) {
          for (let a = Math.max(i-1,0); a <= Math.min(i+1,9);a++) {
            for (let b = Math.max(j-1,0); b <= Math.min(j+1,9);b++) {
              if ((a != i || b != j) && this.gridMatrix[a][b].bomb) counter++;
            }
          }
        }
        if (counter != 0) this.gridMatrix[i][j].number = counter.toString();
      }
    }
  }

  showUpBombs(a,b) {
    this.gridMatrix[a][b].exploded = true;
    for (let i = 0; i < this.size;i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.gridMatrix[i][j].bomb) this.gridMatrix[i][j].showUp = true;
      }
    }
  }
  renderGrid() {
    console.log(this.gridDOM.childNodes.length);
    while(this.gridDOM.children.length != 0) {
      this.gridDOM.children[0].remove();
    }
    for (let i = 0;i < this.size;i++){
      for (let j = 0;j < this.size;j++) {
        this.gridMatrix[i][j].renderGridElem();
        this.gridDOM.appendChild(this.gridMatrix[i][j].gridElemDOM);
      }
    }
  }
  checkVictory() {
    for (let i = 0;i < this.size;i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.gridMatrix[i][j].hidden && !this.gridMatrix[i][j].bomb) return false;
      }
    }
    return true;
  }
}
class Sapper {
  sapperDOM;
  sapperButtonStartDOM;
  sapperEndText;
  grid;
  finished;
  victory;
  constructor(sapperDOM) {
    this.sapperDOM = sapperDOM;
    this.grid = new Grid(sapperDOM.getElementsByClassName('sapper_grid')[0],10);
    this.sapperButtonStartDOM = sapperDOM.getElementsByClassName('sapper_buttonStart')[0];
    this.sapperButtonStartDOM.addEventListener('click',this.startGame.bind(this));
    this.sapperEndText = sapperDOM.getElementsByClassName('sapper_end')[0];
    this.sapperEndText.textContent='';
    this.finished = false;
    this.victory = false;
  }

  eventHandler(i,j) {
    if(this.grid.gridMatrix[i][j].bomb) {
      this.endGame(i,j);
    }
    else {
      this.grid.deepFinder(i,j);
    }
    this.victory = this.grid.checkVictory();
    if (this.victory) this.endGame(i,j);
    this.grid.renderGrid();
  }
  endGame(i,j) {
    if (this.victory) this.sapperEndText.textContent='Вы победили!';
    else this.sapperEndText.textContent='Вы проиграли!';
    this.sapperEndText.style.display = 'block';
    this.finished = true;
    this.grid.showUpBombs(i,j);
  }
  addEventListeners() {
    for (let i = 0;i < this.grid.size;i++){
      for (let j = 0;j < this.grid.size;j++) {
        this.grid.gridMatrix[i][j].gridElemDOM.addEventListener('click',function () {
          if (!this.finished) this.eventHandler(i,j);
        }.bind(this));
      }
    }
  }

  startGame() {
    this.finished = false;
    this.sapperDOM.getElementsByClassName('sapper_buttonStartText')[0].textContent = 'RESTART THE GAME';
    this.grid.gridDOM.style.display = 'grid';
    this.sapperEndText.style.display = 'none';
    this.grid.fillGrid();
    this.grid.distributeBombs(15);
    this.grid.calculateNumbers();
    this.grid.renderGrid();
    this.addEventListeners();
  }
}

new Sapper(document.getElementsByClassName('sapper')[0]);



