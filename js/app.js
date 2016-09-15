//menu highlight
$(document).ready(function(event) {
  $('a.menuButton').click(function() {
    $('a.menuButton.active').removeClass('active');
    $(this).addClass('active');
  });

  $(".menuButton").click(function(event){
        event.preventDefault();
        //calculate destination place
        var dest=0;
        // .hash is a jquery property which grabs the target of the href
        console.log(this.hash);

        // if this target
        if($(this.hash).offset().top > $(document).height()-$(window).height()){
             dest=$(document).height()-$(window).height();
        }

        else{
             dest=$(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({scrollTop:dest}, 1000,'swing');
    });

});


//sticky menu
var window = document.getElementById('window');
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

if (filename === 'index.html'){
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
}

// load fancybox
$(document).ready(function() {
  		$(".fancybox")
      .attr('rel', 'gallery')
      .fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            nextEffect  : 'none',
            prevEffect  : 'none',
            padding     : 0,
            margin      : [20, 60, 20, 60] // Increase left/right margin
        }
      );
  });


window.addEventListener('scroll', scrollReader);
