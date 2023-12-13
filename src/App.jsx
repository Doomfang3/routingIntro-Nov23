import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useState } from 'react'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute'
import BooksPage from './pages/BooksPage'
import BookDetailsPage from './pages/BookDetailsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <button type='button' onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <Routes>
        <Route path='/' element={<h1>HomePage</h1>} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<h1>ContactPage</h1>} />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/books/:bookId' element={<BookDetailsPage />} />

        <Route path='*' element={<h1>404 Page</h1>} />
      </Routes>
    </>
  )
}

export default App
