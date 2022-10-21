import { connectToDB } from '../../api-helper/utils';
import { getAllBooks, addBook } from '../../api-helper/controllers/books-controller';

export default async function handler(req, res) {
  await connectToDB()

  if (req.method === 'GET') {
    return getAllBooks(req, res)
  } else if (req.method === 'POST') {
    return addBook(req, res)
  }
}