$(document).ready(function(){
	
	var i = 36;
	var start = $('.boardTable td').find(":nth-child(6)");
	
	start.each(function(index)
	{
		$(this).append("<span style='padding-left: 50%;color:white'>"+i--+"</span")
		
 });
	
	
});
