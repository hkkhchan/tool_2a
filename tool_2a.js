var app= angular.module('toolApp',['ngDialog']).controller('toolCtrl',function($scope,ngDialog){
	$scope.src=$scope.target='';
	$scope.run=function(){
		if (typeof($scope.src)=='undefined' || typeof($scope.before)=='undefined' || typeof($scope.after)=='undefined') return '';
		const src=$scope.src;
		const before=$scope.before;
		const after=$scope.after;
		const tl=before.length;
		var end=0;
		var arr=new Array();
		var start=src.indexOf(before,end);
		while (start>-1 && end> -1){
			end=src.indexOf(after,start+tl);
			if (end>-1) arr.push(src.substring(start+tl,end));
			start=src.indexOf(before,end);
		}
		return arr.join(',');
	}
	$scope.openDialog= function(){
		var dialog='<div>';
		dialog+='<h2>"字串提取"的介紹</h2>';
		dialog+='<p>本功能主要使用indexOf來將目標抽取。</p>';
		dialog+='<p>本頁完全不用JQuery來處理DOM，用AngularJS來將結果呈現出來。</p>';
		dialog+='<p>AngularJS能給予html資料源作雙向綁定，所以無須綁定元素的事件，使Coding看起來簡潔。</p>';
		dialog+='</div>';
		ngDialog.open({
			template: dialog,
			plain: true,
			className: 'ngdialog-theme-default',
			scope: $scope
		});
	};	
});