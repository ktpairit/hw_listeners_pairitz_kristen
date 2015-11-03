var submission = document.getElementById( 'submitButton' );
var firstName = document.getElementById( 'fname' );
var lastName = document.getElementById( 'lname' );
var email = document.getElementById( 'email' );
var message = document.getElementById( 'message' );

submission.addEventListener( 'click', function( eventInfo ) {
	eventInfo.preventDefault();
	console.log( 'The firstName is: ' + firstName.value );
	console.log( 'The lastName is: ' + lastName.value );
	console.log( 'The email is: ' + email.value );
	console.log( 'The message is: ' + message.value );
});

