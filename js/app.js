
//menu highlight

$(document).ready(function() {
  $('a.menuButton').click(function() {
    $('a.menuButton.active').removeClass('active');
    $(this).addClass('active');
  });
});


//sticky menu

var window = document.getElementById('window');

function scrollReader (event){
  var scrollAmount = $(window).scrollTop();
  console.log(scrollAmount);

  var navigation = document.getElementById('navbar');
  if (scrollAmount >= 193){
    var navigation = document.getElementById('navigation');
    navigation.className = 'navigation fixed';
  }

  if (scrollAmount <= 192){
    var navigation = document.getElementById('navigation');
    navigation.className = 'navigation';
  }
};

window.addEventListener('scroll', scrollReader);
