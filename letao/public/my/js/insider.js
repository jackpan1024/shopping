$(function(){


    mui('.my-footer').on('tap', 'a', function () {
        window.top.location.href = this.href;
    });
    
    $.ajax({
        url:"/user/queryUserMessage",
        type:"get",
        success:function(res){
            console.log(res.username)
           var html = template("user",res);
           $(".userInfo").html(html);
        }
    })
})