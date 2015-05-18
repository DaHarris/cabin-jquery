$(document).ready(function() {
	console.log("The document is ready!");

	var homes = $('.home');
	var checkHomes = [];
	var checkBoxes = $('input:checkbox');
	var checkValues = [];

	function checkValuesInit() {
		for (var i=0;i<checkBoxes.length;i++) {
			checkValues.push(checkBoxes[i].value);
		}
	}


	$('input:checkbox').change(function() {
		if ($('input:checked').length == 0) {
			$('.image-container').html(homes);
		} else {
			checkValuesInit();
			checkHomes = [];
			values = $('input:checked');
			for (var j=0;j<values.length;j++) {
				upper = parseInt($(values[j]).attr("value"));
				upperIndex = checkValues.indexOf(upper.toString());
				if (upperIndex == 0) {
					lower = 0;
				} else {
					lower = checkValues[upperIndex-1];
				}
				for (var i=0;i<homes.length;i++) {
					price = parseInt($(homes[i]).attr("data-price"));
					if (price < upper && price > lower) {
						checkHomes.push(homes[i]);
					}
				}
			}
			debugger;
			$('.image-container').html(checkHomes);
		}
	});

	$('.low').on('click', function() {
		homes.sort(function(a,b) {
			return $(a).attr('data-price') - $(b).attr('data-price');
		});
		$('.image-container').html(homes);
	});

	$('.high').on('click', function() {
		homes.sort(function(a,b) {
			return $(b).attr('data-price') - $(a).attr('data-price');
		});
		$('.image-container').html(homes);
	});

	$('.dark').on('click', function() {
		$('body').css('background','#000 url(img/dark_wood.png)');
		$('body').css('background-size','cover');
	});

	$('.light').on('click', function() {
		$('body').css('background','#000 url(img/tileable_wood_texture.png) repeat');
	});

	$('.forest').on('click', function() {
		$('body').css('background','#000 url(img/forest.jpg) repeat');
		$('body').css('background-size','cover');
	});



})
