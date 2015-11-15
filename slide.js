(function() {

	// variables
	var count = 2, sliderLength = 4, delay = 2500;

	$("#slide1").show("fade", 1000);

	setInterval(function() {

		if(count > sliderLength){
		$("#slide"+(count - 1)).hide("slide", { direction: "left" }, 1000);
		count = 1;
		}

		$("#slide"+(count - 1)).hide("slide", { direction: "left" }, 1000);	
		$("#slide"+count).show("slide", { direction: "right" }, 1000);
			
		console.log(count);
		count++;

	}, 3000);

	$('#next').click(function() {		
		
		if(count > sliderLength){
			$("#slide"+(count - 1)).hide("slide", { direction: "left" }, 1000);
			count = 1;
		}

		$("#slide"+(count - 1)).hide("slide", { direction: "left" }, 1000);	
		$("#slide"+count).show("slide", { direction: "right" }, 1000);
			
			console.log(count);
			count++;
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