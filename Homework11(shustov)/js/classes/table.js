class TableMotherFucker {

  constructor() {
    this.table = document.createElement('table');
  }

  init() {
    this.tbody = this.table.appendChild(document.createElement('tbody'));

    this.events();
  }

  insertTD(tr, td, className) {
    td.classList.add(className);
    tr.appendChild(td);
  }

  events() {
    this.table.addEventListener('click', event => {
      let cell = this.table.getElementsByTagName('td');

      for (let i = 0; i < cell.length; i++) {
        cell[i].classList.toggle('black');
        cell[i].classList.toggle('white');
      }
    });
  }

  clearBody() {
    this.tbody.innerHTML = '';
  }

  createRowsAndColumns(numberOfRow, numberOfColumn) {
    for (let i = 0; i < numberOfRow; i++) {
      let tr = document.createElement('tr');

      for (let j = 0; j < numberOfColumn; j++) {
        let td = document.createElement('td');
        if (i % 2 === 0) {
          if (j % 2 === 0) {
            this.insertTD(tr, td, 'black');
          } else {
            this.insertTD(tr, td, 'white');
          }
        } else {
          if (j % 2 === 0) {
            this.insertTD(tr, td, 'white');
          } else {
            this.insertTD(tr, td, 'black');
          }
        }
      }

      this.tbody.appendChild(tr);
    }
  }

}