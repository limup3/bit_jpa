"use strict"
var lost = lost || {}

lost = (() => {
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다.`
	let lost_vue
	let init = () => {
		lost_vue = `/resources/vue/lost_vue.js`
		onCreate()
	}
	let onCreate = () => {
		$.when(
				$.getScript(lost_vue)
				
		).done(()=>{
			
			$('#lost_list').click(e=>{
				$('#content').empty()
				$('#content').html(`<table id="userData">
	                   <tr>
	                        <th>
	                            <a>분실물ID</a>
	                        </th>
	                        <th>
	                            <a>습득물품명</a>
	                        </th>
	                         <th>
	                            <a>습득일자</a>
	                        </th>
	                       <th>
	                            <a>습득물분류</a>
	                        </th>
	                        <th>
	                            <a>습득위치(지하철)</a>
	                        </th>
	                    </tr>
	                    
	                </table>`)
	                setContentView()
				$.getJSON("/losts", d=>{
					$.each(d,(i,j) => {
						$('#total_count').text("총회원수 :" +d.length)
						$(`<tr>
		                        <td>
		                                <span>${j.lostid}</span>
		                            </td>
		                            <td>
		                                <span>${j.acquired_item}</span>
		                            </td>
		                             <td>
		                              <span>${j.acquired_date}</span>
		                            </td>
		                           <td>
									  <span>${j.acquired_classification}</span>
		                            </td>
		                            <td>
		                                <span>${j.acquired_location}</span>
		                            </td>
		                        </tr>`).appendTo('#userData')
						
					})
				})
				
			})
		}).fail(()=> {
			alert(WHEN_ERROR)
		})
	}
	let setContentView = () => {
		$('#userData tr').first().css({'background-color' :'yellow'})
	}
	return {init}
})()