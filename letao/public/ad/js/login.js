$(function(){
    // console.log(123)
    // 绑定事件
    $('.btn').on('click',function(){
        var username = $('.form-username').val();
        var password = $('.form-password').val();
        if (!username){
            $('#tips>p').html("请输入用户名").css("color","red")
            return   
          } 
          if (!password){
            $('#tips>p').html("请输入密码").css("color","red")
            return   
          }  
       $.ajax({
           url: "/employee/employeeLogin",
           type: "POST",
           data:{
               username:username,
               password:password
           },
           success:function(res){
                if(res.success){
                    location.href = "user.html"
                }
                else {
                    $('#tips>p').html("用户名或密码错误").css("color","red")
                }
                
           }
       })
    })
})