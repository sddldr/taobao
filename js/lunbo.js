$(function(){
	var num = 0;
	var timer = setInterval(function(){
		num++;
		if(num==6){
			num=1;
		}
		$("#lunboo").css("top",-num*280);
		$("#promo").find("li").css("background","white");
		$("#promo li").eq(num-1).css("background","red");
	},1000);
	$("#lunboo").mouseover(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		timer = setInterval(function(){
			num++;
			if(num==6){
				num=1;
			}
			$("#lunboo").css("top",-num*280);
			
		},1000);
	})
	$("#promo li").click(function(){
		var index = $(this).index()+1;
		$("#lunboo").css("top",-(index-1)*280);
		clearInterval(timer);
	})
})