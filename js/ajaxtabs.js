$(document).ready(function () {
	
	
	$('.tabs #kittens').on('click', function (ev) {
		$('.fill-me').load("tabs-in.html .kittenz");
		 
       
      	
	}); 
	
	$('.tabs #puppies').on('click', function (ev) {
		$('.fill-me').load("tabs-in.html .puppiez");
	
	}); 
	
	
	$('.tabs #lambs').on('click', function (ev) {
		$('.fill-me').load("tabs-in.html .lambz");
		
	});
	
	$('.tabs #tarantulas').on('click', function (ev) {
		$('.fill-me').load("tabs-in.html .tarantulaz");
		
	});
	
	
	






});