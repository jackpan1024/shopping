$(function(){

    mui('.my-footer').on('tap', 'a', function () {
        window.top.location.href = this.href;
    });

    
   $("#getpost").submit(function(e){
       console.log(123)
      var username = $(".mui-input-clear").val()
      var password = $(".mui-input-password").val();
        $.ajax({
            url:"/user/login",
            type:"post",
            data:{
                username:username,
                password:password
            },
            success:function(res){
                var a = res.message
                if (res.success){
                    setTimeout(function(){
                        location.href = "insider.html"
                    },2000)
                }
                else{
                    mui.toast(a)
                }
            }
        })
        event.preventDefault();
   })
})