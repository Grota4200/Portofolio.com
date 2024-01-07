

  // When the user clicks on <span> (x), close the popup
function closeDisclaimer() {
  document.getElementById('disclaimer-popup').style.display = 'none';
}

// When the page loads, show the popup
window.onload = function() {
  document.getElementById('disclaimer-popup').style.display = 'block';
}
