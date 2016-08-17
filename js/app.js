
//menu highlight

$(document).ready(function(event) {
  $('a.menuButton').click(function() {
    $('a.menuButton.active').removeClass('active');
    $(this).addClass('active');
  });

  $(".scroll").click(function(event){
        event.preventDefault();
        //calculate destination place
        var dest=0;
        if($(this.hash).offset().top > $(document).height()-$(window).height()){
             dest=$(document).height()-$(window).height();
        }else{
             dest=$(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({scrollTop:dest}, 1000,'swing');
    });

});


//sticky menu

var window = document.getElementById('window');

function scrollReader (event){
  var scrollAmount = $(window).scrollTop();
  // console.log(scrollAmount);

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
