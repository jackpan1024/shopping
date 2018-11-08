$(function(){
    mui('.my-footer').on('tap', 'a', function () {
        window.top.location.href = this.href;
    });



    $.ajax({
        url:"/address/queryAddress",
        type:"get",
        success:function(res){
            console.log(res)
         var html = template("addresInfo",{result:res})
         $(".list").html(html)
        }
    })
    
})