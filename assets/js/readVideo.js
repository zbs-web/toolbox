$(document).ready(function (){
    var videoSource = new Array(
        "https://okjx.cc/?url=", // ok-f
	"https://jx.aidouer.net/?url=",
	"https://jx.qianhaijishi.net/?url=",
        "https://www.8090g.cn/?url=", // ok-need-flash
        "https://jx.618g.com/?url=", // ok-f
        "https://vip.parwix.com:4433/player/?url=", 
        "http://17kyun.com/api.php?url=", // ok
        "https://www.1717yun.com/yunjx/?url=", // ok-need-flash
        "https://www.1717yun.com/jx/ty.php?url=",
        "https://z1.m1907.cn/?jx=",
	"https://vip.bljiex.com/?v="
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
	
	//存储视频解析源序号
	var videoSourceIndex = 0;
	
	//解析按钮对应的点击事件
    $("#videoButton").click(function() {
        //获取用户输入的视频地址并验证
        var input = $("#videoURL").val();
        if (input == "") {
            layer.confirm("<h4 style='color:red;'>提示：</h4>您未粘贴视频地址！<br />请在文本框中粘贴<b>电脑版</b>视频网站地址。", {btn:['确定'], title: '提示'}, function(){
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
			var isBilibili = input.indexOf("www.bilibili.com") != -1;
			if (isYouku || isIqiyi || isTencent || isBilibili) {
				//自动生成解析源序号
				var autoVideoSourceIndex = videoSourceIndex++ % videoSource.length;
				
				//跳转到解析地址
				window.open(videoSource[autoVideoSourceIndex] + input);
			}
			else {
				layer.confirm("<h4 style='color:red;'>提示：</h4>您输入的视频地址无效！<br />请在文本框中粘贴<b>电脑版</b>视频网站地址。", {btn:['确定'], title: '提示'}, function(){
					$("#tips1").html("您输入的视频地址无效！");
					layer.close(layer.index);
				});
			}
        }
    });
});

