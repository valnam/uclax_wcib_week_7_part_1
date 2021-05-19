jQuery(function() {

	let my_switch = false;

	$('#my_button').click(function () {
		// console.log('my button CLICKED!');
		if ( my_switch == false ) {
			my_switch = true;

			// $(this).html('Click for Kitten')
			$(this).html('Click for Boy').removeClass('btn-primary').addClass('btn-success');


			$('#my_image').attr('src', 'images/girl.png')
			// $('#my_image').fadeOut()
			// $('.square.alt').addClass('red')
		} else {
			my_switch = false;

			// $(this).html('Click for Puppy')
			$(this).html('Click for Girl').removeClass('btn-success').addClass('btn-primary');


			$('#my_image').attr('src', 'images/boy.png')
			// $('#my_image').fadeIn()
			// $('#my_image').fadeOut()
		 	// $('.square.alt').removeClass('red')

	 	}

		// console.log('.square.alt').hasClass('red') ) {
		// if ( my_switch == false ) {
		// 	$('.square.alt').removeClass('red')
		// } else {
		//  $('.square.alt').addClass('red')
	 	// }

		// $('.square').addclass('red')

		// $('#my_image').slideUp()


	});


	$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});
	// $('.square.alt').addclass('green')

	$(document).ready(function(){
  $("#flip").hover(function(){
    $(this).css("background-color", "lightblue");
    }, function(){
    $(this).css("background-color", "lightpink");
  });
});

});
