import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/img/LOGOFICIAL.png'
import Button from '../Button.jsx'
const NavBar = () => {
    return (
        <div className="mx-0 bg-gray-800 rounded-b-xl shadow  p-4 ">
        <nav className='flex'>
            <img src={logo} alt="logo" className=' h-20 mt--10' />
            <div className="container mx-auto bg-center flex justify-center">
                <Button text="Home" />
                <Button text="Ofertas" />
                <Button text="Notebooks" />
                <Button text="Celulares" />
                <Button text="Categorías" />
            </div>
            <CartWidget/>
        </nav>
        
    </div>
    )
}

export default NavBar;