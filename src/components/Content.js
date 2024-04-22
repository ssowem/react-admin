import React from 'react'
import SearchForm from './SearchForm';
import ListViewer from "./ListViewer";

function Content() {
  return (
    <div className='grow px-14 py-8 flex flex-col gap-2'>
      <h2 className='text-xl font-semibold'>조회목록</h2>
      <SearchForm />
      <ListViewer />
    </div>
  )
}

export default Content;