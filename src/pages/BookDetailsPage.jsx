import { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const books = [
  { id: 1, title: 'Star Wars' },
  { id: 2, title: 'LotR' },
  { id: 3, title: 'Rick&Morty' },
  { id: 4, title: 'Twilight' },
]

const BookDetailsPage = () => {
  const { bookId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.get('pizza') === 'pizza')

  useEffect(() => {
    setSearchParams({ pizza: 'pizza' })
  }, [])

  return (
    <>
      <h1>Details of the book</h1>
      <h2>Title of the book: {books.find(currentBook => currentBook.id == bookId).title}</h2>
    </>
  )
}

export default BookDetailsPage
