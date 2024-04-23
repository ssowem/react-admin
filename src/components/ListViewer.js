import React from 'react'

function ListViewer() {
  return (
    <div className="grow">
      <table className="w-full text-center text-[0.8rem]">
        <thead className="h-12 border-b-[0.1rem] border-black bg-black text-white rounded-lg">
          <tr>
            <th className="px-2 py-2">No.1</th>
            <th className="px-2 py-2">이름</th>
            <th className="px-2 py-2">반 이름</th>
            <th className="px-2 py-2">성별</th>
            <th className="px-2 py-2">생년월일</th>
            <th className="px-2 py-2">견종</th>
            <th className="px-2 py-2">등록날짜</th>
            <th className="px-2 py-2">추가1</th>
            <th className="px-2 py-2">추가2</th>
            <th className="px-2 py-2">추가3</th>
            <th className="px-2 py-2 w-24"><span className="hidden">수정</span></th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b-[0.1rem] ">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">이땡자</td>
            <td className="px-2 py-2">행복</td>
            <td className="px-2 py-2">Female</td>
            <td className="px-2 py-2">2024-04-22</td>
            <td className="px-2 py-2">말티즈</td>
            <td className="px-2 py-2">2024-04-23</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
            </td>
          </tr>
          
          <tr className="border-b-[0.1rem] ">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">이땡자</td>
            <td className="px-2 py-2">행복</td>
            <td className="px-2 py-2">Female</td>
            <td className="px-2 py-2">2024-04-22</td>
            <td className="px-2 py-2">말티즈</td>
            <td className="px-2 py-2">2024-04-23</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b-[0.1rem] ">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">이땡자</td>
            <td className="px-2 py-2">행복</td>
            <td className="px-2 py-2">Female</td>
            <td className="px-2 py-2">2024-04-22</td>
            <td className="px-2 py-2">말티즈</td>
            <td className="px-2 py-2">2024-04-23</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b-[0.1rem] ">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">이땡자</td>
            <td className="px-2 py-2">행복</td>
            <td className="px-2 py-2">Female</td>
            <td className="px-2 py-2">2024-04-22</td>
            <td className="px-2 py-2">말티즈</td>
            <td className="px-2 py-2">2024-04-23</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b-[0.1rem] ">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">이땡자</td>
            <td className="px-2 py-2">행복</td>
            <td className="px-2 py-2">Female</td>
            <td className="px-2 py-2">2024-04-22</td>
            <td className="px-2 py-2">말티즈</td>
            <td className="px-2 py-2">2024-04-23</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b-[0.1rem] ">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">이땡자</td>
            <td className="px-2 py-2">행복</td>
            <td className="px-2 py-2">Female</td>
            <td className="px-2 py-2">2024-04-22</td>
            <td className="px-2 py-2">말티즈</td>
            <td className="px-2 py-2">2024-04-23</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b-[0.1rem] ">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">이땡자</td>
            <td className="px-2 py-2">행복</td>
            <td className="px-2 py-2">Female</td>
            <td className="px-2 py-2">2024-04-22</td>
            <td className="px-2 py-2">말티즈</td>
            <td className="px-2 py-2">2024-04-23</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b-[0.1rem] ">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">이땡자</td>
            <td className="px-2 py-2">행복</td>
            <td className="px-2 py-2">Female</td>
            <td className="px-2 py-2">2024-04-22</td>
            <td className="px-2 py-2">말티즈</td>
            <td className="px-2 py-2">2024-04-23</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b-[0.1rem] ">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">이땡자</td>
            <td className="px-2 py-2">행복</td>
            <td className="px-2 py-2">Female</td>
            <td className="px-2 py-2">2024-04-22</td>
            <td className="px-2 py-2">말티즈</td>
            <td className="px-2 py-2">2024-04-23</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b-[0.1rem] ">
            <td className="px-2 py-2">01</td>
            <td className="px-2 py-2">이땡자</td>
            <td className="px-2 py-2">행복</td>
            <td className="px-2 py-2">Female</td>
            <td className="px-2 py-2">2024-04-22</td>
            <td className="px-2 py-2">말티즈</td>
            <td className="px-2 py-2">2024-04-23</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">Lorem ipsum dolor sit amet</td>
            <td className="px-2 py-2">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default ListViewer