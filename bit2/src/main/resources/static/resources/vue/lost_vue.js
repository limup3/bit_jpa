"use-strict"
var lostVue ={
		lost: () => {
		return `<table id="lostData">
                    <tr>
                        <td>
                            <a id="number">분실물 ID</a>
                        </td>
                        <td>
                            <a id="userid">습득물품명</a>
                        </td>
                         <td>
                            <a id="name">습득일자</a>
                        </td>
                       <td>
                            <a id="ssn">습득물분류</a>
                        </td>
                        <td>
                            <a id="email">습득위치(지하철)</a>
                        </td>
                    </tr>
                    
                </table>`
	}
}