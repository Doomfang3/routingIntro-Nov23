import { Navigate } from 'react-router-dom'

const isLoggedIn = true

const PrivateRoute = ({ children }) => {
  if (!isLoggedIn) {
    return <Navigate to='/login' />
  }
  return <>{children}</>
}

export default PrivateRoute
