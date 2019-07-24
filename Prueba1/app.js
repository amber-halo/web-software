const next = document.getElementById('r');
const prev = document.getElementById('l');
const text_div = document.querySelector('.text > p')
var currentPos = -1;

function genNext() {
  var s1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis semper tincidunt. Integer gravida volutpat justo, id viverra odio imperdiet vitae.";
  var s2 = "Nunc at mattis ante."
  var s3 = "Nam sollicitudin lorem diam, vitae interdum sem mollis et.";
  var s4 = "Nunc lorem lacus, tincidunt sit amet velit sit amet, sagittis auctor urna.";
  var s5 = "Donec pulvinar non purus sit amet gravida."
  var array = [s1, s2, s3, s4, s5];

  currentPos++;

  if (currentPos === array.length) {
    currentPos = 0;
  }

  text_div.innerHTML = array[currentPos];
}

function genPrev() {
  var s1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis semper tincidunt. Integer gravida volutpat justo, id viverra odio imperdiet vitae.";
  var s2 = "Nunc at mattis ante."
  var s3 = "Nam sollicitudin lorem diam, vitae interdum sem mollis et.";
  var s4 = "Nunc lorem lacus, tincidunt sit amet velit sit amet, sagittis auctor urna.";
  var s5 = "Donec pulvinar non purus sit amet gravida."
  var array = [s1, s2, s3, s4, s5];

  if (currentPos <= 0) {
    currentPos = array.length - 1;
  } else {
    currentPos--;
  }

  text_div.innerHTML = array[currentPos];
}

function main() {
  next.addEventListener('click', () => genNext());
  prev.addEventListener('click', () => genPrev());
}

main();
