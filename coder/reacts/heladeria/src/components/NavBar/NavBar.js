import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    

    return(
        <nav className='navbar_style'>
            <Link to='/'>
                {props.logo}
            </Link>
            <ul className='navbar_list_style'>
                <Link to='/'> <li>Home</li> </Link>
                <Link to='/products'> <li>Productos</li> </Link>
                <Link to='/category/postre'> <li>postres</li> </Link>
                <Link to='/category/pote'> <li>potes</li> </Link>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
