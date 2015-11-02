(function() {

	// variables
	var count = 1, sliderLength = 4, delay = 2500;
	var firstSlide = $('#slide1'), lastSlide = $('#slide4');


	$('#next').click(function() {		
		
		if(count > sliderLength){
			count = 1;
		}

		/*if (count > 1) {
			$("#slide"+count).addClass("active").hide("slide", { direction: "left" }, 1000);
		}*/

		$("#slide"+count).addClass("active").show("slide", { direction: "right" }, 1000);
			
			count++;
			console.log(count);
	});

		$('#prev').click(function() {		
		

		if (count <= 1) {
			count = 4;
		};

		$("#slide"+count).addClass("active").show("slide", { direction: "left" }, 1000);
		
			count--;
			console.log(count);

	});

})();