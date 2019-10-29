function insert_Row(){
  let table = document.getElementById('sampleTable');
  let x = table.insertRow(0);
  let y = x.insertCell(0);
  let z = x.insertCell(1);
  y.innerHTML = 'New Cell1';
  z.innerHTML = 'New Cell2';
}




// const sampleTable = document.getElementById('sampleTable');
//   const NUM_ROWS = sampleTable.rows.length;

//   const rowX = sampleTable.insertRow(NUM_ROWS);
//   const cell1 = rowX.insertCell(0);
//   const cell2 = rowX.insertCell(1);

//   cell1.innerHTML = `Row${NUM_ROWS+1} cell1`;
//   cell2.innerHTML = `Row${NUM_ROWS+1} cell2`;