# 博学谷静态页面

## 如何使用?
```bash
git clone git@github.com:huoqishi/bxg-template.git
```
```bash
cd bxg-template
```
```bash
npm install
```

## 博学谷项目
### 登录
- views/index/login.html
- script:src="..require.js" data-main="...login-main.js"
> data-main 加载 login-main.js
> login-main.js 加载 config.js 然后加载login.js
*要先加载config.js 然后加载login.js* 要先配置别名 才可以使用别名
*核心：要完成的是login.js中的代码*
*由于 login-main.js 中可能只有一句代码，所以直接写在login.html中的script标签中*

### 首页
- views/index/dashboard.html
- script src="...require.js"
<script>
  require(['...config.js','...common.js','...dashboard.js'],function(){})
</script>

### 公共代码 common.js
> 把不同页面都要使用的代码提取，在每个页面都加载（即复用）



## 步骤
### 登录功能
1. 在login.html中引入require.js
2. 在config.js中进行requirejs的配置
3. 在login.html中使用require函数引入config.js和其他js（先加载config.js）
4. 在login.js中实现登录页面的功能
4. 1. 在login.js中注册登录按钮的点击事件
4. 2. 在事件里获取表单数据
4. 3. 把表单数据进行验证
4. 4. 验证成功之后，发请求，把数据发给后端
4. 5. 请求成功：把用户资料保存到cookie中，然后跳转到首页
4. 6. 请求失败：给用户一个提示

## 公共功能（复用）
0. 登录校验 判断用户如果没有登录，则跳转到登录页面
1. 在common.js中读取cookie中登录里存储的用户资料，把它添加到页面上
2. 在导航菜单交互（展开或收起）
3. 退出登录
4. 进度条Nprogress.start  Nprogress.done(ajax全局事件)

## 首页功能
