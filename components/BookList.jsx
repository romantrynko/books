import React from 'react';
import { Grid } from '@mui/material';
import BookItem from './BookItem';

const BookList = ({ data }) => {
  return (
    <Grid
      marginTop={10}
      container
      gap={3}>
      {data.map((book, index) => (
        <Grid
          xs={6}
          md={4}
          lg={3}
          key={index}
          item>
          <BookItem {...book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
