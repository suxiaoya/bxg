require.config({
  baseUrl:'/bxg/node_modules',
  paths:{
    jquery:'./jquery/dist/jquery',
    cookie:'./jquery.cookie/jquery.cookie',
    nprogress:'./nprogress/nprogress',
    template:'./art-template/lib/template-web',
    bootstrap:'./bootstrap/dist/js/bootstrap',
    datepicker:'./bootstrap-datepicker/js/bootstrap-datepicker',
    zh:'./bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN',
    form:'./jquery-form/src/jquery.form',
    validation:'./jquery-validation/dist/jquery.validate'
  },
  shim:{
    bootstrap:{
      deps:['jquery']
    },
    // datepicker:{
    //   deps:['jquery']
    // },
    zh:{
      deps:['jquery']
    }
    // form:{
    //   deps:['jquery']
    // },
    // validation:{
    //   deps:['jquery']
    // }
  }
});