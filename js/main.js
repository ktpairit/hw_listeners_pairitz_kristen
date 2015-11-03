//This event listener is listening for the nike logo to be clicked
//When the listener hears the event (is clicked), it will append an article after the section with ID 'main'
var theLogo = document.images[0];

theLogo.addEventListener( 'click', function () {
var myElement = document.createElement( 'Article');
myElement.innerHTML = '<h1>You clicked the Nike Logo</h1>';
document.getElementById( 'main' ).appendChild( myElement );
});


//This event listener is listening for the 'Just Do It' text to be clicked
//When the listener hears the event (is clicked), the phrase will change
var power = document.getElementById( 'justDoIt' );
power.addEventListener( 'click', function modifyHTML() {
power.innerHTML = 'Or Someone Else Will';
});


//This event listener is listening for the 'Get Fit. Be Fit. You Fit.' text to be clicked
//When the listener hears the event (is clicked), the font color will change
var color = document.getElementById( 'getFit' );
color.addEventListener( 'click', function() {
color.className = 'newColor';
});
