var r1 = $("#sub1");
$("#btn1").on("click", funk1);

function funk1(){    
	if(r1.css ("display") == "none"){
        r1.fadeIn(100);
        }
        else{
            r1.fadeOut(100);            
        }    
    } 


