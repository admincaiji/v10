var comm1 = {
	'update1': {
		'data': function() {
	        $(document).on('click', '.update', function() {
				comm1.update.init();
			});
		}
	},
	'update': {
		'vers': '1.0',
				'init': function() {
					if(verv10 == this.vers){
						layer.alert('当前已经是最新版了，无需更新！');				
					}else{
						var output = '<ul>';
							output += '<li class="layui-text">修复部分BUG</li>';
							output += '<li class="layui-text">1、[优化] 优化手机端各种自适应</li>';
						    output += '</ul>';						
						layer.confirm(output, {
								area: '300px',
								title: '最新版本：'+this.vers,
								btn: ['立即升级','取消']
							}, function() {
								var index = layer.msg('正在更新，请稍等片刻...',{icon: 16,time:false});
								$.ajax({
									url: 'update.php?name='+far.name, 
									type: 'POST',
									data: {downurl:'#'},
									dataType: 'json',
									success: function(res){
										if (res.code=='200') {
											layer.alert(res.msg, {title:'更新成功',icon: 6,closeBtn: 0},function(index) {
												location.reload();
											});
										}else{
										    layer.alert(res.msg, {title:'更新失败，请手动下载离线安装包覆盖更新！',icon: 5,closeBtn: 0},function(index) {
							                    top.location.href = 'https://www.admincj.com/';
						                    });
										}
									},
									error: function(res){
										layer.alert(res.msg, {title:'更新失败，请手动下载离线安装包覆盖更新！',icon: 5,closeBtn: 0},function(index) {
							                top.location.href = 'https://www.admincj.com/';
						                });
									}
							});	
						});	
					}	
				},
	        },
		}
layui.use(['form','element', 'jquery', 'layer'], function() {
    var layer = layui.layer;
	var jquery = layui.jquery;
	var element = layui.element;
	var form = layui.form;	
	comm1.update1.data();
});
