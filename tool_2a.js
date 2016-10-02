<<<<<<< HEAD
var app = angular.module('toolApp',['ngDialog'])
.controller('toolCtrl', function($scope, ngDialog){
    $scope.mode=1;
    $scope.custom='+1';
    $scope.src=$scope.target='';
    $scope.is_selected=function(d){return d==$scope.mode?'active':'';}
    $scope.set_selected=function(d){$scope.mode=d;}
    $scope.run=function(){
        if ($scope.src=='') return '';
        var src=$scope.src.toString();
        var re=/\d+/g;
        var base=$scope.target;
        var opr=$scope.custom;
        var num=(opr[0]=='*'||opr[0]=='/')?parseFloat(opr.substr(1)):parseFloat(opr);
        var loc=0;
        match=(src.match(re)!=null)?src.match(re):[];
        if ($scope.mode==0){
            for (i=0;i<match.length;i++){
                if (src.substr(src.indexOf(match[i],loc)+1,base.length)==base){
                    var _new='';
                    switch(opr[0]){
                        case '*':
                            _new=(parseFloat(match[i]) * num)+base;
                            break;
                        case '/':
                            _new=(parseFloat(match[i]) / num)+base;
                            break;
                        default:
                            _new=(parseFloat(match[i]) + num)+base;
                            break;
                    }
                    part_1=src.substr(0,loc);
                    part_2=src.substr(loc).replace(match[i]+base,_new);
                    loc=src.indexOf(match[i],loc)-match[i].length+_new.length;
                    src=part_1+part_2;
                }
                else{
                    loc=src.indexOf(match[i],loc)+match[i].length;
                }
            }
        }
        else{
            
            for (i=0;i<match.length;i++){
                if (src.substr(src.indexOf(match[i],loc)-base.length,base.length)==base){
                    var _new='';
                    switch(opr[0]){
                        case '*':
                            _new=base+(parseFloat(match[i]) * num);
                            break;
                        case '/':
                            _new=base+(parseFloat(match[i]) / num);
                            break;
                        default:
                            _new=base+(parseFloat(match[i]) + num);
                            break;
                    }
                    part_1=src.substr(0,loc);
                    part_2=src.substr(loc).replace(base+match[i],_new);
                    loc=src.indexOf(match[i],loc)-base.length+_new.length;
                    src=part_1+part_2;
                }
                else{
                    loc=src.indexOf(match[i],loc)+match[i].length;
                }
            }
        }
        return src;
    }
    $scope.openDialog= function(){
        var dialog='<div>';
        dialog+='<h2>"數值更改"的介紹</h2>';
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
=======
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
>>>>>>> 40a9e077aea7e96185c68cf66f3746bd004f14f7
