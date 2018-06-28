$(function(){
	//侧边栏获取商品分类
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getclass.php",
		async:true,
		success:function(data){
			data = JSON.parse(data);
			console.log(data);
			var html = "";
			$.each(data, function(index,item) {
					html += `<li><a href="html/goodlist.html?classID=${item.classID}">${item.className}</a></li>`;
			});
			$("#navsub_left").html(html);
			
			//二级菜单
			/*$("#navsub_left").click(function(e){
				var addres = $(e.target).find("a").attr("href");
				console.log(addres);
				var xinxi = gn(addres);
				console.log(xinxi["classID"]);
			})*/
			
			//分类详情
			$("#navsub_left>li").mouseover(function(e){
				
				var addres = $(e.target).attr("href");
				console.log(addres);
				var xinxi = gn(addres);
//				console.log(e.target);
				console.log(xinxi["classID"]);
				$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:xinxi["classID"]},function(data){
					console.log(data);
	
//					console.log(data);
						if(data!=0){
							var str = ""; 	
							var str = "<ul class='xxx'>";
							$.each(data, function(index,item) {
	
								str += `<li><a href="html/xiangq.html?data=${item.goodsID}">${item.goodsName}</a></li>`;
		
							});
							str = str + "</ul>";
							console.log()
							$(e.target).parent().append(str);
						}
					
					
					
//						str = str + "</ul>";
					
//					console.log(html);
					
					console.log($(e.target)[0])
				})
				
				
			}).mouseleave(function(){
				$(this).find("ul").find("li").remove();
//				$(e.target).next().find("li");
				$("#navsub_left>li").each(function(index,item){
					$(item).find("ul").remove();
				})
			})
			
			
		}
	});
	
	
})