// function find() {
// 	var data2;
// 	$.ajax({
// 		type: "post",
// 		url: "/goods",
// 		dataType: "json",
// 		data: {//传给servlet的数据,
// 			s_name: $('#s_name').val(),
// 			s_price1: $('#s_price1').val(),
// 			s_price2: $('#s_price2').val(),
// 			s_type: $('#s_type').val(),
// 		},
// 		async: false,//加上这个ajax先执行
// 		success: function (data) {
// 			console.log(data);
// 			//返回处理的方法
// 			data2 = data;
// 		}
// 	});
// 	return data2;
// }

// $("#tbody").delegate(".del","click",function(){
// 	$.ajax({
// 		type: "get",
// 		url: "/goods/del",
// 		dataType: "json",
// 		data: {
// 			name:$(this).data("id")
// 		},
// 		success: function (data) {
// 			alert("删除成功")
			
// 		}
// 	});
// })