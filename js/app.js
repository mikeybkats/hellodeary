var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
var menuMargin = parseInt($('#navigation').css('margin-top'));
var $blogAssignMenuMargin = $('.blog_title').css('margin-top', $('.navigation').height() + $('.navigation.fixed').css('padding-top') + $('.navigation.fixed').css('padding-bottom'));
var $newMargin = 0;

//scroll to corresponding menu div
$(".menuButton").click(function(event){
      //check to see if it is a home button
      if ( $(".menuButton").attr('href') === 'javascript:;' | $(".menuButton").attr('href') === '../index.html')
      {
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

//scroll and add menu highlight when scrolling over div
$(window).on('scroll', function(){
   $('section').each(function() {
      if($(window).scrollTop() >= $(this).offset().top){
          var id = $(this).attr('id');

          // if the menu only has one choice then return to prevent highlighting
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
          var $navbar = $('#navbar');
          var $navigation = $('#navigation');

      if ($('.navigation_detail').attr('class') === 'navigation navigation_detail fixed' ){
        return;
      }

      if (scrollAmount >= menuMargin){
        $navigation.addClass('fixed');
      }

      if (scrollAmount <= menuMargin){
        $navigation.removeClass('fixed');
      }
    });
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

  for(i = 0; i < document.getElementsByClassName('box_caption').length; i++){
    var caseStudyID = '#caseStudyImage' + [i];
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

    caseStudyImageSRC = $(caseStudyID).attr('src');

  if (document.getElementById('caseStudyImageLarge' + [i])) {
      var caseStudyIdLarge = '#caseStudyImageLarge' + [i];
      var caseStudyImageSrcLarge = $(caseStudyIdLarge).attr('src');
      var pictureBoxIdLarge = '#pictureBox' + [i];

      $(pictureBoxID).css(
      'background', 'url(' + caseStudyImageSrcLarge + ') 100% 100% no-repeat border-box'
      );

      $(pictureBoxIdLarge).css(
      'background-size', 'contain'
      );

      $(pictureBoxIdLarge).css(
      'background-position', 'center'
      );

      $(pictureBoxIdLarge).addClass('blog_image_large');

      caseStudyImageSrcLarge = $(caseStudyIdLarge).attr('src');
    }
  }
}

// remove fancybox for mobile views
if ( $(window).width() <= 800 ){
  $('a').removeClass('fancybox fancybox.iframe');
  $('#navigation').removeClass('display_none');
  $('#navigation').addClass('fixed');
}

//add top margin on blog page
function addBlogMargin (){

  $(window).load(function(){
      event.preventDefault();

      if ( $(window).width() < 800 ){
        $newUpperMargin =
          parseInt($('.navigation.navigation_detail').height()) +
          parseInt($('.navigation').css('padding-top')) +
          parseInt($('.navigation').css('padding-bottom'));

        $newLowerMargin =
          $newUpperMargin +
          parseInt($('.title.blog_title').height()) +
          parseInt($('.title.blog_title').css('padding-bottom')) +
          parseInt($('.title.blog_title').css('padding-top'));
      }

      if ( $(window).width() > 800){
        $newUpperMargin =
        parseInt($('.navbar').css('padding-top')) +
        parseInt($('.navbar').css('padding-bottom')) +
        parseInt($('.navbar').height());

        $newLowerMargin =
          $newUpperMargin +
          parseInt($('.title.blog_title').height()) +
          parseInt($('.title.blog_title').css('padding-bottom')) +
          parseInt($('.title.blog_title').css('padding-top')) - 40;
      }

      $('.title.blog_title').css('margin-top', $newUpperMargin);
      $('.blog_section').css('margin-top', $newLowerMargin);

    console.log($newMargin);
  });

}

$(document).scroll(function(){
    $newUpperMargin =
        parseInt($('.navbar').css('padding-top')) +
        parseInt($('.navbar').css('padding-bottom')) +
        parseInt($('.navbar').height());


    $newLowerMargin =
          $newUpperMargin +
          parseInt($('.title.blog_title').height()) +
          parseInt($('.title.blog_title').css('padding-bottom')) +
          parseInt($('.title.blog_title').css('padding-top'));

    $('.blog_section').css('margin-top', $newLowerMargin);
});



//fancybox menu back button
function goBack(){
  window.history.back();
}

caseStudyIdMaker();
addBlogMargin();
