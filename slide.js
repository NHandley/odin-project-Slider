(function() {

	// variables
	var count = 1, sliderLength = 4, delay = 2500;

	$("#slide1").show("fade", 1000);

	setInterval(function() {
		$('#next').trigger("click");
		
	}, 3000);

	$('#next').click(function() {		
		

		$("#slide"+count).hide("slide", { direction: "left" }, 1000);
		count++;

		if(count > sliderLength){
			count = 1;
		}

		$("#slide"+count).show("slide", { direction: "right" }, 1000);
			
			console.log(count);
			
	});

	$('#prev').click(function() {
		
		$("#slide"+count).hide("slide", { direction: "right" }, 1000);
		count--;

		if (count < 1) {
			count = 4;
		};

		$("#slide"+count).show("slide", { direction: "left" }, 1000);
		

			console.log(count);

	});

})();