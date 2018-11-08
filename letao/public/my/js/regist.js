$(function () {
    mui('.my-footer').on('tap', 'a', function () {
        window.top.location.href = this.href;
    });


    $('.getResponse').on("click", function () {
        $.ajax({
            url: '/user/vCode',
            type: 'get',
            // beforeSend: function () {
            //     // 校验用户名 密码 手机号
            //     var regusername = /^.{3,20}$/;
            //     if (!regusername.test(username)) {
            //         console.log("请输入正确的用户名")
            //         return false;
            //     }
            // },
            success: function (res) {
                console.log(res.vCode)
            }
        })
    })

    $(".mui-btn").on("click", function () {
        var username = $(".username").val()
        var password = $(".password").val()
        var passwordAgain = $(".passwordAgain").val()
        var mobile = $(".mobile").val()
        var vCode = $(".vCode").val()
        //    console.log(username,password,mobile,vCode)
        $.ajax({
            url: "/user/register",
            type: "post",
            data: {
                username: username,
                password: password,
                mobile: mobile,
                vCode: vCode
            },
            beforeSend:function(){
                // 用户名判断
                var regName = /^.{3,20}$/;
                if (!regName.test(username)){
                    mui.toast("请输入正确的用户名");
                    return false;
                }
                // 密码判断
                var  regPassword = /^[a-zA-Z]\w{5,17}$/;
                if (!regPassword.test(password)) {
                    mui.toast("请输入正确的密码");
                    return false;
                }
                // 再次确认密码
               if (!(password === passwordAgain)){
                mui.toast("您输入的两次密码不一致"); 
                return false;
               } 

               
                
            },
            success: function (res) {
                $(".mui-btn").html("注册成功 请登录")
               setTimeout(function(){
                    location.href = "loginIn.html"
               },2000)
               
            }
        })


    })


    function reg() {
        var reg = /^.{3,20}$/;
        if (!reg.test('.username')) {
            console.log("请输入正确的用户名")
        }

    }
})