$(function(){

$('.btn-menu').click(function(){
		$('.btn-menu').toggleClass('active');
		$('.menu').toggleClass('active');
		$('.header-sm').toggleClass('active');
	})

$('.create-profile').click(function(){
		$('.popup').addClass('active');
		// $('.header-sm').addClass('active');
	})
$('.close').click(function(){
		$('.popup, .popup-success-sent').removeClass('active');
		// $('.header-sm').addClass('active');
	})
$('.btn-sent').click(function(){

		$('.popup-create-account').removeClass('active');
		$('.popup-success-sent').addClass('active');
		
	})
$('.info').click(function(){

		$('.popup').addClass('active');		
	})

$(".option, .answer-options .answer-options-items .wrapper").click(function() {

	$(".option").removeClass("active").eq($(this).index()).addClass("active");
 	
}).eq(0).addClass("active");

$(".offer-page .btn").click(function() {

	$(".offer-page .btn").removeClass("active").eq($(this).index()).addClass("active");
 	
}).eq(0).addClass("active");

$( function() {
    $( "#progressbar" ).progressbar({
      value: 9
    });
  } );

$( function() {
    $( "#progressbar2" ).progressbar({
      value: 15
    });
  } );

$( function() {
    $( "#progressbar3" ).progressbar({
      value: 25
    });
  } );


$(".tab").click(function() {
	$('.tab').removeClass('active');
	$(this).addClass("active");
	$('.tab-item').addClass('active');
	$('.add-symptoms').removeClass('active');
});

$(".add-symptoms-tab").click(function() {
	$('.tab').removeClass('active');
	$(this).addClass("active");
	$('.tab-item').removeClass('active');
	$('.add-symptoms').addClass('active');
});



});

	$(function(){
		$('.data-slider').slick({
prevArrow: '<img class="slider-arrows slider-arrows-prev" src="img/prev-arrow.svg" alt="">',
nextArrow: '<img class="slider-arrows slider-arrows-next" src="img/next-arrow.svg" alt="">'
});

$('.symptoms-slider').slick({
prevArrow: '<img class="symptoms-slider-arrows symptoms-slider-arrows-prev" src="img/prev-arrow.svg" alt="">',
nextArrow: '<img class="symptoms-slider-arrows symptoms-slider-arrows-next" src="img/next-arrow.svg" alt="">',
slidesToShow: 3
});

$('.checkbox-switch').click(function(){
		$(this).parent().toggleClass('active');	
	})


});

	
