$(document).ready(function(){

// hide all pages apart from landing page
	$(".page1, .page2, .page3").hide();

// when click start button thing shows one by one, with music starts

	$(".start-button"). on("click", function() {
		$(".landingpage").hide("bounce", "slow");
		document.getElementById("sweet").play();

		$(".page1").delay(4000)
		.show("slide", "slow")
		.delay(4000)
		.hide("pulsate", "slow");	

		$(".page2").delay(4000)
		.show("fold", 10000)
		.delay(10000)
		.hide("size", 10000);

		// $(".page3").

		$(".page3").delay(35000)
		.show("explode", 10000)
		.delay(10000)
		.hide("shake")





	});






})