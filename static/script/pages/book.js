var id=location.href.split('?id=').pop();
var windowWidth=$(window).width();
if(windowWidth<320){
	windowWidth=320;
}
$.get('/ajax/book?id='+id,function(d){
	$.extend(d,{windowWidth,windowWidth});
	new Vue({
		el:'#app',
		data:d,
		methods:{
			readBook:function(){
				location.href='/reader'
			}
		}
	})
},'json');