var header= document.querySelector('h1')

header.style.color = 'red'

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeHeadercolor(){
  colorinput = getRandomColor()
  header.style.color = colorinput;
}

setInterval("changeHeadercolor()",500);
