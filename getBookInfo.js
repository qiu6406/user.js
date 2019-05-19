// ==UserScript==
// @name         获取图书基本信息
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       404566950@qq.com
// @match        http://*.dangdang.com/*
// @match        https://*.dangdang.com/*
// @match        https://*.jd.com/*
// @grant        MIT
// ==/UserScript==

(function() {
	'use strict';
	// Your code here...
	function getBookInfo(){
		var tempStr,title,author,pub,isbn,price;
		var url = location.href;
		if(url.indexOf("dangdang.com")>0){
			//当当网
			title = document.getElementsByTagName("h1")[0].innerText;
			author =document.getElementById("author").innerText.substring(3);
			pub = document.getElementsByClassName("t1")[1].innerText.substring(4);
			tempStr = document.getElementsByClassName("key clearfix").item(0).innerHTML;
			isbn = tempStr.substring(tempStr.indexOf("国际标准书号ISBN：")+11,tempStr.indexOf("国际标准书号ISBN：")+24);
			price = document.getElementById("original-price").innerText;
			//提示框样式1,如需使用注释样式2
			prompt("基本信息",title+","+author+","+pub+","+isbn+","+price);
			//提示框样式2，如需使用注释样式1
			//alert(title+","+author+","+pub+","+isbn+","+price);
		};

		if(url.indexOf("jd.com")>0){
			//京东
			title = document.getElementsByClassName("sku-name")[0].innerText;
			author = document.getElementById("p-author").innerText;
			if(document.getElementById("page_origin_price")==null) {price = document.getElementById("page_maprice").innerText;}
            else {price = document.getElementById("page_origin_price").innerText;}
			pub = document.getElementById("parameter2").children[0].title;
			isbn = document.getElementById("parameter2").children[1].title;
			//提示框样式1,如需使用注释样式2
			//prompt("基本信息",title+","+author+","+pub+","+isbn+","+price);
			//提示框样式2，如需使用注释样式1
			alert(title+","+author+","+pub+","+isbn+","+price);
		};
	}
	//页面完全加载完成后，弹出提示框，T设置为1；页面加载即执行T设置为0
	//建议在当当网站设置为0，京东设置为1
	var T=0;
	if(T==1)window.onload = (event) => {getBookInfo();}
	else getBookInfo();
})();