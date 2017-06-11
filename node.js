const http=require('http');//http模块
const serve=http.createServer(function(require,response){
	//require:请求，浏览器发给服务器
	//response:应答 发给浏览器的信息
	console.log('呵呵')
})
