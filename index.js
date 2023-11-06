var monImage = document.getElementById('monImage');

monImage.addEventListener('mouseover', function() {
  monImage.classList.add('image-hover');
});

monImage.addEventListener('mouseout', function() {
  monImage.classList.remove('image-hover');
});
