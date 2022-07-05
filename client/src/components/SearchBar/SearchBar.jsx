
import React from 'react';
import AtoZ from '../Ordering/AtoZ';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';

function SearchBar() {
      return (
        <>
      <Search/>
      <AtoZ/>
      <Pagination/>
      </>
  )
}

export default SearchBar