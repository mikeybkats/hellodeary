var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
var menuMargin = parseInt($('#navigation').css('margin-top'));

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

//menu highlight on click
$('#navigation .navbar li a').click(function() {
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
});

$(window).on('scroll', function(){
   $('section').each(function() {
      if($(window).scrollTop() >= $(this).offset().top){
          var id = $(this).attr('id');
          console.log(id);
          $('#navigation .navbar li a').removeClass('active');
          $('#navigation .navbar li a[href=#' + id +']').addClass('active');
      }
  });
});

//sticky menu

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

function iframeAddClass(){
  $('.fancybox-nav').addClass('display_none');
  console.log('success');
};

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

