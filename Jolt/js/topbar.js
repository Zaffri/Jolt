/* --------------------------------------------------------
	Jolt Topbar JavaScript File

	Version: 	1.1.0
	Author: 	Steven Morrison

	Website:	jolt.zaffri.com
	GitHub:		github.com/Zaffri
-------------------------------------------------------- */

/* ---------------------------  [JavaScript burger nav fallback click] --------------------------- */
var toggle = document.querySelector("input:checked");

if(toggle === null) {
	// :checked isn't supported - add JavaScript fall back for burger nav toggle.
	
	var burger = document.getElementById('mobile-icon');
	
	burger.onclick = function() {
	
		var display = document.getElementById('main-nav').style.display;
		var displayNew = (display == "none") ? "block" : "none";
	
		document.getElementById('main-nav').style.display = displayNew;
	}
}

/* ---------------------------  [JavaScript topbar onscroll functions/vars] ---------------------------  */
var distLast = 0; // last scroll position

function topBar() {
	
	var dist; // current scroll pos
	
	// add scroll event handler to topbar
	window.onscroll = function() {
		
		// set curr scroll distance
		dist = ('pageYOffset' in window) ? window.pageYOffset : document.documentElement.scrollTop; /* pageYOffset is standard and scrolltop is IE fallback */
		
		// last scroll has new styles and new is 0 then remove styles
		if(distLast != 0 && dist == 0) {
			// remove styles
			document.getElementById('dynamic').setAttribute('id', 'header'); // Change header id from 'dynamic' to 'header'
		}
			
		// last scroll has old styles and new is not 0 then add styles
		if(distLast == 0 && dist != 0) {
			// add styles
			document.getElementById('header').setAttribute('id', 'dynamic'); // Change header id from 'header' to 'dynamic'
		}
			
		// Update last scroll distance
		distLast = dist;	
	};
};
/* ---------------------------  [JavaScript burger nav collapse on click] --------------------------- */
// Mobile link elements
var mobileLinks = document.querySelectorAll('.mobile-li a');
var mobileLinksNum = mobileLinks.length;

// Loop through each mobil link and add event handler
for(var x=0; x<mobileLinksNum; x++) {

	mobileLinks[x].onclick = function () {
		// Uncheck checkbox
		document.getElementById('mobile-checkbox').checked = false;
	};

}