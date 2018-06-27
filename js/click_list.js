$(function(){
	/*function unpack(data){
				var index = data.indexOf("(");
				var data1 = data.slice(index+1);
				if(data1.indexOf(")")>=0){
					var arr = data1.split("");
					arr.pop();
					var obj = arr.join("");
//					console.log(obj);
					return obj;
				}
			}*/
	/*//获取商品列表
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
			var id = $(this).attr('data');
			console.log(id);
			window.location.href = "xiangq.html?data="+id;*/
			
//			var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?";
//			$.ajax({
//				type:"get",
//				url:url,
//				datatype:"jsonp",
//				async:true,
//				data:{
//					goodsID:id,
//				},
//				success:function(data){
////					var data1 = JSON.parse(data);
////					console.log(data);
////					var det = data.replace("(","").replace(")","").replace("?","");
////					console.log(det);
//					var det = unpack(data);
//					console.log(unpack(data)); 	
//					data1 = JSON.parse(det);
//					console.log(data1);
//				}
//			})
			
	/*	})
	})*/
	
	var adress = location.href;
	var xinxi = gn(adress);
	
	//获取商品列表
	$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:xinxi.classID},function(data){
		console.log(data);
		var html = "";
		$.each(data, function(index,item) {
//			console.log(item);
			var a = item.imgsUrl.split("[").pop();
			var b = a.split("]");
			var c = b.join(",").split(",");
			c[0].split(".jpg");
//			console.log(c[0].split(".jpg")[0].slice(1));
			console.log(c[3]);
			html += `<li data=${item.goodsID}>
						<img src="${item.goodsListImg}" alt="" />
						<ul id="suolue">
							<li>
								&lt;
							</li>
							<li><img src="${c[0].split(".jpg")[0].slice(1)+".jpg"}" alt="" /></li>
							<li><img src="${c[1].split(".jpg")[0].slice(1)+".jpg"}" alt="" /></li>
							<li><img src="${c[2].split(".jpg")[0].slice(1)+".jpg"}" alt="" /></li>
							<li><img src="${c[3].split(".jpg")[0].slice(1)+".jpg"}" alt="" /></li>
							<li>
								&gt;
							</li>
						</ul>
						<div class="price">
							<strong>￥${item.price}</strong>
							<b>包邮</b>
							<i>${item.discount}人付款</i>
						</div>
						<div class="tit">
							${item.goodsName}
						</div>
						<div class="addre">
							<span>qty2043</span>
							<b>福建 泉州</b>
						</div>
						<div class="tu">
							<span></span>
						</div>
					</li>`;
			$("#goodlist").html(html); 		
					
					
					
		});
		//获取商品详情
		$("#goodlist>li").click(function(){
			var data1;
			var id = $(this).attr('data');
			console.log(id);
			window.location.href = "xiangq.html?data="+id;
		})
	})
	
	
})
//http://img14.360buyimg.com/n1/jfs/t1981/144/84356121/451006/527067a7/55ebe77aN012861c9.jpg","http://img11.360buyimg.com/n0/jfs/t2272/157/69982010/428366/511e9b6f/55ebe78bNbfc14177.jpg","http://img10.360buyimg.com/n1/jfs/t2170/144/65453511/358897/4dc6b79a/55ebe779Neef704de.jpg"]"
//price
//:
//"338"
//__proto__
//:
//Object
