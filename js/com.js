function gn(addres){
		var obj = {};
		//从网址取出信息串
		function tiqu(addres){
			console.log(addres.indexOf("?"));
			if(addres.indexOf("?")!=-1){
				var index = addres.indexOf("?");
					var a = addres.slice(index+1);
					return a;
			}
			
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