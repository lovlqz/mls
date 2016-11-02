 function register(){
		$("#phone1").blur(function(){
			var cook=getCookie("username_"+$(this).val());
			console.log(cook)
			if(cook==""){
				if(!isNaN($(this).val()))//是纯数字检查手机
				{
					isnum($(this));
				}else{
					$(".form .err-tips").css({"display":"block"});
					$(".err-tips").html("手机号必须是数字！");
				}
			}else if($(this).val().length!=0){
				$(".form .err-tips").css({"display":"block"});
				$(".err-tips").html("手机号已被注册！");
			}else{
				$(".form .err-tips").css({"display":"block"});
				$(".err-tips").html("请输入手机号！");
			}
		});
		
		//电话号码验证
	    function isnum(obj)
	    {
	    	var reg=/^1[34578]\d{9}$/;
	    	if(!reg.test(obj.val()))
	    	{
	    		$(".form .err-tips").css({"display":"block"});
	        	$(".err-tips").html("请正确填写手机号！");
	        	obj.css({"border":"1px solid #e5e5e5"})
	    	}
	    	else
	    	{
	    		$(".form .err-tips").css({"display":"none"});
	    		$(".err-tips").html(" ");
	    		obj.css({"border":"1px solid #7bdea7"})
	    	}
	    }
       
    
		//密码的验证
		$("#password1").blur(function(){
			var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
			if(reg.test($(this).val()))
			{
				$(".form .err-tips").css({"display":"none"});
				$(".err-tips").html(" ")
				$(this).css({"border":"1px solid #7bdea7"})
			}
			else
			{
				$(".form .err-tips").css({"display":"block"});
				$(".err-tips").html("密码格式不正确");
		        $(this).css({"border":"1px solid #f03468"});
			}
		});
		$("#password2").blur(function(){
			if($("#password1").val()!=$("#password2").val()){
				$(".form .err-tips").css({"display":"block"});
				$(".err-tips").html("两次密码输入不一致");
			}else{
				$(".form .err-tips").css({"display":"none"});
				$(".err-tips").html(" ")
				$(this).css({"border":"1px solid #7bdea7"})
			}
		});

	//点击注册
		$(".sub-btn").eq(0).click(function(){	
			if( $("#phone1").val().length==0||
				$("#password1").val().length==0||
				$("#password2").val().length==0||
				$("#remenber").prop("checked")==false)
			{
				$(".form .err-tips").css({"display":"block"});
				$(".err-tips").html("所有信息必须全部填写完整之后才能注册");
			}else{
				$(".err-tips").html(" ");
				$(".form .err-tips").css({"display":"none"});
				setCookie("username_"+$("#phone1").val(),$("#phone1").val(),60);
				setCookie("pwd_"+$("#password1").val(),$("#password1").val(),60);
				
				window.location.href="load.html"
//				window.close("register.html")
//				window.open("load.html");
			} 
		})
}