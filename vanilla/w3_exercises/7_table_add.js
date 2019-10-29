function createTable(){
  let rows = window.prompt('choose rows');
  let cols = window.prompt('choose cols');
  let table = document.getElementById('myTable');

  for (let row = 0; row < parseInt(rows); row ++){
    let insertedRow = table.insertRow(row);
    for (let col = 0; col < parseInt(cols); col++){
      let insertedCol = insertedRow.insertCell(col);
      insertedCol.innerHTML = "Row-"+row+"col-"+col;
    }
  }

}





// let rn = window.prompt("input num rows", 1);
// let cn = window.prompt("input num col", 1);

// for (let r=0; r<parseInt(rn,10); r++){
//   let x = document.getElementById('myTable').insertRow(r);
//   for (let c = 0; c < parseInt(cn,10); c++){
//     let y = x.insertCell(c);
//     y.innerHTML = "Row-"+r+" Column=" + c;
//   }
// }
