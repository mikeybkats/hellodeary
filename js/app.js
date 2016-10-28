var devLink = document.getElementById('devLink');
var devBox = document.getElementById('devBox');
var detailLink = document.getElementById('detailLink');

//menu highlight on click
$('a.menuButton').click(function() {
    $('a.menuButton.active').removeClass('active');
    $(this).addClass('active');
});

//scroll to corresponding menu div
$(".menuButton").click(function(event){
      event.preventDefault();
      //calculate destination place
      var dest=0;
      // .hash is a jquery property which grabs the target of the href
      console.log(this.hash);

      // if this target
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
           $('.menuButton').each(function() {
              if($(this.hash).offset().top > $(document).height()-$(window).height()) {
              //some code
              console.log('it works');
                }
            });
        });

// menu highlight on scroll to div
// if div id matches to button id then highlight menu item
  // select the div
  // select the menuButton
  // subtract the window height from the document height



function iframeAddClass(){
  $('.fancybox-nav').addClass('display_none');
  console.log('success');
};

//sticky menu
//var window = document.getElementById('window');
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
var menuMargin = parseInt($('#navigation').css('margin-top'));

if (filename === 'index.html'){
  function scrollReader (event){
    var scrollAmount = $(window).scrollTop();
    // console.log(scrollAmount);

    var navigation = document.getElementById('navbar');
    if (scrollAmount >= menuMargin){
      var navigation = document.getElementById('navigation');
      navigation.className = 'navigation fixed';
    }

    if (scrollAmount <= menuMargin){
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

// load hero image into detail page
var heroImageSrc = $('#heroImage').attr('src');
$('#heroImageSection').css(
	'background', 'url(' + heroImageSrc + ') 100% 100% no-repeat border-box'
);

$('#heroImageSection').css(
	'background-size', 'contain'
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

function hideNavArrows (){
	// if body id is equal to project set .fancybox_nav to hidden
}


caseStudyIdMaker();

window.addEventListener('scroll', scrollReader);

