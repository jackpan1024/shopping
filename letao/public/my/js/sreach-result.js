$(function () {
    mui('.my-footer').on('tap', 'a', function () {
        window.top.location.href = this.href;
    });

    mui.init({
        pullRefresh: {
            container: '#refreshContainer',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
            up: {
                height: 50,//可选.默认50.触发上拉加载拖动距离
                auto: false,//可选,默认false.自动上拉加载一次
                contentrefresh: "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore: '没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
                callback: getdata //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        }
    });
//    截取字符串 获得传入的参数
    function getstr() {
        var url = location.href;
        var nus = url.substr(url.indexOf("?") + 1);
        // console.log(nus)
        var num = nus.split("&")
        // console.log(num)
        for (var i = 0; i < num.length; i++) {
            var strArr = num[i].split("=")
                return strArr[1];
        }
    }

    // $('#priceSort').on('tap', function(){

	// 	// 更改价格排序条件
	// 	priceSort = priceSort == 1 ? 2 : 1;

	// 	// 对之前的各种配置进行初始化
	// 	html = "";
	// 	page = 1;
	// 	mui('#refreshContainer').pullRefresh().refresh(true);

	// 	getData();

	// });
        // console.log(getstr())
    var str = getstr();
    var page = 1;
    var This = null;
    var html = ""
    // var pageSize = 2;
    getdata()
    function getdata(){
        if(!This){
            This = this;
        }
        $.ajax({
            url:'/product/queryProduct',
            type:'get',
            data:{
                proName:str,
                page:page++,
                pageSize:4
            },
            success:function(res){
                console.log(res)
                
			if(res.data.length > 0){
                 html += template("sreachTP",res)
                //  console.log(html)
                $("#append").html(html)
				
				// 告诉上拉加载组件当前数据加载完毕
				This.endPullupToRefresh(false);

			}else {

				// 告诉上拉加载组件当前数据加载完毕
				This.endPullupToRefresh(true);

			}
               
            }
        })
    }

      

})