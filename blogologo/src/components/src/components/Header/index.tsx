import { NavLink } from 'react-router-dom'
import './styles.css'

const Header = () => {
  return (
    <div className='header'>
      <NavLink to='/' className='link'>Home</NavLink>
      <NavLink to='/search' className='link'>Поиск</NavLink>
    </div>
  )
}

export default Header