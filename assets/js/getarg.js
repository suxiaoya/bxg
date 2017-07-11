//获取地址栏的数据，并转为对象
define(function(){
  var str = window.location.search;
  if(str.indexOf('?') === 0){
    str.substr(1).split('&').forEach(function(v,i){
      var arr = v.split('=');
      obj[arr[0]] = arr[1];
    },obj = {});
  }
  console.log(obj);
  return obj;
});