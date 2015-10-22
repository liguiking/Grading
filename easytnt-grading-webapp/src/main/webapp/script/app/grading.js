(function() {
	"use strict";
	var __browser = getBrowser();
	define([ 'jquery','logger','app/marking/ImgToolbox','app/marking/PointPanel', 'app/marking/ImgView' ,'ui','ajaxwrapper'],
			function($,logger,imgToolbox,point,imgViewer,ui,ajaxWrapper) {
		var _grading;
		var _imgViewer;
		
		function save(data){
			ajaxWrapper.postJson(getTaskUrl()+"/itemscoring",data.onlyValues(),{beforeMsg:{tipText:"系统正在计分....",show:false},successMsg:{tipText:"计分成功",show:true}},
					function(m){
				if(m.status.success){
					_grading.nextPaper();
					_grading.incrementTask();
				}
			});
		};
		
		//键盘定义
		function pointPanelKeyShort(){
			$(document).off('keyup').on('keyup',function(e){
				var eventCode = e.which || e.keyCode;
				var char  = String.fromCharCode(eventCode);
				switch(eventCode){
				case 38:
					point.prev();			
					break;
				case 40:
					point.next();
					break;
				case  13:
					//按回车往下一个输入框移动，最后一个输入框完成后，再按回车，进行计分操作
					if(point.hasNext()){
						point.next(true);
					}else{
						_grading.record();
					}
					break;
				default:
					point.checked();
				}
			});				
		};
		
		function getTaskUrl(){
			var url = window.location.href;
			return url.substring(url.indexOf('task'));
		};

		var Grading = function() {
			var imgPanel = $('aside.img-panel-container');
			var imgToolboxPanel = $('div.img-panel-toolbox');
			var pointPanel = $('aside.point-panel-container .point-panel-marking');
			var navigationPanel = $('#navigation .container');
			var statusPanel = $('footer.status-bar');
			this.nextPaper = function(){
				point.reset();
				pointPanelKeyShort();
				ajaxWrapper.getJson(getTaskUrl()+'/cuttings',{show:false},function(data){					
					imgToolbox.switchTo(data.imgPath);
				});
				
			};
			
			this.incrementTask = function(){
				var $task = statusPanel.find('li:last b:first');
				var task = $task.text();
				$task.text(task*1 + 1);
			};
			
			this.clear = function(){
				var thisModel = {};
				$.extend(true,thisModel,{},_pointModel);
				onShortKeys(thisModel);
				point.init(this);
			};
			
			this.record = function(){
				var score = point.total();
				var btns = [{text:'确认',clazz : 'btn-primary',callback:function(){
					save(score);
					$(this).trigger('close');
				}},{text:'重改',callback:function(){
					point.actived();
					$(this).trigger('close');
				}}];
				var message =  "总分：<b style='color:#c83025;font-size:14px'>"+ score.value +"</b>";
				
				var modal = ui.modal( score.title+'得分情况',message,'sm',btns);
				$(document).off('keyup').on('keyup',function(e){
					var eventCode = e.which||e.keyCode;
					if(eventCode == 27){				//退出键
						point.actived();
						pointPanelKeyShort();
						modal.close();
					}else if(eventCode == 13){	//退出键					
						save(score);
						modal.close();						
					}							
	            });	
			};

			this.render = function(model) {
				setImgPanelHeight();
				point.newInstance();
				_imgViewer = imgViewer.init({containerId:"imgContainer",imgSrc:"",eagleEyeRatio:0.2,
					imgLoaded:function(){
						point.addFocusListener(function(){
							_imgViewer.hilightArea(this.position,this.dataTo);
						});
						point.actived();
				}});
				imgToolbox.init(_imgViewer);
				//pointPanelKeyShort();
				this.nextPaper();
				bindEvent();
			};

			function bindEvent(){
				$('div.point-panel-marking div.panel-body .form-group:last').on('click','button:first',function(){
					if(point.hasNext()){
						point.next(true);
					}else{
						_grading.record();
					}
				}).on('click','button:last',function(){
					point.reset();
				});
			};
			
			function setImgPanelHeight(){
			    var windowH = $(window).height();
	            var h1 = getClientHeight()-navigationPanel.height()-statusPanel.height();
	            logger.log(navigationPanel.height());
	            imgPanel.height(h1);
	            pointPanel.find('.panel-body').height(h1-150);
	            imgToolboxPanel.find('.panel-body ').height(h1-65);
			};		
					
		};
		_grading = new Grading();
		return _grading;
	});
})();