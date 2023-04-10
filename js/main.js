var buttons = document.querySelector('.ui-button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    console.log('Button clicked');
  });
}

var menuItems = document.querySelectorAll('.ui-menu-item');

menuItems.forEach(function(item) {
  var submenu = item.querySelector('.ui-submenu');
  var link = item.querySelector('a');

  link.addEventListener('click', function(e) {
    e.preventDefault();
    item.classList.toggle('active');
  });

  var subMenuItems = item.querySelectorAll('.ui-submenu-item > a');

  subMenuItems.forEach(function(subMenuItem) {
    subMenuItem.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Clicked ' + subMenuItem.textContent);
    });
  });
});
