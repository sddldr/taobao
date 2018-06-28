$(function(){
	var i = 0;
	var timer = setInterval(function(){
				move();
			},2000);
			
			function move(){
				var len = $("#lunboo li").length;
				i++;
				//两个临界值的判断
				if(i==len){
					$("#lunboo").position().top = 0;
//					oImgList.style.left = 0;
					i = 1;
				}
				
				if(i==-1){
					$("#lunboo").position().top = -280 * (len-1) + "px";
					i = len - 2;
				}
				
				
				$("#lunboo").css("top",-i*280);
			$("#promo").find("li").css("background","white");
			$("#promo li").eq(i-1).css("background","red");
				
//				for(var j = 0; j < aNumList.length; j++){
//					aNumList[j].className = "";
//				}
//				
//				//从第三张图片往第四张变时，显示的是第一张，对应的角标要点亮	
//				if(i==len-1){
//					aNumList[0].className = "hover";
//				}else{
//					aNumList[i].className = "hover";
//				}
				
				
//				startMove(oImgList,{left:-perWidth*i});
			}
			
			$("#pro-opt").click(function(e){
//				console.log($(e.target).index());
				if($(e.target).index()==0){
					i = i - 2;
					move();
				}
				if($(e.target).index()==1){
					move();
				}
			})
			
			
			
			
				
	$(".lunbo").mouseover(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		timer = setInterval(function(){
				move();
			},2000);
	})
	$("#promo li").click(function(){
		$("#promo").find("li").css("background","white");
		$(this).css("background","red");
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
//	$("#pro-opt").click(function(e){
//		console.log($(e.target).index());
//		if($(e.target).index()==0){
//			num++;
//			if
//			clearInterval(timer);
//			$("#lunboo").css("top",$("#lunboo").position().top-280);
//			
//		}
//	})
	
	
	
	
	
	
	
	
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
	

})