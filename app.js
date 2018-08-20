let clickCount = 0;

document.querySelector('img').addEventListener('click', function() {
  clickCount++;
  document.getElementById('count').innerText = clickCount;
});
