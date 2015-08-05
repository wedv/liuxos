var ext_j_password='';
function ext_login(){
	jQuery.ajax({
		url:'https://www.renrendai.com/j_spring_security_check',
		type:'post',
		data:{j_username:'770977802@qq.com',j_password:ext_j_password,rememberme:'on',targetUrl:'http://www.renrendai.com/',returnUrl:''},
		success:function(data, textStatus){
			this; // 调用本次AJAX请求时传递的options参数
		}
	});
}
