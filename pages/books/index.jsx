import React from 'react';
import { getAllBooks } from '../../api-helper/frontend/utils';
import BookList from '../../components/BookList';

const BooksHome = ({ books }) => {
  return <BookList data={books} />;
};

export default BooksHome;

export const getStaticProps = async () => {
  const books = await getAllBooks();
  return {
    props: {
      books
    }
  };
};
