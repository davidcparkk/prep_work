const generateImg = () => {
  // event.preventDefault();
  const urlParams = new URLSearchParams(window.location.search);
  const txtParam = urlParams.get('txt');
  let img = document.getElementById('text-overlay');
  let container = document.getElementById('main-img');
  // img.appendChild(document.createTextNode(txtParam));
  img.innerHTML = txtParam;
  // container.style.background = "#e5d2d2";
  // container.style.overflow = "hidden";
  // // container.style.height = "100%";
  // container.style.zIndex = "2";
}