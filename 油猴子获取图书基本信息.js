// ==UserScript==
// @name         ��ȡͼ�������Ϣ
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
	window.onload = (event) => {
		var tempStr,title,author,pub,isbn,price;

		'������'
		title = document.getElementsByTagName("h1")[0].innerText;
		author =document.getElementById("author").innerText.substring(3);
		pub = document.getElementsByClassName("t1")[1].innerText.substring(4);
		tempStr = document.getElementsByClassName("key clearfix").item(0).innerHTML;
		isbn = tempStr.substring(tempStr.indexOf("���ʱ�׼���ISBN��")+11,tempStr.indexOf("���ʱ�׼���ISBN��")+24);
		price = document.getElementById("original-price").innerText;
		alert(title+","+author+","+pub+","+isbn+","+price);

		'����'
		title = document.getElementsByClassName("sku-name")[0].innerText;
		author = document.getElementById("p-author").innerText;
		price = document.getElementById("page_maprice").innerText;
		pub = document.getElementById("parameter2").children[0].title;
		isbn = document.getElementById("parameter2").children[1].title;
	}
})();