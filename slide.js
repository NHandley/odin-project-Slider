(function() {

	// variables
	var count = 1;
	var sliderLength = 4;
	var delay = 2500;

	$('button').click(function() {		

		$("#slide"+count).addClass("active").hide("slide", { direction: "left" }, 1000);
		
		if(count > sliderLength){
			count = 1;
		}

		//$("#slide"+count).addClass("active").slideToggle("slow");
		$("#slide"+count).addClass("active").show("slide", { direction: "right" }, 1000);
		
		
			count++;

	});

})();