require(['/bxg/assets/js/config.js','/bxg/assets/js/common.js'],function(){
  require(['jquery','datepicker','form','validation','zh'],function($){
    // 日期插件初始化
    $('input[name="tc_join_date"]').datepicker({
      format:'yyyy/mm/dd',
      language:'zh-CN',
      todayHighlight: true
    });

    //初始化表单验证插件
    $('form').validate({
      submitHandler:function(){
        // 验证通过执行的方法
        //调用发送ajax请求的方法(此方法会进行表单数据提交)
        $('form').ajaxSubmit({
          url:'/api/teacher/add',
          type:'post',
          success:function(info){
            console.log(info);
            if(info.code == 200){
              alert('添加成功！');
            }
          }
        });
      },
      rules:{
        tc_name:{
          required:true,
          rangelength:[2,4]
        },
        tc_pass:{
          required:true,
          rangelength:[6,16]
        },
        tc_join_date:{
          required:true,
          date:true
        }
      },
      messages:{
        tc_name:{
          required:'* 姓名不能为空！！！ *',
          rangelength:'* 姓名长度必须为2-4个，包含2个和4个 *'
        },
        tc_pass:{
          required:'* 密码不能为空！！！ *',
          rangelength:'* 密码长度必须为6-16个数字、字母、符号等 *'
        },
        tc_join_date:{
          required:'* 入职时间不能为空！！！ *',
          date:'* 日期格式为[yyyy/mm/dd] *'
        }
      }
    });

  });
});