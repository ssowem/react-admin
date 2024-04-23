import React from 'react'

function ListViewer() {
  return (
    <div className="grow border">
      <table className="flex">
        <thead>
          <tr>
            <th>No.1</th>
            <th>이름</th>
            <th>반 이름</th>
            <th>성별</th>
            <th>생년월일</th>
            <th>견종</th>
            <th>등록날짜</th>
            <th>추가1</th>
            <th>추가2</th>
            <th>추가3</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>01</td>
            <td>이땡자</td>
            <td>행복</td>
            <td>Female</td>
            <td>2024-04-22</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>Lorem ipsum dolor sit amet</td>
          </tr>
        </tbody>
    
      </table>
    </div>
  )
}

export default ListViewer