/* Start animation of header=========================================*/
$(document).ready(function () {
   "use strict";
	/*end animation header*/
	
	
	/* start filter of courses=================================================*/
	$('#filter a').click(function(){
		if($(this).attr('rel'))
			{
				$('.image img').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
			}
		else
			{
				$('.image img').show();
			}
		return false;
	});
	
	/* start screen loading=========================================================================================================================================================================================================*/
	$(window).on("load",function(){
	
	$(".sk-folding-cube").fadeOut(4000,function(){
		$(this).parent().fadeOut(4000);
		$("body").css("overflow","auto");
			var mytext = " For Software Solution",
		i = 0;
	$('.stac .s').animate({
		
		marginLeft:'12%'
		
	},2000,function() {
		$('.stac .t').animate({
			
			marginLeft:'12%'
			
		},500,function(){
			$('.stac .a').animate({
				
				marginLeft:'12%'
				
			},500, function(){
				
				$('.stac .c').animate({
					marginLeft:'12%'
				},500, function ()
				{
				  "use strict";
					var textWrite = setInterval( function()
					{
						document.getElementById("software").textContent += mytext[i];
						i = i+1;
						if(i > mytext.length-1)
							{
								clearInterval(textWrite);
							}
					},200);
					
				});
			});
		});
	});
		
	});
	
});
	console.log($(window).width());
});

