"use strict"
var admin = admin || {}

admin = (()=>{
	let init = () => {
		onCreate()
	}
	
	let onCreate = () => {
		setContentView()
		$('#user_list').click(e=> {
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
	                        .click(e =>
	                        alert(`${j.userid}`)
	                        )
	                        
				})
			})
		})
		
		$('#admin_list').click(e=>{
			$.getJSON("/admins", d=>{
				$.each(d,(i,j) => {
					$('#total_count').text("총회원수 :" +d.length)
					$(`<tr>
	                        <td>
	                                <span>${i+1}</span>
	                            </td>
	                            <td>
	                                <span>${j.name}</span>
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
				})
				
			})
		})
		
	}
	let setContentView = () => {
		$('#userData tr').first().css({'background-color' :'yellow'})
	}
	return {init}
	
})()