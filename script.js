let x = document.getElementsByClassName('dropdown')[0];
let opensvg = document.getElementsByClassName('opensvg')[0];
let closesvg = document.getElementsByClassName('closesvg')[0];

function open_menu() {
  x.style.display = 'block';
  opensvg.style.display = 'none';
  closesvg.style.display = 'block';

}

function close_menu() {
  x.style.display = 'none';
  opensvg.style.display = 'block';
  closesvg.style.display = 'none';
}

opensvg.onclick = open_menu;
closesvg.onclick = close_menu;
