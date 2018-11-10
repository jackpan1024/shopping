$(function(){
    var page = 1;
    var pageSize = 5;
    var totalPage = 0;
    getdata(page,pageSize)
    // console.log(totalPage)
    //上一页的点击翻页
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
        // 下一页的点击翻页
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
    //  获取数据封装
    function getdata(page,pageSize){
        $.ajax({
            url:"/category/querySecondCategoryPaging",
            type:"get",
            data:{
                page:page,
                pageSize:pageSize
            },
            success:function(res){
                // console.log(res)
                totalPage = Math.ceil(res.total/pageSize)
               var html = template('secondData',res)
               $('#addList').html(html)
            }
        })
    }

    // 点击添加二级分类

    // 思路： 首先获取一级分类的名称 在产品分类里面
   
        $.ajax({
            url:'/category/queryTopCategoryPaging',
            type:'get',
            data:{
                page:1,
                pageSize:100
            },
            success:function(res){
                // console.log(res)
                // totalPage = Math.ceil(res.total/pageSize)
                var html = template('firstProductName',res)
                // console.log(html)
                // $('#productTb').html(html)
                // $(html).appendTo($('#productTb'))
                $('#firstproductList').html(html)
            }
        })
        // console.log( $('.form-control').val())

    //     在获取图片的地址 
        // 借用的jq 中的插件 有先后顺序 ui.widget iframe-transport fileupload
        var brandLogo ;
            $('#inagePush').fileupload({
                dataType: 'json',
                done: function (e, data) {
                  $('.img-thumbnail').attr('src',data.result.picAddr)
                  brandLogo = data.result.picAddr
                }
            });
       
        // 调用接口

    //     最后调用接口 传入数据

    $('#save').on('click',function(){
       var categoryId =  $('#firstproductList').val() //在下拉菜单中 当select 的value 等于被选中的option的value
       var brandName = $('#productName').val().trim()  //获取输入框中的二级产品名称
    //    console.log(categoryId,brandName)
        $.ajax({
            url:'/category/addSecondCategory',
            type:"POST",
            data:{
                brandName:brandName,
                categoryId:categoryId,
                brandLogo:brandLogo,
                hot:0
            },
            success:function(res){
               if (res.success){
                location.reload()
               }
            }

            
        })
    })





})