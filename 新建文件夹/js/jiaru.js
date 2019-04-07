 window.onload = function(){
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
        var time=setInterval(next,2000)
        oul.onmouseover=function(){
        	clearInterval(time)
        }
        oul.onmouseout=function(){
        	time=setInterval(next,2000)
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