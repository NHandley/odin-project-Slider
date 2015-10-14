$(document).ready(function() {
	var $sc = $(".slider img").size();
	var $count = 1;
	$('.slider #1').show('fade', 500);

	$('#next').click(function() {
		
		$('.slider #'+ $count).hide("slide", {direction: "left"}, 500);
		$count += 1;
		$('.slider #'+ $count).show("slide", {direction: "right"}, 500);
		
		
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

	});
	


	/*setInterval(function(){

		$('.slider#'+ $count).show("slide", {direction: "right"}, 500);
		$('.slider#'+ $count).delay(5000).hide("slide", {direction: "left"}, 500);

		if($count == $sc){
			$count = 1;
		}
		else{
			$count += 1;
		}
	}, 6500); */
});