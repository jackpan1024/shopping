$(function () {
    mui('.my-footer').on('tap', 'a', function () {
        window.top.location.href = this.href;
    });


   $(".mui-content").on("click","#addAddress",function(){
    var address = $("[name='city']").val().trim(); 
    var addressDetail = $("[name='detail']").val().trim()
    var recipients = $("[name='username']").val().trim()
    var postcode = $("[name='postCode']").val().trim()
    // console.log(postcode)
    $.ajax({
        url: "/address/addAddress",
        type: "post",
        data: {
            address: address,
            addressDetail: addressDetail,
            recipients: recipients,
            postcode: postcode
        },
        success: function (res) {
         
        }
    })
   })
})




