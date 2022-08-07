var tmbl = document.querySelector('.toggler');
var menu = document.querySelector('.menu');
tmbl.addEventListener('click', function (e) {
  e.preventDefault();
  showHideMenu();
});

function showHideMenu() {
  if (menu.classList.contains('hide')) {
    menu.classList.toggle('show');
  }
}
