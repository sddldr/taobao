$(function(){
	//切换登录方式
	$("#qieh").click(function(){
		$("#zhanghao").css({'display':"block"});
	})
	//获取帐户名和密码,并匹配正则表达式
	$("#submit").click(function(){
		var a = $("#user").val();
		var b = $("#psw").val();
		var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
		var pPattern = /^[a-zA-Z0-9_-]{5}$/;
		if(uPattern.test(a)&&pPattern.test(b)){
			/*$.ajax({
				type:"get",
				url:" http://datainfo.duapp.com/shopdata/userinfo.php",
				async:true,
				data:{
					userID:a,
					password:b,
					status:"login"
				},
				success:function(data){
					console.log(data);
				}
			});*/
			/*$.getJSON("http://datainfo.duapp.com/shopdata/userinfo.php",{userID:a,password:b,status:"login"},function(data){
				console.log(data);
			})*/
			$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{
				userID:a,
				password:b,
				status:"login"
			},
			function(data){
				console.log(data);
				if(data==0){
					$(".error").css({display:"block"});
				}else if(data==2){
					$(".error").css({display:"block"});
				}else{
					console.log("aaaaa");
					window.location.href = "../index.html";
				}
			})
		}else{
			console.log("bb");
		}
	})
})

