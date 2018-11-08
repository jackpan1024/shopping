$(function(){
    // console.log(123)
    //获取分类列表并动态渲染到页面上
    var page = 1;
    var pageSize = 5
    var totalPage = 0;
    getdata(page,pageSize)


console.log(totalPage)
    $('#pagepre').on('click',function(){
        page++
        getdata(page,pageSize)
    })
    $('#pagenex').on('click',function(){
        page--
        // console.log(page)
        getdata(page,pageSize)
    })
    
    function getdata(page,pageSize){
        $.ajax({
            url:'/category/queryTopCategoryPaging',
            type:'get',
            data:{
                page:page,
                pageSize:pageSize
            },
            success:function(res){
                // console.log(res)
                totalPage = Math.ceil(res.total/pageSize)
                var html = template('productList',res)
                // console.log(html)
                // $('#productTb').html(html)
                // $(html).appendTo($('#productTb'))
                $('#productTb').append(html)
            }
        })
    }
})