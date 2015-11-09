(function() {

	// variables
	var count = 2, sliderLength = 4, delay = 2500;

	$("#slide1").show("fade", 1000);

	//Images stop sliding after count is reset
	$('#next').click(function() {		
		
		if(count > sliderLength){
			count = 1;
		}

		//Not sure how to hide the last slide when count is reset and back to first image
		$("#slide"+(count - 1)).hide("slide", { direction: "left" }, 1000);	
		$("#slide"+count).show("slide", { direction: "right" }, 1000);
			
			console.log(count);
			count++;
	});

		//Will fix once solved issues for next button
		$('#prev').click(function() {		
		

		if (count < 1) {
			count = 4;
		};

		$("#slide"+(count + 1)).hide("slide", { direction: "right" }, 1000);
		$("#slide"+count).show("slide", { direction: "left" }, 1000);
		
			count--;
			console.log(count);

	});

})();