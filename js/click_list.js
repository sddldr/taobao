$(function(){
	
	//获取商品列表
	var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?";//jsonp格式
	$.getJSON(url,function(data){
		var html = "";
		$.each(data, function(index,val) {
//			console.log(val.imgsUrl.split(",")[0].split('["')[1].split(".jpg")[0]);
//			console.log(val.imgsUrl.split(",")[0].split(".jpg")[0].slice(2)+".jpg");
		html+=	"<li data='"+val.goodsID+"'><img src='"+val.goodsListImg+"' alt='' /><ul id='suolue'><li>&lt;</li><li><img src='"+val.imgsUrl.split(",")[0].split(".jpg")[0].slice(2)+".jpg"+"' alt='' /></li><li><img src='"+val.imgsUrl.split(",")[1].split(".jpg")[0].slice(2)+".jpg"+"'alt='' /></li><li><img src='"+val.imgsUrl.split(",")[2].split(".jpg")[0].slice(2)+".jpg"+"' alt='' /></li><li>&gt;</li></ul><div class='price'><strong>￥"+val['price']+"</strong><b>包邮</b><i><em>"+val.discount+"</em>人付款</i></div><div class='tit'>"+val['goodsName']+"</div><div class='addre'><span>qty2043</span><b>福建 泉州</b></div><div class='tu'><span></span></div></li>";
		});
		$("#goodlist").html(html);
		//获取商品详情
		$("#goodlist>li").click(function(){
			var data1;
			var xin;
			var id = $(this).attr('data');
			var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?";
			$.ajax({
				type:"get",
				url:url,
				datatype:"jsonp",
				async:true,
				data:{
					goodsID:id,
				},
				success:function(data){
//					var data1 = JSON.parse(data);
					console.log(data);
					var det = data.replace("?","");
					var det1 = det.slice(0);
					var det2 = det1.split("");
					var det3 = det2.pop();
					var det5 = det2.shift();
					var det4 = det2.join("");
//					console.log(det1);
console.log(det2);
					console.log(det4);
//					var det2 = det.slice(1,-1);
//					console.log(det2);
//console.log(det);
					data1 = JSON.parse(det4);
					xin = data1[0];
					console.log(xin);
					window.location.href = "xiangq.html?data="+id+"";
					
					/*$.ajax({
						type:"get",
						url:"xiangq.html",
						data:{data:id},
						async:true,
						success:function(){
							console.log("da");
						}
					});*/
				}
			})
			
		})
	})
	
	
	
})
