// JavaScript Document
// var countdown=60; 
// function settime(val) { 
// 	if (countdown == 0) { 
// 		val.removeAttribute("disabled"); 
// 		val.text="获取到短信验证码"; 
// 		countdown =60; 
// 	} else { 
// 		val.setAttribute("disabled", true); 
// 		val.text=countdown+"秒后可重新发送"; 
// 		countdown--; 
// 		setTimeout(function() { 
// 			settime(val) 
// 		},1000) 
// 	} 

// } 
// $(function(){
//     $(".tipTimer").trigger("click");
// })

  function check() {
	var submitFlg = true;
	//验证姓名
	var regpname={regstr:/^[\u4e00-\u9fa5]{1,6}$/,tip:'请输入1-6位的汉字'};
	var pname= document.getElementById("wname").value;
	var span1 = document.getElementById("wname").parentNode.getElementsByTagName("span");
	document.getElementById("wname").focus(function(){
	span1[1].innerHTML=""
	})
	document.getElementById("wname").blur(function(){
		if(!regpname.regstr.test(pname)){
			span1[1].innerHTML="<font color='red'>"+regpname.tip+"<font>";
			submitFlg = false;
			}
	})
	
	//验证用户名
	var regusername={regstr:/^[\u4e00-\u9fa5]{1,6}$/,tip:'请输入1-6位的汉字'};
	var username= document.getElementById("username").value;
	var span2 = document.getElementById("username").parentNode.getElementsByTagName("span");
	document.getElementById("username").focus(function(){
	span2[1].innerHTML="";
	})
	document.getElementById("username").blur(function(){
		if(!regusername.regstr.test(username)){
			span2[1].innerHTML="<font color='red'>"+regusername.tip+"<font>";
			submitFlg = false;
			}
	})
	
	
	//验证密码
	var regpassword={regstr:/^[\w@#*]{6,10}$/,tip:'请输入6-10位的英文、数字、下划线、@、#、*'};
	var password= document.getElementById("password1").value;
	var span3 = document.getElementById("password1").parentNode.getElementsByTagName("span");
	document.getElementById("password1").focus(function(){
		
	span3[1].innerHTML="";
	
	})
	document.getElementById("password1").blur(function(){
		if(!regpassword.regstr.test(password)){
			span3[1].innerHTML="<font color='red'>"+regpassword.tip+"<font>";
			submitFlg = false;
			}
	})


	var repassword=document.getElementById("password2").value;
	var spans = document.getElementById("password2").parentNode.getElementsByTagName("span");
	document.getElementById("password2").focus(function(){
		
	span4[1].innerHTML="";
	
	})
	document.getElementById("password2").blur(function(){
		if(repassword!=password){
			span4[1].innerHTML="<font color='red'>"+"两次输入的密码不一致"+"<font>";
			submitFlg = false;
			}
	})
	
	
	//验证电话
	var regphone={regstr:/^1\d{10}$/,tip:'请输入11位的手机号'};
		var phone= document.getElementById("phone").value;
		var span5 = document.getElementById("phone").parentNode.getElementsByTagName("span");
	document.getElementById("phone").focus(function(){
		span5[1].innerHTML="";
		})
		document.getElementById("phone").blur(function(){
			if(!regphone.regstr.test(phone)){
				span5[1].innerHTML="<font color='red'>"+regphone.tip+"<font>";
				submitFlg = false;
			}
		})
	return submitFlg;
	}
	check();
  
//   $("#login").click(function(){
// 	$.ajax({
// 	 url: "/login",
// 	 type: 'POST',
// 	 data: $("#formid").serialize(),
// 	 success: function(data) {
// 	  if(data.status == 99999) {
// 	   alert("3秒后跳转到首页");
// 	   setTimeout(function() {
// 		location.href='http://'+window.location.host+'/index';
// 	   },3000)
// 	  }else {
// 	   alert('登录名或密码错误')
// 	  }
// 	 }
// 	})  
//    })
   
   
//    $("#btn").click(function(){
// 	$.ajax({
// 	 url: "/register",
// 	 type: 'POST',
// 	 data: $("#forms").serialize(),
// 	 success: function(data) {
// 	  console.log(data);
// 	  if(data.status == 99999) {
// 	   alert("注册成功")
// 	  }else {
// 	   alert("登录名已经有人用")
// 	  }
// 	 }
// 	})  
//    })
  
  
  