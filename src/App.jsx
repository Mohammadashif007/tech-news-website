import React from 'react';
import Search from './components/Search/Search';
import Pagination from './components/Pagination/Pagination';
import Stories from './components/Stories/Stories';

const App = () => {
  return (
    <div>
      <h1>Tech News</h1>
      <Search></Search>
      <Pagination></Pagination>
      <Stories></Stories>
    </div>
  );
};

export default App;