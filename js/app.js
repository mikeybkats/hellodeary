

$(document).ready(function() {
  $('a.menuButton').click(function() {
    $('a.menuButton.active').removeClass('active');
    $(this).addClass('active');
  });
});

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


// function heartPump (){
// 	var heartOne = document.getElementById('heartOne');
// 	var heartTwo = document.getElementById('heartTwo');
// 	var heartStyles = heartOne.currentStyle || getComputedStyle(heartOne, null);
//
//   if (heartOne.className === 'center icon on'){
//     setTimeout(
// 			function(){
// 			  heartOne.className = 'center icon off';
// 			  heartTwo.className = 'center icon on';
// 			}, 500);
//   }
//
//   if (heartTwo.className === 'center icon on'){
//     setTimeout(
// 			function(){
// 		  heartTwo.className = 'center icon off';
// 		  heartOne.className = 'center icon on';
// 		}, 500);
//   }
// }

//window.setInterval(heartPump, 500);
window.addEventListener('scroll', scrollReader);
