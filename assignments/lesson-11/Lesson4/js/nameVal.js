
	$(function(){
		// jQuery Code goes here
        var nameVal = $('input[name="nameVal"]');
        
        function FillEmpty(){
            if( nameVal.val() == '') {
                nameVal.val( 'John Doe' );
            }
        }
        
        $('#ReqAQuoteBtn').click( FillEmpty );
	})
