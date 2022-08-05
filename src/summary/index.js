//中台项目总结
// 1.发送axios请求可以在utils中封装一个request请求，创建axios实例
const service = axios.create({
    baseURL: '',//设置基本地址
    timeout:''//设置超时时间
})

// 搭建请求拦截器和响应拦截器
service.interceptors.requset.use() //请求拦截器中统一注入token
service.interceptors.response.use()

// 2.@import 是在css样式中引入其他css组件时使用

// 3.开发环境的跨域 vue.config.js中
// devServer: {
//     proxy: {
//         只要包含/api就请求跨域
//         '/api': {
//             target: '', 请求跨域的地址
//             changeOrigin: true, 设置为true才是真正开启跨域
//             pathRewrite: {
//             // 重新路由  localhost:8888/api/login  => www.baidu.com/api/login
//             '^/api': '' // 假设我们想把 localhost:8888/api/login 变成www.baidu.com/login 就需要这么做
//         }
//         }
//     }
// }

// 3.生产环境的跨域，前端开启nginx反向代理
//正向代理就是代理客户端，反向代理就是代理服务器
// server{
//     # 监听9099端口
//     listen 9099;
//     # 本地的域名是localhost
//     server_name localhost;
//     #凡是localhost:9099/api这个样子的，都转发到真正的服务端地址http://baidu.com
//     location ^~ /api {
//          被代理服务器的地址
//         proxy_pass http://baidu.com;
//     }
// }

// 4.vuex和本地存储结合实现token的持久保留

// 5.通过路由的前置守卫router.beforeEach()根据是否有token来确定他是放行还是回到登录页
// 或者在白名单里面，放行至白名单内（不受权限控制的路由，一般登录页和404）
// 访问权限拦截 => 是否有token =否> 是否在白名单 =否> 跳到登录页
//                  |是|
//                是否登录页 =否>   获取资料 =否>    获取用户资料
//                   |是|             |是|              |是|
//                  跳到主页           无               放过通行
//                                  放过通行

// 6.登出功能 删除token、删除用户资料、回到登录页

// 7.token失效的主动介入：设置时间戳和独一无二的key，设置超时时间，根据时间戳来判断
// 是否超时，超时就执行登出操作，并抛出错误，同时应该登录时注入带时间戳的key

// 8.token失效的被动介入：当后端返回错误状态码10002也进行登出操作

// 9.将数组数据转化成树形结构
// 运用递归算法
export function tranListToTreeData(list, rootValue) {
  const arr = []
  // 运用递归
  list.forEach(item => {
    if (item.pid === rootValue) {
      // 默认rootValue为''
      const children = tranListToTreeData(list, item.id) // 返回一个数组
      if (children.length) {
        // 如果children的长度大于0，说明找到了子节点
        item.children = children // 找到子节点以后，在item中创建一个children属性，让他等于找到的子节点值，element-UI树形控件会自动寻找children属性，将其显示为子节点
      }
      arr.push(item) // 将内容放入到数组中
    }
  })
  return arr
}

// 10.导入excel组件，下载npm i xlsx包，全局注册，有日期格式需要进行转化
// 11.导出Excel功能，npm install xlsx file-saver -S npm install script-loader -S -D
// 由于js-xlsx体积很大，导出功能也不是一个非常常用的功能，所以使用的时候建议使用懒加载

// 12.权限设计RBAC：给角色设置权限，给用户分配角色，用户可以一对多个角色，收回权限只用
// 收回角色即可
