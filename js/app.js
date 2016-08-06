$(document).ready(function() {
  $('a.menuButton').click(function() {
    $('a.menuButton.active').removeClass('active');
    $(this).addClass('active');
  });
});
