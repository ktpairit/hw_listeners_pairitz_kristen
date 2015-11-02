var count = 1; //Reminder: This is a 'global' variable since it is specified outside the function below.
			   //This will allow the count to accumulate; if it was declared in the function, the
			   //count would start over and never accumulate.
var heading = document.getElementById( 'firstHeading' );

heading.addEventListener( 'click', function() {
var myElement = document.createElement( 'p' );
count = count ++ ;
myElement.innerHTML = 'This is click number ' + count ++ ;
document.getElementById( 'firstHeading' ).appendChild( myElement );
});
