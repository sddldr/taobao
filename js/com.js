function gn(addres){
				var obj = {};
				var aq;
				var arr;
				//从网址取出信息串
				function tiqu(addres){
					addres = addres + "";
					if(addres.indexOf("?")!=-1){
						var index = addres.indexOf("?");
							aq = addres.slice(index+1);
							console.log(aq);
							return aq;
					}
					
				}
				tiqu(addres);
				var str = aq;
//				console.log(aq);
				//分割信息串
				function hui(str){
					if(str){
						str = str + "";
						console.log(str);
						if(str.indexOf("&")!=-1){
							arr = str.split('&');
							console.log(arr);
							return arr;
						}else{
							arr = str.split('&');
						}
					
					}
					
				}
				hui(aq);
//				console.log(arr);
				if(arr){
					for(var i = 0;i<arr.length;i++){
						var arr1 = arr[i].split("=");
						var g = arr[i].split("=")[0];
						obj[g]=	arr[i].split("=")[1];
					}
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
	


//购物车数量加减
//jiaj(".numm ");
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


//lunbo
//function lunbo(){}
/*var oBanner = document.getElementById("scrollBanner");
			var oImgList = document.getElementById("lunboo");
//			var oNumList = document.getElementById("numList");
			var aList = oImgList.children;
			var len = aList.length;
//			var perWidth = aList[0].offsetWidth;
			var perHeight = aList[0].offsetHeight;
			var aNumList = oNumList.children;
			
//			var aBtn = document.getElementsByClassName("btn");
			var aBtn = document.getElementById("promo-opt");
			var oPrev = aBtn[0];
			var oNext = aBtn[1];
			
			oImgList.style.width = perWidth * len + "px";
			
			var i = 0;
			
			var timer = setInterval(function(){
				move();
			},3000);
			
			function move(){
				i++;
				//两个临界值的判断
				if(i==len){
					oImgList.style.top = 0;
					i = 1;
				}
				
				if(i==-1){
					oImgList.style.top = -perHeight * (len-1) + "px";
					i = len - 2;
				}
				
				
				for(var j = 0; j < aNumList.length; j++){
					aNumList[j].className = "";
				}
				
				//从第三张图片往第四张变时，显示的是第一张，对应的角标要点亮	
				if(i==len-1){
					aNumList[0].className = "hover";
				}else{
					aNumList[i].className = "hover";
				}
				
				
				startMove(oImgList,{left:-perWidth*i});
			}
			
			oNext.onclick = function(){
				move();
			}
			
			oPrev.onclick = function(){
				i = i - 2;
				move();
			}
			
			
			for(let k = 0; k < aNumList.length; k++){
				aNumList[k].onmouseover = function(){
					i = k-1;
					move();
					
				}
			}
			
			
			oBanner.onmouseover = function(){
				clearInterval(timer);
			}
			oBanner.onmouseout = function(){
				timer = setInterval(function(){
					move();
				},3000);
			}*/

