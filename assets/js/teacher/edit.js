require(['/bxg/assets/js/config.js','/bxg/assets/js/common.js'],function(){
  require(['/bxg/assets/js/getarg.js','jquery'],function(obj){
    console.log(obj);
    $.ajax({
      type:'get',
      url:'/api/teacher/edit',
      data:obj,
      success:function(info){
        console.log(info);
        var data = info.result;
        $('input[name="tc_name"]').val(data.tc_name);
        $('input[name="tc_join_date"]').val(data.tc_join_date);
        
        $('input[name="tc_type"]').val(data.tc_type == 0 ? 0 : 1);
        $('input[name="tc_gender"]').val(data.tc_gender)
      }
    })
  });
})