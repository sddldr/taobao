$(function(){
    var url = "https://dc.3.cn/category/get?callback=?";
	$.getJSON(url,function(data){
		console.log(data);
	})
})