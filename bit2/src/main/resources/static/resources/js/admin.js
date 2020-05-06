"use strict"
var admin = admin || {}

admin = (()=>{
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다.`
	let user_vue
	let init = () => {
		user_vue = `/resources/vue/user_vue.js`
		onCreate()
	}
	
	let onCreate = () => {
		$.when(
				$.getScript(user_vue)
		).done(()=>{
			setContentView()
			$('#userData').empty()
			$('#admin_list').click(e=>{
				$('#content').empty()
				$('#content').html(`<table id="userData">
                        <tr>
                            <th>
                                <a >사번</a>
                            </th>
                            <th>
                                <a >이름</a>
                            </th>
                             <th>
                                <a >직책</a>
                            </th>
                           <th>
                                <a >이메일</a>
                            </th>
                            <th>
                                <a >전화번호</a>
                            </th>
                            <th>
                                <a >등록일자</a>
                            </th>
                        </tr>
                        
                    </table>`)
                    setContentView()
				$.getJSON("/admins", d=>{
					$.each(d,(i,j) => {
						$('#total_count').text("총회원수 :" +d.length)
						$(`<tr>
		                        <td>
		                                <span>${j.employNumber}</span>
		                            </td>
		                            <td>
		                                <span id="user_`+(i+1)+`"><a ></a></span>
		                            </td>
		                           <td>
									  <span>${j.position}</span>
		                            </td>
		                            <td>
		                                <span>${j.email}</span>
		                            </td>
		                            <td>
		                                <span>${j.phoneNumber}</span>
		                            </td>
		                            <td>
		                                <span>${j.registerDate}</span>
		                            </td>
		                        </tr>`).appendTo('#userData')
		                        $(`<a>${j.name}</a>`)
		                        .css({cursor:'pointer', color:'blue'})
		                        .appendTo("#user_"+(i+1))
		                        .click(e => {
		                        	$('#userData').empty()
		                        })
					})
					
				})
			})
			$('#user_list').click(e=> {
				$('#content').empty()
				$('#content').html(`<table id="userData">
                         <tr>
                            <th>
                                <a id="number">No.</a>
                            </th>
                            <th>
                                <a id="userid">아이디</a>
                            </th>
                             <th>
                                <a id="name">이름</a>
                            </th>
                           <th>
                                <a id="ssn">주민번호</a>
                            </th>
                            <th>
                                <a id="email">이메일</a>
                            </th>
                            <th>
                                <a id="phoneNumber">전화번호</a>
                            </th>
                            <th>
                                <a id="registerDate">등록일자</a>
                            </th>
                        </tr>
                        
                    </table>`)
                    setContentView()
				$.getJSON('/users', d =>{
					$.each(d, (i, j) => {
						$('#total_count').text("총회원수 :" +d.length)
						$(`<tr>
		                        <td>
		                                <span>${i+1}</span>
		                            </td>
		                            <td>
		                                <span>${j.userid}</span>
		                            </td>
		                             <td>
		                              <span id="user_`+(i+1)+`"><a ></a></span>
		                            </td>
		                           <td>
									  <span>${j.ssn}</span>
		                            </td>
		                            <td>
		                                <span>${j.email}</span>
		                            </td>
		                            <td>
		                                <span>${j.phoneNumber}</span>
		                            </td>
		                            <td>
		                                <span>${j.registerDate}</span>
		                            </td>
		                        </tr>`).appendTo('#userData')
		                        $(`<a>${j.name}</a>`)
		                        .css({cursor: 'pointer', color:'blue'})
		                        .appendTo("#user_"+(i+1))
		                        .click(e => {
//		                        	$('#userData').html(userVue.detail())
		                        $('#userData').empty()
		                        $(userVue.detail()).appendTo('#userData')
		                        	$.getJSON(`/users/${j.userid}`,d =>{
		                        		$('#userId').text(d.userid)
		                        		$('#userName').text(d.name)
		                        		$('#userSSN').text(d.ssn)
		                        		$('#userAddr').text(d.addr)
		                        		$('#userEmail').text(d.email)
		                        		$('#userPhoneNumber').text(d.phoneNumber)
		                        		$('#registerDate').text(d.registerDate)
	                        	})
		                        })
					})
				})
			})
			
			
		}).fail(()=>{
			alert(WHEN_ERROR)
		})
		
		
	}
	let setContentView = () => {
		$('#userData tr').first().css({'background-color' :'yellow'})
	}
	return {init}
	
})()