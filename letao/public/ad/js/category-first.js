$(function(){
    // console.log(123)
    //获取分类列表并动态渲染到页面上
    var page = 1;
    var pageSize = 5
    var totalPage = 0;
    getdata(page,pageSize)


    $('#pagepre').on('click',function(){
       page<totalPage ? page++ : page = totalPage
        // if(page <totalPage){
        //     page++
           
        // }
       
        getdata(page,pageSize)
        // console.log(page)
    })
    $('#pagenex').on('click',function(){
        page>1 ? page-- : page = 1
        // console.log(page)
        getdata(page,pageSize)
        // console.log(page)
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
                $('#productTb').html(html)
            }
        })
    }


// 点击添加分类

   
    $('#conservation').on('click',function(){
        var categoryName = $('#categoryName').val()
        if (!categoryName){
            alert("请输入内容")
            return false
        }
        $.ajax({
            url:"/category/addTopCategory",
            type:'POST',
            data: {
                categoryName:categoryName
            },
            success:function(res){
                // console.log(res)
                if (res.success){
                    // $('.category-first').hide()
                    // $('.modal-backdrop').hide()
                    // getdata(page,pageSize)
                    location.reload()// 页面刷新

                }
            }
        })          
    })
    
    


})