$(function(){
	setInterval(function(){
		var oDate = new Date();
		var newDate = new Date();
		var weiDate = newDate.setHours(12,00,00);
		var a = oDate.getTime()/1000;
		var b = newDate.getTime()/1000;
		var c = b-a;
		var span1 = Math.floor(c/3600);
		if(span1<10){
			span1 = "0"+span1;
		}else{
			span1 = span1;
		}
		var span2 = Math.floor(c%3600/60);
		if(span2<10){
			span2 = "0"+span2;
		}else{
			span2 = span2;
		}
		var span3 = Math.floor(c%3600%60);
		if(span3<10){
			span3 = "0"+span3;
		}else{
			span3 = span3;
		}
		$("#daoji>span").eq(0).text(span1);
		$("#daoji>span").eq(1).text(span2);
		$("#daoji>span").eq(2).text(span3);
	},1000)
	
})