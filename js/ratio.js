$(window).ready(function(){
	var nameRatio = "ratio";
	$("."+nameRatio+" ."+nameRatio+"-item[data-model]").each(function(index,elem){
		var model = $(elem).data('model');
		$(elem).addClass('action');
		$(elem).css("background-image","url("+$(elem).attr("src")+")");
	});
});
