$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

	$.ajax({
		url:"/employee/checkRootLogin",
		type: 'get',
		success:function(res){
			// console.log(res)
			if( res.error == 400){
				location.href = "login.html"
			}
		}
	})

	$('.login_out_bot').on('click',function(){
		$.ajax({
			url:'/employee/employeeLogout',
			type:'get',
			success:function(res){
				if(res.success){
					location.href = 'login.html'
				}else{
					$('.login_out_bot').html('退出失败')
					setTimeout(function(){
						$('.login_out_bot').html('退出')	
					},2000)
				}
			}
		})
	})

});