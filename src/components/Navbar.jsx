import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile' className={({ isActive }) => (isActive ? 'active' : '')}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to='/books' className={({ isActive }) => (isActive ? 'active' : '')}>
            Books
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
