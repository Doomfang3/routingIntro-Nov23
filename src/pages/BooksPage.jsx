import { Link } from 'react-router-dom'

const books = [
  { id: 1, title: 'Star Wars' },
  { id: 2, title: 'LotR' },
  { id: 3, title: 'Rick&Morty' },
  { id: 4, title: 'Twilight' },
  { id: 5, title: 'Yimans book' },
]

const BooksPage = () => {
  return (
    <>
      <h1>BooksPage</h1>
      {books.map(currentBook => (
        <Link key={currentBook.id} to={`/books/${currentBook.id}`}>
          <h2>{currentBook.title}</h2>
        </Link>
      ))}
    </>
  )
}

export default BooksPage
