import { connectToDB } from '../../../api-helper/utils';
import { updateBook, deleteBook, getBook } from '../../../api-helper/controllers/books-controller';

export default async function handler(req, res) {
  await connectToDB()

  if (req.method === 'PUT') {
    await updateBook(req, res)
  } else if (req.method === 'DELETE') {
    await deleteBook(req, res)
  } else if (req.method === 'GET') {
    await getBook(req, res)
  }
}