$(function(){
   /* var url = "https://dc.3.cn/category/get?callback=?";
	$.getJSON(url,function(data){
		console.log(data);
	})*/
	
	//楼梯效果
	$("#huati li").click(function(e){
		var index = $(e.target).parent().index();
		$("#huati li").css({background:"white"}).find("a").css({color:"#000"});
		$("#huati li").eq(index).css({background:"red"}).find("a").css({color:"white"});
		$(window).scrollTop($("div[lou_data="+index+"]").offset().top-54);
	})
	$(window).scroll(function(){
		var st = $(window).scrollTop();
		if($(window).scrollTop()>=476){
			$("#huati").css({position:"fixed",top:"54px"});
		}else{
			$("#huati").css({position:"absolute",top:"476px"});
		}
//		console.log($("div[lou_data]"));
		$("div[lou_data]").each(function(){
			if(st >= $(this).offset().top){
							var index1 = $(this).attr("lou_data");
							$("#huati li").css({background:"white"}).find("a").css({color:"#000"});
		$("#huati li").eq(index1).css({background:"red"}).find("a").css({color:"white"});
						}
		})
	})
})