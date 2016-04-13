$(function() {

	$addFirst  = $('#submit1');
	$addSecond = $('#submit2');
	$value1    = $('#input-box1');
	$value2    = $('#input-box2');
	$player1   = $('#player1');
	$player2   = $('#player2');
	// $('#restart-container').hide();
	$('#restart').hide();
	$('.yeaman').hide();
	$('.fuckyea').hide();
	$('.tieM').hide();
	$('.tieR').hide();


	// adding players names to the lists
	$addFirst.click(function() {
		$name1 = $('<p>');		
		$name1.html($value1.val()); 
		$player1.append($name1);
	});

	$addSecond.click(function() {
		$name2 = $('<p>');	
		$name2.html($value2.val()); 
		$player2.append($name2);
	});


	var playerTurn = true;

	$container = ('#container');

	$columns = ('.columns');
	$column1 = ('#column1');
	$column2 = ('#column2');
	$column3 = ('#column3');
	$column4 = ('#column4');
	$column5 = ('#column5');
	$column6 = ('#column6');
	$column7 = ('#column7');

	// $pieces = ('.pieces');


							// ==================
							// 		All Columns
							// ==================

	$('.columns').click(function() {	
	
		console.log($(this));
	    if( playerTurn ) {

	    	$(this).children('.empty:last').removeClass().addClass('morty');
	        alert("It is Rick's turn!");

	    } else {

	        $(this).children('.empty:last').removeClass().addClass('rick');
	        alert("It is Morty's turn!");
	    }
	   
	    playerTurn = !playerTurn;

    	// checking for vertical wins
    	checkWin(1, 'v');
    	checkWin(2, 'v');
    	checkWin(3, 'v');
    	checkWin(4, 'v');
    	checkWin(5, 'v');
    	checkWin(6, 'v');
    	checkWin(7, 'v');
		// checking for horizontal wins
    	checkWin(1, 'h');
		checkWin(2, 'h');
		checkWin(3, 'h');
		checkWin(4, 'h');
		checkWin(5, 'h');
		checkWin(6, 'h');
		checkWin(7, 'h');
		checkWin(8, 'h');
		checkWin(9, 'h');
		checkWin(10, 'h');
		checkWin(11, 'h');
		checkWin(12, 'h');
		checkWin(13, 'h');
		checkWin(14, 'h');
		checkWin(15, 'h');
		checkWin(16, 'h');
		checkWin(17, 'h');
		checkWin(18, 'h');
		checkWin(19, 'h');
		checkWin(20, 'h');
		checkWin(21, 'h');
		checkWin(22, 'h');
		checkWin(23, 'h');
		checkWin(24, 'h');
		// checking for diagonal down wins
		checkWin(1, 'dd');
		checkWin(2, 'dd');
		checkWin(3, 'dd');
		checkWin(4, 'dd');
		checkWin(5, 'dd');
		checkWin(6, 'dd');
		checkWin(7, 'dd');
		checkWin(8, 'dd');
		checkWin(9, 'dd');
		checkWin(10, 'dd');
		checkWin(11, 'dd');
		checkWin(12, 'dd');
		// checking for diagonal up wins
		checkWin(1, 'du');
		checkWin(2, 'du');
		checkWin(3, 'du');
		checkWin(4, 'du');
		checkWin(5, 'du');
		checkWin(6, 'du');
		checkWin(7, 'du');
		checkWin(8, 'du');
		checkWin(9, 'du');
		checkWin(10, 'du');
		checkWin(11, 'du');
		checkWin(12, 'du');
	});	


	// function to check for winner
	var checkWin = function( i, direction){

		//This will be used to keep track of how many there are in a row
		var count = 0;

		//This will keep track of what the last piece was
		var current = '';

		// $("div[data-" + direction + "=" + i + "]").each(function(){ 
		$("div[data-" + direction + "=" + i + "]").each(function(){ 
				// console.log($(this));
			var morty = $(this).hasClass('morty');
			var rick = $(this).hasClass('rick');


			//if this space is morty 
			if( morty ){

				if( current == 'morty' ){

					count++;
					// winning conditions
					if(count == 4) {
						$container = $('#container');
						$('#container').hide();
						$columns = $('.columns');
						$('.columns').hide();
						$('#input-container').hide();
						$('.yeaman').show();
						$('#restart').show();

						$('#restart').click(function() {
							
							$('.columns').children().removeClass('morty');
							$('.columns').children().removeClass('rick');
							$('.columns').children().addClass('empty');
							$('.yeaman').hide();
							$('#input-container').show();
							$('#container').show();
							$('.columns').show();
							$('#restart').hide();

						});
					}
				//Otherwise, 
				} else {
					// if previous piece is not morty we reset the count to 1
					count = 1;
				}
				// confirming that previous position was was morty
				current = 'morty';
			// if this space is rick instead of morty do same thing
			} else if ( rick ){
				if( current == 'rick' ){
					
					count++;

					if( count == 4 ){
						$container = $('#container');
						$('#container').hide();
						$columns = $('.columns');
						$('.columns').hide();
						$('#input-container').hide();
						$('.fuckyea').show();
						$('#restart').show();

						$('#restart').click(function() {
							
							$('.columns').children().removeClass('morty');
							$('.columns').children().removeClass('rick');
							$('.columns').children().addClass('empty');
							$('.fuckyea').hide();
							$('#input-container').show();
							$('#container').show();
							$('.columns').show();
							$('#restart').hide();
							
						});
					}else if(!$('.columns').children().hasClass('empty') ){
						$container = $('#container');
						$('#container').hide();
						$columns = $('.columns');
						$('.columns').hide();
						$('#input-container').hide();
						$('.tieM').show();
						$('.tieR').show();
						$('#restart').show();

						$('#restart').click(function() {
							
							$('.columns').children().removeClass('morty');
							$('.columns').children().removeClass('rick');
							$('.columns').children().addClass('empty');
							$('.tieM').hide();
							$('.tieR').hide();
							// $('.fuckyea').hide();
							$('#input-container').show();
							$('#container').show();
							$('.columns').show();
							$('#restart').hide();
						});
							
					}

				} else {
					count = 1;
				}
				current = 'rick';
			}
			// close if(rick)
		});
		// closing each function
	}
	// close checkWin function

});