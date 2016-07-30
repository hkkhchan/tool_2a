var app= angular.module('toolApp',['ngDialog']).controller('toolCtrl',function($scope,ngDialog){
	$scope.go=function(){

	}
	$scope.reset=function(){
		$scope.layout=1;
		$scope.method=2;
		$scope.rows=[{id: 0,show:true,name:'',value:''}];
		$scope.res_text=$scope.res_html=$scope.res_json='';
	}
	$scope.openDialog= function(){
		var dialog='<div>';
		dialog+='<h2>"字串提取"的介紹</h2>';
		dialog+='<p>本功能主要使用regular expression的技巧，將目標抽取再進行計算。</p>';
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