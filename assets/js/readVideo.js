$(document).ready(function (){
    var videoSource = new Array(
        "https://jiexi.380k.com/?url=", // default-most-f
        "https://okjx.cc/?url=", // ok-f
        "http://www.600m.net/api/?v=", // ok
        "https://www.8090g.cn/?url=", // ok-need-flash
        "http://jx.618g.com/?url=", // ok-f-by-380k
        "https://jx.618g.com/?url=", // ok-f
        "https://www.2ajx.com/vip.php?url=", // ok-f-by-2Ajx
        "http://17kyun.com/api.php?url=", // ok
        "https://jiexi8.com/vip/index.php?url=", // ok
        "https://www.ckmov.xyz/jx/api/?url=", // ok-f
        "https://jx.98a.ink/?url=", // ok
        "https://api.rdhk.net/?url=", // ok-f
        "https://api.78sy.cn/?url=", // ok-f-first
        "https://www.1717yun.com/yunjx/?url=", // ok-need-flash
        "https://www.1717yun.com/jx/ty.php?url=",
        "http://vip.jlsprh.com/?url=", // ok
        "https://z1.m1907.cn/?jx=",
        "https://jx.jiexis.com/?url=",
        "https://cdn.yangju.vip/k/?url=",
        "https://www.myxin.top/jx/api/?url=",
        "https://jiexi.071811.cc/jx.php?url=",
        "https://jx.598110.com/index.php?url=",
    );
    
	//输入框获得焦点时的事件
	$("#videoURL").focus(function(){
		layer.tips("请输入各视频网站的电脑版网址", "#videoURL", {
			tips: [3, '#49392D'],
			time: 3000
		})
	});
	
	//鼠标移动到按钮上时的事件
	$("#videoButton").mouseover(function(){
		layer.tips("再次点击切换解析源", "#videoButton", {
			tips: [3, '#49392D'],
			time: 3000
		})
	})
	
	//解析按钮对应的点击事件
    $("#videoButton").click(function() {
        //获取用户输入的视频地址并验证
        var input = $("#videoURL").val();
        if (input == "") {
            layer.confirm("您未粘贴视频地址！", {btn:['确定'], title: '提示'}, function(){
                $("#tips1").html("您未粘贴视频地址！");
                layer.close(layer.index);
            });
        }
        else {
            $("#tips1").html("");
            //判断用户输入的视频网址
			var isYouku = input.indexOf("v.youku.com") != -1;
			var isIqiyi = input.indexOf("www.iqiyi.com") != -1;
			var isTencent = input.indexOf("v.qq.com") != -1;
			if (isYouku || isIqiyi || isTencent) {
				//跳转到解析地址
				var randomNum = Math.floor (Math.random() * videoSource.length);
				window.open(videoSource[randomNum] + input);
			}
			else {
				layer.confirm("您输入的视频地址无效！", {btn:['确定'], title: '提示'}, function(){
					$("#tips1").html("您输入的视频地址无效！");
					layer.close(layer.index);
				});
			}
        }
    });
});