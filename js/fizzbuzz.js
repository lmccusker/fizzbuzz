$("#click-to-fizzbuzz").on("click", function() {
	//grab n from input
	var n = $("#input-number").val(); 
	//pass n to fizzbuzz function
	fizzbuzz(n); 
});

var fizzbuzz = function(n) {
	//Verify that the use has entered a number
	if (isNaN(n)) {
		//alert the user they need to enter a number
		alert('Please enter a number!');
		//clear out input
		$('#input-number').empty();
	}
	else {
		//pull answer div into a variable
		var answerDiv = $("#fizzbuzz-answer");
		
		//clear it out, so the use can keep playing
		answerDiv.empty();
	
		//append paragraphs for each number
		for (var i=1; i<=n; i++){
			//both mutliple of three and five = FizzBuzz
			if (i % 3 == 0 && i % 5 == 0)
				answerDiv.append('<p>FizzBuzz</p>');
			//only multiple of three = Fizz
			else if (i % 3 == 0)
				answerDiv.append('<p>Fizz</p>');
			//only multiple of five = Buzz
			else if (i % 5 == 0)
				answerDiv.append('<p>Buzz</p>');
			//otherwise, the number
			else
				answerDiv.append('<p>' + i + '</p>');
		}
	}
};