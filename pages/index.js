import { getFeaturedBooks } from '../api-helper/frontend/utils'

export default function Home({ books }) {
  

  return (
    <div>

    </div>
  )
}

export const getStaticProps = async () => {

  const books = await getFeaturedBooks()

  return {
    props: {
      books
    }
  }
}