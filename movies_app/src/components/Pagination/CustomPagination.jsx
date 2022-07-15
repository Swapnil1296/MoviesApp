import React from 'react';

import Pagination from '@mui/material/Pagination';
import {createTheme} from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});
const CustomPagination = ({setPage, numOfPages = 10}) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
      }}
    >
      <Pagination
        count={numOfPages}
        color="primary"
        onChange={(e) => handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};

export default CustomPagination;
