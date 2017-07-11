//讲师列表页面
define(['jquery','template','bootstrap'],function($, template){

  //获取讲师信息并展示
  getTeacherList();
  //点击查看 显示当前点击的教师信息
  getDataInfo();
  //启用与注销
  startOrStop();

  //获取讲师信息并展示
  function getTeacherList(){
    var options = {
      url: '/api/teacher',
      type: 'get',
      success: function (info) {
        console.log(info);
        if(info.code == 200){
          var tmplList = template('tmpl-list',{list:info.result});
          $('#list').html(tmplList);
        }else{
          alert('获取讲师信息错误');
        }
      },
      error:function(info){
        alert('无法获取讲师信息');
      }
    }
    $.ajax(options);
  }

  //传入出生日期 返回年龄
  function getAge(birth){
    var birthYear = new Date(birth).getFullYear();
    // 当前日期
    var nowYear = new Date().getFullYear();
    //年龄
    return nowYear - birthYear;
  }
  // 过滤器，给模板提供方法
  template.defaults.imports.getAge = getAge;

  //点击查看 显示当前点击的教师信息
  function getDataInfo(){
    $('#list').on('click','.preview',function(){
      var tcId = $(this).closest('tr').attr('tc-id');
      console.log($(this));
      console.log(tcId);
      $('#teacherModal').modal();console.log(tcId);
      var options = {
        type:'get',
        url:'/api/teacher/view',
        data:{
          tc_id:tcId
        },
        success:function(info){
          if(info.code == 200){
            var data = info.result;
            console.log(info);
            var html = `
            <tr>
              <th>姓名:</th>
              <td>${data.tc_name}</td>
              <th>职位:</th>
              <td colspan="3">讲师</td>
              <td rowspan="4" width="128">
                  <div class="avatar">
                      <img src="${data.tc_avatar}" alt="">
                  </div>
              </td>
            </tr>
            <tr>
              <th>花名:</th>
              <td>${data.tc_roster}</td>
              <th>出生日期:</th>
              <td colspan="3">${data.tc_birthday}</td>
            </tr>
            <tr>
              <th>性别:</th>
              <td>${data.tc_gender == 0 ? '男' : '女'}</td>
              <th>入职日期:</th>
              <td colspan="3">${data.tc_join_date}</td>
            </tr>
            <tr>
              <th>手机号码:</th>
              <td colspan="2">${data.tc_cellphone}</td>
              <th>邮箱:</th>
              <td colspan="2">${data.tc_email}</td>
            </tr>
            <tr>
              <th>籍贯:</th>
              <td colspan="6">${data.tc_hometown}</td>
            </tr>
            <tr>
              <td colspan="7">
                  <div class="introduce">
                      ${data.tc_introduce}
                  </div>
              </td>
            </tr>
            `;
            $('#modal-list').html(html);
          }
        }
      }
      $.ajax(options);
    });
  }

  //启用与注销
  function startOrStop(){
    $('#list').on('click','.start-stop',function(){
      var $this = $(this);
      var tcId = $('.preview').closest('tr').attr('tc-id');
      var status = $(this).attr('status');
      var options = {
        type:'post',
        url:'/api/teacher/handle',
        data:{
          tc_id:tcId,
          tc_status:status
        },
        success:function(info){
          if(info.code == 200){
            console.log(info.result);
            // console.log(status);
            var str = info.result.tc_status === 0 ? '注销' : '启用';
            $this.attr('status',info.result.tc_status).text(str);
          }
        },
        error:function(err){
          alert('启用或注销失败');
        }
      }
      $.ajax(options);

    });
  }
});