(function () {
	"use strict";

	var buttonShowSpoiler = document.querySelectorAll(".spoiler-button");

	// Function to show spoilers.
	var showSpoiler = function showSpoiler(spoiler) {
		this.nextSibling.nextSibling.classList.remove("spoiler-content--hidden");
		this.classList.remove("spoiler-button--show");
	}
	
	// When clicking on "spoiler button", call showSpoiler().
	for (var i = 0; i < buttonShowSpoiler.length; i++) {
		buttonShowSpoiler[i].addEventListener("click", showSpoiler);
	};
}()); 