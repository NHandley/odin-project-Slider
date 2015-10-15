(function() {
	var $sc = $(".slider img").size(); //Slider image size
	var $count = 2;
	$('.slider #1').show('fade', 500);

	setInterval(function() {

		$('.slider #'+ $count).show("fade",  500);
		$('.slider #'+ $count).delay(2500).hide("fade", 500);

		if ($count == $sc) {
			$count = 1;
		}else{
			$count += 1;
		}

	}, 3500)

	/*Buttons don't work so smoothly with the slide animation*/

	/*$('#next').click(function() {
		
		
		$('.slider #'+ $count).show("slide", {direction: "right"}, 500);
		$('.slider #'+ $count).hide("slide", {direction: "left"}, 500);
		$count += 1;
		
		
		
		if($count == $sc) {
		$count = 0;
		}
		
	});

		$('#prev').click(function() {

		$('.slider #'+ $count).hide("slide", {direction: "right"}, 500);
		$count -= 1;
		$('.slider #'+ $count).show("slide", {direction: "left"}, 500);
		
		if($count == 1) {
		$count = $sc + 1;
		}

	});*/

})();