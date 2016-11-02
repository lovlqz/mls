function load(){
 	//正则判断登录
 	$(".smb-load").click(function(){
		var username=getCookie("username_"+$("#phone").val());
		var pwd=getCookie("pwd_"+$("#password").val());
		if(username==$("#phone").val()&&pwd==$("#password").val()&&$("#phone").val().length!=0&&$("#password").val().length!=0){
			var oney=parseInt($(".one").css("background-position-y"));
			var twoy=parseInt($(".two").css("background-position-y"));
			var threey=parseInt($(".three").css("background-position-y"));
			var foury=parseInt($(".four").css("background-position-y"));
			//console.log(oney+" "+twoy+" "+threey+" "+foury)
			if(oney==0&&twoy==-150&&threey==-225&&foury==-225){
				//window.open("index.html?"+username);
				window.location.href="index.html?"+username;
			}else{
				$(".err-tips").css({"display":"block"});
				$(".err-tips").html("图片验证失败！")
			};
			
		}else{
			alert("登陆失败,输入的信息有误！");
			$(".err-tips").css({"display":"block"});
			$(".err-tips").html("输入信息有误，请重新输入！")
		};
	})
 	//图片密码
 	 round()
	 function round(){
	 	var count=0;
	 	$(".img-code ul li").click(function(){
	 		count++;
	 		if(count>=4){
	 			count=0
	 		}
	 		var index=$(this).index();
	 		$(this).css({"background-position-y":-75*count})
	 	})
	 };
 }			