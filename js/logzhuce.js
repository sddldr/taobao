$(function(){
	$("#submit").click(function(){
		var user = $("#user").val();
		var psw = $("#psw").val();
		var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
		var pPattern = /^[a-zA-Z0-9_-]{5}$/;
		if(uPattern.test(user)&&pPattern.test(psw)){
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				async:true,
				data:{
					status:"register",
					userID:user,
					password:psw
				},
				success:function(data){
					console.log(data);
					if(data==1){
						$(".tishi").addClass("none");
						$(".tishi1").addClass("none");
						$(".tishi2").addClass("none");
						$(".tishi").removeClass("none");
						window.location.href = "login.html";
					}
					if(data==0){
						$(".tishi").addClass("none");
						$(".tishi1").addClass("none");
						$(".tishi2").addClass("none");
						$(".tishi1").removeClass("none");
					}
				}
			});
		}else{
			$(".tishi").addClass("none");
		 	$(".tishi1").addClass("none");
			$(".tishi2").removeClass("none");
		}
	})
	
})