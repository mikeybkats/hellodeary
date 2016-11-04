var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
var menuMargin = parseInt($('#navigation').css('margin-top'));

//scroll to corresponding menu div
$(".menuButton").click(function(event){
      //check to see if it is a home button
      if ( $(".menuButton").attr('href') === '../index.html'){
        return;
      }

      event.preventDefault();
      //calculate destination place
      var dest=0;

      // .hash is a jquery property which grabs the target of the href if this target
      if ($(this.hash).offset().top > $(document).height()-$(window).height()){
           dest=$(document).height()-$(window).height()+2;
      }

      else{
           dest=$(this.hash).offset().top+2;
      }

      //go to destination
      $('html,body').animate({scrollTop:dest}, 1000,'swing');

});

$(window).on('scroll', function(){
   $('section').each(function() {
      if($(window).scrollTop() >= $(this).offset().top){
          var id = $(this).attr('id');

          if ($('#navigation .navbar li a')[0].id === 'backButton'){
           return;
          }

          $('#navigation .navbar li a').removeClass('active');
          $('#navigation .navbar li a[href=#' + id +']').addClass('active');
      }
  });
});

//sticky menu
if ($(window).width() >= 800){
  $(window).on('scroll', function(){
          var scrollAmount = $(window).scrollTop();
          var menuMargin = parseInt($('#navigation').css('margin-top'));
          var $navbar = $('#navbar');
          var $navigation = $('#navigation');

      if (scrollAmount >= menuMargin){
        $navigation.addClass('fixed');
      }

      if (scrollAmount <= menuMargin){
        $navigation.removeClass('fixed');
      }
    });
}

function iframeAddClass(){
  $('.fancybox-nav').addClass('display_none');
}

// load fancybox
$(document).ready(function() {
      $(".fancybox").attr('rel', 'gallery').fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            nextEffect  : 'none',
            prevEffect  : 'none',
            padding     : 0,
            margin      : [0, 0, 0, 0] // Increase left/right margin

        }
      );
  });

// load hero image into detail page
var heroImageSrc = $('#heroImage').attr('src');
$('#heroImageSection').css(
  'background', 'url(' + heroImageSrc + ') 100% 100% no-repeat border-box'
);

$('#heroImageSection').css(
  'background-size', 'cover'
);

function caseStudyIdMaker(){

  for(i = 0; i<3; i++){
    var caseStudyID = '#caseStudyImage' + [i] ;

    var caseStudyImageSRC = $(caseStudyID).attr('src');

    var pictureBoxID = '#pictureBox' + [i];

    $(pictureBoxID).css(
    'background', 'url(' + caseStudyImageSRC + ') 100% 100% no-repeat border-box'
    );

    $(pictureBoxID).css(
    'background-size', 'cover'
    );

    $(pictureBoxID).css(
    'background-position', 'center'
    );

    $(pictureBoxID).addClass('blog_image');

  }
}

// close fancybox with home button when not in mobile screen
// $('#homeButton').click( function(){
//   console.log('test');
//   parent.$('body').fancybox.close();
//   $('.fancybox-overlay').trigger('click');
// });

// remove fancybox for mobile views
if ( $(window).width() <= 800 ){
  $('a').removeClass('fancybox fancybox.iframe');
  $('#navigation').removeClass('display_none');
  $('#navigation').addClass('fixed');
}

//fancybox menu back button
function goBack(){
  window.history.back();
}

caseStudyIdMaker();
