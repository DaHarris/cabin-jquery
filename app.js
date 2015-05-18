$(document).ready(function() {
	console.log("The document is ready!");

	var homes = $('.home');
	var checkHomes = homes;
	var checkBoxes = $('input:checkbox');
	var checkValues = [];

	for (var i=0;i<checkBoxes.length;i++) {
		checkValues.push(checkBoxes[i].value);
	}

	$('input:checkbox').change(function() {
		selected = $('input:checked');
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
