$(function(){
	//ajax获取购物车数据
	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("userID")},function(data){
		console.log(data);
		if(data!=0){
			$.each(data, function(index,item) {
				var html = "";
//				console.log(item.number);
				html += `<div class="goods com">
				<div class="goods_t">
					<input type="checkbox" name="" class="fu" value="" />
					<span>店铺</span>
				</div>
				<ul class="cl">
					<li class="aimg">
						<input type="checkbox" name="" class="zi" value="" />
						<img src="${item.goodsListImg}" alt="" />
						<p>${item.goodsName}</p>
					</li>
					<li>
						<p>颜色：</p>
						<p>尺码：</p>
					</li>
					<li>
						<span class="aprice">￥<i>${item.price}</i></span>
						<ul class="numm" count=${item.number}>
							<li>-</li>
							<li>${item.number}</li>
							<li>+</li>
						</ul>
						<b>
							￥
							<i>${item.price*item.number}</i>.00
						</b>
					</li>
					<li>
						<a href="" class="del" data=${item.goodsID} onclick="return false">删除</a>
					</li>
				</ul>
			</div>`;
			
//		
			$("body").append(html);
//			
			//选中功能
			$(".fu").click(function(){
				$(this).parent().next().find("input.zi").prop("checked",$(this).prop("checked"));
			})
			$("#bot").find("input").click(function(){
				$(".fu").prop("checked",$(this).prop("checked"));
				$(".zi").prop("checked",$(this).prop("checked"));
			})
			
			
			
			
			jiaj(".numm ");
			//商品删除
			$(".del").click(function(){
	//			$(this).attr("data")
				$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("userID"),goodsID:$(this).attr("data"),number:0},function(data){
					console.log(data);
				})
				$(this).parent().parent().parent().remove();
				
			})
		
		
		});
		}
		
		function jiaj(ele){
			$(""+ele+"li").off("click").on("click",function(e){
			var pre = $(e.target).prev();
			var nex = $(e.target).next();
			if($(e.target).index()==0){
				if(nex.text()<=0){
					nex.text(0);
				}else{
					nex.text(nex.text()-1);
				}
			}
			if($(e.target).index()==2){
				pre.text(pre.text()-0+1);
			}
		})
		}
		
		
		
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})