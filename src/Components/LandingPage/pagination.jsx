import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationList = (props) =>{
  return (
    <Stack spacing={2}>
      <Pagination count={props.total} variant="outlined" shape="rounded" />
    </Stack>
  );
}
export default PaginationList