$(document).ready(function(){
	
	//initially hides all the content
	$('.collapse-wrapper').hide();
	
	//when the header is clicked...
	$('.collapse-toggle').on('click', function(){
		
	    //the corresponding content collapses or expands...
		var click = $(this).parent().next();
	    click.slideToggle();
		
	    //while all other content collapses
	    var otherContent = $('.collapse-toggle').not(event.target).parent().next();
	    otherContent.slideUp();
		
	});
	
			
});

	




//(function() {

    // Your code goes here

   // console.log('hello world');








//})();