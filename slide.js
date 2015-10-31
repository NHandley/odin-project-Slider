(function() {

	var count = 1;
	var sliderLength = 4;

	$('button').click(function() {		

		if(count > sliderLength)
		{
			count = 1;
		}

		$("#slide"+count).addClass("active");
		
			count++;

	});

})();