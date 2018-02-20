$(document).ready(function(){
$("#fullpage").fullpage({
	anchors:['aboutMe', 'portfolio', 'skille', 'certificate', 'call'],
	menu: '#mainMenu',
	slidesNavigation: true,
    slidesNavPosition: 'bottom',
    loopBottom: true,
    scrollingSpeed: 1000,
});

(function () {
    var removeSuccess;
    removeSuccess = function () {
        return $('.button').removeClass('success');
    };
    $(document).ready(function () {
        return $('.button').click(function () {
            $(this).addClass('success');
            return setTimeout(removeSuccess, 2000);
        });
    });
}.call(this));

  setTimeout(function(){
    $('body').addClass('loaded'); 
  }, 1000);
});