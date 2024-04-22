import React from 'react'
import SelectButton from './SelectButton';

function SearchForm() {
  const buttons = ['오늘', '1주일', '1개월', '3개월', '6개월', '1년'];
  const classFilter = ['전체', '행복', '건강', '사랑'];

  const dateOptions = [
    { id: 1, name: '등록일자' },
    { id: 2, name: '최신순' },
    { id: 3, name: '날짜순' }
  ];

  const filterOptions = [
    { id: 1, name: '이름' },
    { id: 2, name: '보호자명' },
    { id: 3, name: '가나다순' }
  ];

  return (
    <form action="#" className="w-full border px-10 py-10">
      <div className="w-[49rem] flex flex-col gap-2">
        {/* 기간 */}
        <div className="flex gap-2 items-center">
          <label className="w-24" htmlFor="date-select">기간</label>
          <SelectButton options={dateOptions} />
          <div className="flex gap-1 items-center">
            <input type="date" className='w-28 h-9 rounded-md border border-gray-300 py-1.5 pl-2 pr-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6' />
            <span>~</span>
            <input type="date" className='w-28 h-9 rounded-md border border-gray-300 py-1.5 pl-2 pr-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6' />
          </div>
          {/* 기간별 선택 버튼 */}
          <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 overflow-hidden">
            {buttons.map((label, index) => (
              <button key={label} className={`button-base ${index < buttons.length - 1 ? 'button-border' : ''}`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 검색조건 */}
        <div className="flex gap-2 items-center">
          <label className="w-24" htmlFor="filter-select">검색조건</label>
          <SelectButton options={filterOptions} />
          <input type="text" placeholder="검색어를 입력해주세요" className="grow h-9 rounded-md border border-gray-300 py-1.5 pl-2 pr-2 text-gray-900 shadow-sm ring-inset ring-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm sm:leading-6" />
          <button className="h-9 mr-1.5 rounded-md bg-black text-white px-8 sm:text-sm sm:leading-6">검색하기
          </button>
        </div>

        {/* 반 검색 */}
        <div className="flex gap-2 items-center">
          <label className="w-24" htmlFor="filter-select">반 검색</label>

          {classFilter.map((filter) => (
            <div key={filter} className="flex items-center gap-1">  {/* key 속성을 최상위 요소로 이동 */}
              <input type="checkbox" id={filter} className="h-5 w-5 rounded-md" /> {/* id 속성 추가 */}
              <label htmlFor={filter} className="text-sm">{filter}</label> {/* htmlFor 값을 동적으로 변경 */}
            </div>
          ))}
        </div>
      </div>
    </form>
  )
}

export default SearchForm;

