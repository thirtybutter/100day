//点击移动
$(".signin").click(function(){
	$("#move").animate({"left":"-10rem"},200)
});
$(".signout").click(function(){
	$("#move").animate({"left":"0rem"},200)
});
//密码可见
$(".password div").click(function(){
	if($(this).parent().children("input").attr("type")=="password"){
		$(this).parent().children("input").attr("type","text");
		$(this).css("backgroundImage","url(img/login/眼睛.png)");
		$(this).css("backgroundSize",".55rem .55rem");
	}else{
		$(this).parent().children("input").attr("type","password");
		$(this).css("backgroundImage","url(img/login/闭眼.png)");
		$(this).css("backgroundSize",".5rem .25rem");
	}
})
//注册
var num,pwd;
$("#signout>li>.number").blur(function(){	 	
 	if($(this).val().match(/^(1[35789]\d{9})?(\d{6})?(\w+([\._-]*\w)*@(\w+[\._-]*)+(\.[\w-]+)+)?$/)==null&&$(this).val()!=""){
 		$(this).val("请正确输入账号，手机号或邮箱");
 	}else if(localStorage.getItem("account")==$(this).val()){
 		$(this).val("账号已存在");
 	}else{
 		num=$(this).val();
 	}
})
$("#signout>li>.passwordinp").blur(function(){	 	
 	if($(this).val().match(/^\w{6,18}$/)==null&&$(this).val()!=""){
 		$(this).val("");
 	}else{
 		pwd=$(this).val();
 	}
})
$("#signout>li>.passwordrepeat").blur(function(){
 	if($(this).val().match(/^\w{6,18}$/)!=null&&$(this).val()!=""&&$(this).val()==pwd){
		$("#signout>a").text("信息正确，点击注册");
		$("#signout>a").click(function(){
			if(window.localStorage){
				localStorage.setItem(num,pwd);
			}
			$("#move").animate({"left":"0rem"},200);
		})
 	}else{
 		$(this).val()="";
 	}
})
//登录
var getpwd;
$("#signin li .number").blur(function(){	 
 	if($(this).val().match(/^(1[35789]\d{9})?(\d{6})?(1[35789]\d{9})?(\w+([\._-]*\w)*@(\w+[\._-]*)+(\.[\w-]+)+)?$/)==null&&$(this).val()!=""){
 		$(this).val("请正确输入账号，手机号或邮箱");
 	}else{
 		if(window.localStorage){
			getpwd=localStorage.getItem($(this).val());
		}
 	}
})
$("#signin li .passwordinp").blur(function(){	 	
   	if($(this).val().match(/^\w{6,18}$/)!=null&&$(this).val()!=""&&$(this).val()==getpwd){
		$("#signin a").attr("href","mine.html");
		$("#signin a").click(function(){
			if(window.localStorage){
				localStorage.setItem("account",num);
			}
		})
   	}else{
   		$(this).val("");
   	}
})