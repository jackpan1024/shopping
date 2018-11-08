$(function(){

    mui('.my-footer').on('tap', 'a', function () {
        window.top.location.href = this.href;
    });
    // 搜索历史的添加是将搜索内容添加到本地的浏览器中存储
    var strArr = [];
    $("#search-btn").on("click",function(){
        // console.log(12)
        var str = $(".search").find("input").eq(0).val().trim()
        // console.log(str)
        if (str){
            strArr.unshift(str);
        // console.log(strArr)
        // 因为localStorage只能存储字符串类型的数据. 如果传入非字符串类型的数据会隐式转换为字符串后存储
        localStorage.setItem("strArr",JSON.stringify(strArr));
        // location.href= "sreach-result.html"
        location.href= "sreach-result.html?result="+str
        }else {
            $(".Tips").show(500);
            setTimeout(function(){
                 $(".Tips").hide(500);
            },2000)
        }
        //
   
    })
    $(".Tips").hide(2);
    // JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
    if(localStorage.getItem('strArr')){
         strArr = JSON.parse(localStorage.getItem("strArr"))
         console.log(strArr)
         var html = template("historyTpl",{result:strArr})
         console.log(html)
         $("#history-box").html(html)
        }
    $('#clearBtn').on('click',function(){

		$('#history-box').html("");

		localStorage.removeItem("strArr");

	});
	$("#history-box>li").on("click",function(){
        var a = $(this).html()
        $(".search>input").eq(0).val(a) 
        
            // console.log(12)
            var str = $(".search").find("input").eq(0).val().trim()
            // console.log(str)
            if (str){
                strArr.push(str);
            // console.log(strArr)
            // 因为localStorage只能存储字符串类型的数据. 如果传入非字符串类型的数据会隐式转换为字符串后存储
            localStorage.setItem("strArr",JSON.stringify(strArr));
            location.href= "sreach-result.html?result="+str
            // location.href = "sreach.html"
            }else {
                $(".Tips").show(500);
                setTimeout(function(){
                     $(".Tips").hide(500);
                },2000)
            }
            //
       
        })
 

    
})