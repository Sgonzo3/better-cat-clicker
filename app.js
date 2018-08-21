
let cat1 = document.getElementById('cat1');
let cat1Count = 0;

// set name
cat1.querySelector('h2').innerText = "Mikey";

// click counter
cat1.querySelector('img').addEventListener('click', function() {
  cat1Count++;
  cat1.querySelector('.count').innerText = cat1Count;
});

let cat2 = document.getElementById('cat2');
let cat2Count = 0;

// set name
cat2.querySelector('h2').innerText = "Miles";

// click counter
cat2.querySelector('img').addEventListener('click', function() {
  cat2Count++;
  cat2.querySelector('.count').innerText = cat2Count;
});
