$(function(){
    var page = 1;
    var pageSize = 5;
    getdata(page,pageSize)
    function getdata(page,pageSize){
        $.ajax({
            url:"/category/querySecondCategoryPaging",
            type:"get",
            data:{
                page:page,
                pageSize:pageSize
            },
            success:function(res){
                console.log(res)
            }
        })
    }
})