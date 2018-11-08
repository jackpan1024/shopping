$(function(){

    // 下面的菜单栏点击切换
    mui('.my-footer').on('tap', 'a', function () {
        window.top.location.href = this.href;
    });
// 获取一级分类数据
    $.ajax({
        url: '/category/queryTopCategory',
		type: 'get',
		success: function(result){
            console.log(result)
            var html = template('category-first', {result: result.rows});
            $('.links').html(html);
            $(".links").find("li").eq(0).addClass("active")

            // 获取二级分类的第一个li的id 并传入函数中 调用函数 就能实现页面已加载的时候就渲染效果
            var id =  $(".links").find("li").eq(0).data("id");
            categoryTwo(id)
        }
    })

    // 点击实现的二级分类数据
    $(".links").on("click","li",function(){
        $(this).addClass("active").siblings().removeClass("active")
        var id = $(this).data('id');
        console.log(id)
        categoryTwo(id);

    })




    // 将二级分类数据进行封装
    function categoryTwo(id){
        $.ajax({
            url:'/category/querySecondCategory',
            type: "get",
            data:{
                id: id
            },
            success:function(res){
            var html = template("categoryT",res)
            $(".content-right>ul").html(html)
            }
        })
    }
    categoryTwo($(".links>li").eq(0).data('id'))
})