window.onload =function(){
	var box = document.getElementById('bgbox');
		function Ball(){
			this.dom = null;
			
			this.init();//初始化
			
		}
		Ball.prototype.init = function(){
			this.dom = document.createElement('div');
			box.appendChild(this.dom)
			this.dom.className = 'ball';
			do{
			this.speed = getRandom(-4,4);//水平的增速
			this.speed1 = getRandom(-4,4);
		}while(this.speed == 0 && this.speed1 == 0);
			this.r = getRandom(0,255);
			this.g = getRandom(0,255);
			this.b = getRandom(0,255);
			this.dom.style.background ='rgb('+this.r+','+this.g+','+this.b+')';
			//设定半径
			this.r = this.dom.offsetWidth/2;
			//设定小球圆心x，y的值
			this.x = getRandom(this.r,box.offsetWidth-this.r);
			this.y = getRandom(this.r,box.offsetHeight-this.r);

			this.dom.style.left = this.x - this.r + 'px';
			this.dom.style.top = this.y - this.r + 'px';
			this.update();
		}
		Ball.prototype.update = function(){
			var  self = this
			this.timer =setInterval(function(){self.x += self.speed;
			self.y+=self.speed1;
			//是否碰左右壁
			if (self.x<self.r||self.x>box.offsetWidth-self.r) {
				self.remove()
				clearInterval(self.timer);
				self.init();
				}
			//是否碰上下壁
			if (self.y<self.r || self.y>box.offsetHeight-self.r)
			 {self.remove()
			 	clearInterval(self.timer);
			 	self.init();

			 }
				//反应到dom身上
			self.dom.style.left = self.x - self.r + 'px';
			self.dom.style.top = self.y - self.r + 'px';},200)
			
		}
		Ball.prototype.remove=function(){
			box.removeChild(this.dom);
		}
		

		function getRandom(min,max){
			return Math.floor(Math.random()*(max-min+1)+min);
		}
	 for (var i = 0; i < 20; i++) {
		 new Ball();
	}
	    var fullpage = document.getElementById('fullpage');
    var pages = fullpage.getElementsByClassName('page');
    var navi = document.getElementsByClassName('head-tap-list')[0];
    var spans = navi.getElementsByTagName('a');

    // 添加鼠标滚动事件
    fullpage.addEventListener("mousewheel", fn1, false);
    fullpage.addEventListener("DOMMouseScroll", fn1, false);

    //定义变量num，指定屏的序号，取值范围（0-3）
    var num = 0;

    function fn1(evt) {
        var event = evt || window.event;
        var point = true;//向下滚动为true，向上滚动为false
        if (event.wheelDelta) {//IE 或 谷歌
            point = event.wheelDelta > 0 ? false : true;
        } else {//火狐
            point = event.detail > 0 ? true : false;
        }
        // 去除滚动的默认事件
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
        if (point) {
            num++;
        } else {
            num--;
        }
        if (num < 0) {
            num = 0;
        }
        if (num > 7) {
            num = 7;
        }
        play(num);
    }
    function play(n) {
        fullpage.style.top = -(n * 100) + '%';
        for (var i = 0; i < spans.length; i++) {
            // 去掉所有切换按钮的的class属性值
            spans[i].className = "header-tap-item";

        }
        // 当前切换按钮的样式为‘active2’
        spans[n].className = "active2";
        // 将‘active’样式追加到当前page元素的class属性中
    }
    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = function () {
            for (var j = 0; j < spans.length; j++) {
                if (this == spans[j]) {
                    num = j;
                    play(num);
                }
            }
        }
    }
    var act = document.getElementById('act-content');
	var img = act.getElementsByTagName('img');
	window.onscroll = function(){
	var docScroll = document.documentElement.scrollTop || document.body.scrollTop;
	var docClient = document.documentElement.clientHeight;
	for(var i = 0; i < img.length; i++){
		if(docScroll >= getAllTop(img[i]) - docClient){
			img[i].setAttribute("src",img[i].getAttribute("as"));
		}
	}
}
	function getAllTop(obj){
		var allTop = obj.offsetTop;
		var  obj = obj;
		while((obj = obj.offsetParent) != null){
			allTop += obj.offsetTop;
		}
		return allTop;
	}
	     var oul=document.getElementById('ul')
        var oli=oul.getElementsByTagName('li')
        var now=0;
        var key=0;
        function next(){
        	now++;
        	if (now>oli.length-1) {
        		now=0;
        	}
        	key++;
        	if (key>oli.length-1) {
        		key=0;
        		oul.style.left=0;
        	}
        	show()
        }
        var time2=setInterval(next,2000)
        oul.onmouseover=function(){
        	clearInterval(time2)
        }
        oul.onmouseout=function(){
        	time2=setInterval(next,2000)
        }
        var time1=null;
        function show(){
        	var len=(-oli[0].offsetWidth)*key-oul.offsetLeft;
                console.log(oul.offsetLeft)
                var start=oul.offsetLeft;
                console.log(start)

        	var count=20;
        	var a=0;
        	clearInterval(time1)
        	time1=setInterval(function(){
        		a++;
        		oul.style.left=start+len*a/count + 'px';
        		if (a==count) {
        			clearInterval(time1);
        		}
        	},30)
        }

}
	