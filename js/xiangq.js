$(function(){
	//放大镜
	$("#imgwrap").mousemove(function(e){
		$("#xiao").css({display:"block"});
		var x = e.pageX;
		var y = e.pageY;
		var x_ = e.offsetX;
		var y_ = e.offsetY;
		var left1= x - $("#imgwrap").offset().left-$("#xiao")[0].offsetWidth/2;
		var top1 = y - $("#imgwrap").offset().top-$("#xiao")[0].offsetHeight/2;
		if(left1<=0){
			left1=0;
		}
		if(left1>=300){
			left1=300;
		}
		if(top1<=0){
			top1=0;
		}
		if(top1>=300){
			top1=300;
		}
		$("#xiao").css({'left':left1,"top":top1});
		$("#da").css({display:"block"});
		var left2 = -left1*4;
		var top2 = -top1*4;
		$("#da").find("img").css({'top':top2,'left':left2});
	})
	$("#imgwrap").mouseleave(function(){
		$("#da").css({display:"none"});
		$("#xiao").css({display:"none"});
		
	})
	
	
	//切换
	
	var addres = window.location.href;
	var index = addres.indexOf("data");
	var id = addres.slice(index);
	var index1 = id.indexOf("=");
	var val = id.slice(index1+1);
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		data:{goodsID:val},
		async:true,
		success:function(data){
			var s = data.indexOf("(");
			var d = data.slice(s+1);
			var arr = d.split("");
			arr.pop();
			var str = arr.join("");
			var b = JSON.parse(str);
			var obj = b[0];
			console.log(obj);
			$("#imgwrap>img")[0].src=obj.goodsListImg;
			$("#da").find("img").attr("src",obj.goodsListImg);
			$("b.price").text(obj.price);
			$("span.buyn").text(obj.buynumber);
			$(".pricejieshao>p").text(obj.goodsName);
			console.log(obj.imgsUrl);
			var c = obj.imgsUrl.split("");
			c.shift();
			c.pop();
			var d = c.join("");
			var e = d.split(",");
			for(var i = 0;i<e.length;i++){
				var f = e[i].split("");
				f.pop();
				f.shift();
					$("ul.suolue>li").eq(i).find("a").find("img").attr("src",f.join(""));
			}
		}
	});
})

