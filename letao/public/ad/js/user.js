$(function(){
    var page = 1
    var pageSize = 5
    // var isDelete;
   function getdata(){
    $.ajax({
        url:'/user/queryUser',
        type: 'get',
        data:{
            page:page,
            pageSize:pageSize
        },
        success:function(res){
            // console.log(res)
           var html = template("productList",res)
        //    var th = 
        $('.body').html(html)
        
        }
    })
   }
   getdata()

   $('.body').on('click','button',function(){
    // console.log(123)
        // var id = $(this).data(id)
        // var isDelete = $(this).data(isDelete)
        var id = $(this).attr('data-id')
        var isDelete = $(this).attr('data-isDelete')
        isDelete == 1 ? isDelete =0:isDelete = 1
            
       
        $.ajax({
            url:'/user/updateUser',
            type:'post',
            data:{
                id :id,
                isDelete: isDelete 
            },
            success:function(res){
                // console.log(123)
               if(res.success){
                getdata()
               }
            }
        })
   })
    
})