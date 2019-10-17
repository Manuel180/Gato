$(document).ready(function()
{
 var cont=0;

 $(".cuadrado").click(function()
	{
        
  if (cont==0) {
  $(this).html("O");
        cont=1;
        }

else
{
$(this).html("X");
 cont=0;
}


})

 });




        
    
   		
   
