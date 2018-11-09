$(function(){
    var page = 1;
    var pageSize = 5;
    var totalPage = 0;
    getdata(page,pageSize)
    console.log(totalPage)
    $('#pagepre').on('click',function(){
        //    page<totalPage ? page++ : page = totalPage
        if(page >1){
            page--
        }else {
            page = 1
            alert('已经第一页了')
        }
           
            getdata(page,pageSize)
            // console.log(page)
        })
     $('#pagenex').on('click',function(){
        if(page <totalPage){
            page++
        }else {
            page = totalPage
            alert('已经最后一页了')
        }
           
            // console.log(page)
            getdata(page,pageSize)
            // console.log(page)
     })
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
                totalPage = Math.ceil(res.total)
               var html = template('secondData',res)
               $('#addList').html(html)
            }
        })
    }
})