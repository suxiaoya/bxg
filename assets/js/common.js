define(['jquery', 'nprogress', 'cookie'],function( $, NProgress){
  //跳转到该页面时显示进度条
  NProgress.start();
  //功能1：判断用户是否登录
  signIn();
  //功能2：从cookie读取用户的资料，并展示
  avatar();
  //功能3：导航菜单交互（展开与收起）
  menuFlod();
  //功能4：退出登录
  signOut();
  //功能5：让页面打开时有进度条，让每个ajax发送过程有进度

  function signIn(){
    var sessionID = $.cookie('PHPSESSID');
    console.log(sessionID);
    if(!sessionID){
      window.location.href = '/bxg/views/index/login.html';
    }
  }

  function avatar(){
    console.log($.cookie('userInfo'));
    var userInfo = JSON.parse($.cookie('userInfo'));
    console.log(userInfo);
    //设置头像
    $('.profile img').attr('src', userInfo.tc_avatar);
    //设置用户名
    $('.profile h4').next().text(userInfo.tc_name);
  }

  function menuFlod(){
    $('.navs li a').on('click',function(){
      $(this).next('ul').slideToggle();
    });
  }

  function signOut(){
    $('.fa-sign-out').closest('li').on('click',function(){
      var options = {
        type:'post',
        url:'/api/logout',
        success:function(info){
          console.log(info);
          if(info.code == 200){
            window.location.href = '/bxg/views/index/login.html';
          }
        }
      }
      $.ajax(options);
    });
  }

  //当ajax请求开始时显示进度条 结束时消失
  function globalAjaxEvent(){
    $(document).ajaxStart(function(){
      NProgress.start();
    });
    $(document).ajaxStop(function(){
      NProgress.done();
    });
  }
  //当页面加载完毕后进度条消失
  $(function(){
    NProgress.done();
  });
});