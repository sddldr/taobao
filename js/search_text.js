$(function(){
	$("#search_text").bind('input propertychange',function(){
		var oTxt = $("#search_text").val();
		$.getJSON("https://suggest.taobao.com/sug?code=utf-8&q="+oTxt+"&_ksTS=1529830610043_17089&k=1&area=c2c&bucketid=20&callback=?",function(data){
			var html = "";
			$("#lianx")[0].innerHTML = html;
			for(var i = 0;i<data.result.length;i++){
				
					html+="<li><a href=''>"+data.result[i][0]+"</a></li>";
			}
			$("#lianx").append($(html));
		})
	})
	$("body").click(function(){
		var html = "";
		$("#lianx")[0].innerHTML = html;
	})
})
//{"result":[["鞋子 男 正品","16.049673566579404"],["鞋子 系带","15.842697206669172"],["鞋子女2018夏","15.790902484868463"],["鞋子一","15.910452385755343"],["鞋子男休闲鞋","12.813287430651558"],["鞋子肥大","15.946822367625243"],["鞋子女2018新款女夏","15.961136474015928"],["鞋子男高","15.97277199363337"],["鞋子韩版高跟鞋","15.988921911934497"],["鞋子女绑脚","16.01142857396823"]]}