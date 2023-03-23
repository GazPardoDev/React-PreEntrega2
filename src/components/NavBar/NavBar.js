import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import mainLogo from './main-logo.png'
import './NavBar.css'

const NavBar = () => {
    return(
        <nav style={{ backgroundColor: '#5d8704', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '2vh' }}>
            <img src={mainLogo} alt="Good Morning!" />
            <div>
                <Link to='/category/televisores'>Smart TVs</Link>
                <Link to='/category/audio'>Sistemas de Audio</Link>
                <Link to='/category/camaras'>Cámaras Digitales</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar