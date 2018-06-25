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
	},3000);
	$("#lunboo").mouseover(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		timer = setInterval(function(){
			num++;
			if(num==6){
				num=1;
			}
			$("#lunboo").css("top",-num*280);
			$("#promo").find("li").css("background","white");
			$("#promo li").eq(num-1).css("background","red");
		},3000);
	})
	$("#promo li").click(function(){
		var index = $(this).index()+1;
		$("#lunboo").css("top",-(index-1)*280);
		clearInterval(timer);
	})
	
	
	var num1 = 0;
	var timer1 = setInterval(function(){
		num1++;
		if(num1==7){
			num1=1;
		}
		$("#slunbo").css("top",-num1*201);
		$("#num")[0].innerText = num1;
	},1000);
	$("#slunbo").mouseover(function(){
		clearInterval(timer1);
	}).mouseleave(function(){
		timer1 = setInterval(function(){
			num1++;
			if(num1==7){
				num1=1;
			}
			$("#slunbo").css("top",-num1*201);
			$("#num")[0].innerText = num1;
		},1000);
	})
	
	
	//固定scroll
	$(window).scroll(function(){
		if($(this).scrollTop()>=158){
			$("header").css({position:"fixed",top:0,left:0,"z-index":10,height:"54px",width:"100%"});
			$("#header").css({position:"fixed",top:0,left:"8.09%","z-index":10,background:"white"});
			$("#search_keyword").css({display:"none"});
			$("#morekey_word").css({display:"none"});
			$("#search").css({marginTop:"10px"});
			$("h1").css({width:"80px",height:"33px","margin":"10px 200px 0 0"});
		}else{
			$("#header").css({position:"static"});
			$("#search_keyword").css({display:"block"});
			$("#morekey_word").css({display:"block"});
			$("header").css({position:"static",height:"121px"});
			$("#search").css({marginTop:"46px"});
			$("h1").css({width:"142px",height:"58px","margin":"33px 94px 0 22px"});
		}
	})
	
	//滑梯
//	$("#huati").click(function(){
//		
//	})
})