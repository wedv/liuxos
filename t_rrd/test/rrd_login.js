var ext_j_password='W6pPhRwPRPV1aqfFSEJtHonJELRYB9d3duNUbWKkZMDRj11kjB9Hvtsxe/du73Govao2sQJuKrYl/Pfcmq70KhvA7nnbLmbSeEnH6yWoXeLgvs3Z/+tYzLutLMYCZVBscApK+BFxLRSi9SHExYicPu8dWz69ayHAjcVGow+trsI=';
function ext_login(){
	jQuery.ajax({
		url:'https://www.renrendai.com/j_spring_security_check',
		type:'post',
		data:{j_username:'770977802@qq.com',j_password:ext_j_password,rememberme:'on',targetUrl:'http://www.renrendai.com/',returnUrl:''}
	});
}
