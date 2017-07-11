define(['jquery','cookie'],function($){
  console.log($);
  //1.点击登录按钮 获取表单内容 验证表单内容是否符合规则 请求服务器
  var $sub = $('#login');
  $sub.on('click',cleckHandler);
  function cleckHandler(e){
    //清除默认行为  
    e.preventDefault();

    var $name = $('#name').val();
    var $pass = $('#pass').val();

    if(!$name.trim() || !$pass.trim()){
      return false;
    }

    var options = {
      type:'post',
      url:'/api/login',
      data:{tc_name:$name,tc_pass:$pass},
      success:function(info){
        console.log(info);
        if(info.code == 200){
          console.log(info.msg);

          //把登录名和头像存入cookie中
          $.cookie('userInfo',JSON.stringify(info.result),{expires:7,path:'/'});
          //设置跳转到首页
          window.location.href = '/bxg/views/index/dashboard.html';
        }
      }
    }
    $.ajax(options);
  }
});