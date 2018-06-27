$(function(){
	var addres = window.location.href;
	var goodn = gn(addres);//商品参数信息
	var nownum;
	var add=0;
	$.ajax({
		type:"get",
		datatype:"jsonp",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		async:true,
		data:{
			goodsID:goodn.data
		},
		success:function(data){
			var data = JSON.parse(unpack(data))[0];
			console.log(data);
			$("dl.dlgood>dt").find("img").attr("src",data.goodsListImg);
			$("dl.dlgood>dt").find("p").text(data.goodsName);
			$(".countcar>span").text("小计：￥"+data.price);
			$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("userID")},function(data){
				console.log(data);
				$.each(data, function(index,val) {
					if(val.goodsID==goodn.data){
						add++;
						nownum = val.number;
						console.log(nownum);
						console.log((goodn.count-0)+(nownum-0));
						return false;
					}
				})
				if(add==0){
					nownum = 0;
				}
				})
			
		}
		
	});
	
	$("#jiesuan").click(function(){
		console.log(goodn.data);
		
		
		
		
		
		
		
				$.ajax({
					type:"get",
//					datatype:"jsonp",
					url:"http://datainfo.duapp.com/shopdata/updatecar.php",
					async:true,
					data:{
						userID:$.cookie("userID"),
						goodsID:goodn.data,
						number:(goodn.count-0)+(nownum-0)
					},
					success:function(data){
						console.log(goodn.data);
						console.log(data);
						console.log((goodn.count-0)+(nownum-0));
						location.href = "goodcar.html";
					}
				})
			})
	
	
	
	
	
	
	
	
	
	
	
	
	function gn(addres){
		var obj = {};
		//从网址取出信息串
		function tiqu(addres){
			var index = addres.indexOf("?");
			var a = addres.slice(index+1);
			return a;
		}
		var str = tiqu(addres);
//		console.log(str);
		//分割信息串
		function hui(str){
			arr = str.split('&');
//			console.log(arr);
			return arr;
		}
		var arr = hui(str);
//		console.log(arr);
		for(var i = 0;i<arr.length;i++){
			var arr1 = arr[i].split("=");
			var g = arr[i].split("=")[0];
			obj[g]=	arr[i].split("=")[1];
		}
		return obj;
	}

	
	function qushu(val){
		var a = val.indexOf("data");
		var b = val.slice(a+1);
		var c = b.indexOf("&");
		var d = b.slice(0,c);
		console.log(d);
		qud(d);
	}
	//取某一字符串=号后面的数字
	function qud(str){
		var a = str.indexOf("=");
		var b = str.slice(a+1);
		console.log(b);
	}
	function unpack(data){
				var index = data.indexOf("(");
				var data1 = data.slice(index+1);
				if(data1.indexOf(")")>=0){
					var arr = data1.split("");
					arr.pop();
					var obj = arr.join("");
					return obj;
				}
			}
})