function changeContent()
{
  rn = window.prompt("input the row number (0,1,2)", "0");
  cn = window.prompt("input the col number (0,1)", "0");
  content = window.prompt("input the cell content");
  var x = document.getElementById('myTable').rows[parseInt(rn,10)].cells;
  x[parseInt(cn,10)].innerHTML = content;
}




