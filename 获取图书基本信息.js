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
	//页面完全加载完成后
	window.onload = (event) => {
		var tempStr,title,author,pub,isbn,price;
		var url = location.href;
		if(url.indexOf("dangdang.com")>0){
			'当当网'
			title = document.getElementsByTagName("h1")[0].innerText;
			author =document.getElementById("author").innerText.substring(3);
			pub = document.getElementsByClassName("t1")[1].innerText.substring(4);
			tempStr = document.getElementsByClassName("key clearfix").item(0).innerHTML;
			isbn = tempStr.substring(tempStr.indexOf("国际标准书号ISBN：")+11,tempStr.indexOf("国际标准书号ISBN：")+24);
			price = document.getElementById("original-price").innerText;
			alert(title+","+author+","+pub+","+isbn+","+price);
		};

		if(url.indexOf("jd.com")>0){
			'京东'
			title = document.getElementsByClassName("sku-name")[0].innerText;
			author = document.getElementById("p-author").innerText;
			price = document.getElementById("page_maprice").innerText;
			pub = document.getElementById("parameter2").children[0].title;
			isbn = document.getElementById("parameter2").children[1].title;
            alert(title+","+author+","+pub+","+isbn+","+price);
		};
	};
})();