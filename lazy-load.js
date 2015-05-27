var loaded = []; /*標記圖片是否加載*/
var obj = document.getElementsByClassName("lazy");/*懶惰加載圖片*/
for (var i = 0; i < obj.length; i++) {
	loaded.push(false);
}
var clientHight = window.innerHeight || document.documentElement.clientHeight;/*瀏覽器用戶窗口高度*/

function scrollHandler(index) {
	var flag = true;/*標識元素是否滿足顯示，一旦出現不滿足顯示，則後面的元素都不滿足顯示，停止循環*/
 	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop; /*滚动离顶部距离*/
	for (var i = index; i < obj.length && flag; i++) {
		var offset = obj[i].offsetTop;/*元素到頂部的偏移量*/
		if (scrollTop + clientHight > offset) {
			obj[i].src = obj[i].getAttribute("data-src");/*把圖片的真正地址賦給圖片*/
			loaded[i] = true;/*標識圖片已經加載*/
		} else {
			flag = false;
		}
	}
}

function myScrollListener () {
	var start = loaded.indexOf(false);/*查找第一個沒有加載的圖片的位置*/
	if (start > -1) {
		scrollHandler(start);
	}
}

