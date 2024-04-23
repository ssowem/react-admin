import React from 'react'
import SearchForm from './SearchForm';
import ListViewer from "./ListViewer";
import AddButton from "./AddButton";
import Pagination from "./Pagination";

function Content() {
  return (
    <div className='grow px-10 py-6 flex flex-col gap-3'>
      <h2 className='text-xl font-semibold'>조회목록</h2>
      <SearchForm />
      <AddButton />
      <ListViewer />
      <Pagination />
    </div>
  )
}

export default Content;