(function () {
	"use strict";

	// Function to show the spoiler.
	var toggleSpoilerVisibility = function (element) {
	  element.addEventListener("click", function () {
	    this.nextElementSibling.classList.toggle("spoiler-content-show");
	  });
	}

	// allSpoilerButton contains each button with the "spoiler-button" class inside an array.
	var allSpoilerButton = Array.prototype.slice.call(document.querySelectorAll(".spoiler-button"));

	// For each element inside allSpoilerButton, call toggleSpoilerVisibility function.
	allSpoilerButton.forEach(toggleSpoilerVisibility);
}()); 