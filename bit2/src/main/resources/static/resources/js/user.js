"use strict"
var user = user || {} // new user , name space
//user는 글로벌 선언 (Java Resources 내에서)
//Member member = null
user = (()=>{ // 즉시실행구조 , 모듈패턴
	let init = () => {
		alert("1")
		onCreate()
	}
	//member = new Member()
	
	let onCreate = () =>{ //만들어지자마자 , 기능
		setContentView()
		$('#register_Button').click(e => {
        	e.preventDefault()
        	location.href = "/admin"
        })
        $('#access_Button').click(e=> {
        	$.ajax({
        		url : '',
        		type : '',
        		data : {},
        		dataType : 'json',
        		contentType : 'application/json',
        		success : d=> {
        			
        		},
        		error : (r,x,e) => {
        			alert(r.status)
        		}
        		
        		
        	})
        })
	}
	let setContentView = () =>{ // 속성
		$('#kcdc').css({ width: '80%', height: '900px' }).addClass('border_black center')
        $('#tr_1').css({ width: '80%', height: '50px' }).addClass('border_black center')
        $('#menu').css({ width: '80%', height: '50px' }).addClass('border_black center')
        $('#kcdc td').addClass('border_black', 'width_full')
        
	}
	return {init}
	
})()