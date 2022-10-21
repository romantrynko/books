import React from 'react';
import { Container, Grid } from '@mui/material';
import BookItem from './BookItem';

const BookList = ({ data }) => {
  return (
    <Container>
      <Grid
        sx={{ display: 'flex', justifyContent: 'center' }}
        marginTop={10}
        container
        gap={3}>
        {data.map((book, index) => (
          <Grid
            xs={6}
            sm={4}
            md={3}
            height={500}
            width={'100%'}
            key={index}
            item>
            <BookItem {...book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BookList;
