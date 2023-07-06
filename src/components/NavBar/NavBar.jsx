import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/img/LOGOFICIAL.png'
import {NavLink, Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <div className="mx-0 bg-gray-800 rounded-b-xl shadow  p-4 NavBar">
        <nav className='flex'>
            <img src={logo} alt="logo" className=' h-20 mt--10' />
            <div className="container mx-auto bg-center flex justify-center">
                <NavLink to = {`/category/Auriculares`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
                <NavLink to = {`/category/Webcams`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
                <NavLink to = {`/category/Celulares`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
                <NavLink to = {`/category/Mouse`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
            </div>
            <CartWidget/>
        </nav>
        
    </div>
    )
}

export default NavBar;