$(window).ready(function(){
	var nameRatio = "ratio";
	$("."+nameRatio+" ."+nameRatio+"-item[data-model]").each(function(index,elem){
		$(elem).on('loadMode',function(event){
			elem = $(this);
			var model = $(elem).data('model');
			$(elem).addClass('action');
			$(elem).css("background-image","url("+$(elem).attr("src")+")");
			$(elem).trigger('endLoadMode');
		});
		$(elem).trigger('loadMode');
	});
});
