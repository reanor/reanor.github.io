
    $(function() {
       
        var box1 = $('.box1');
        var box2 = $('.box2');
        
    function LeftToRight(){
		// jQuery Code goes here
      if(box2.html() == '') {
          
        box2.html( box1.html() );
        box1.html ( '' );
        }

	}
        
       $('#LeftToRight').click( LeftToRight );
    
    
    function RightToLeft(){
	  // jQuery Code goes here
       if(box1.html() == '') {
           
        box1.html( box2.html() );
        box2.html ( '' );
        }

	}
        
       $('#RightToLeft').click( RightToLeft );
    
    })