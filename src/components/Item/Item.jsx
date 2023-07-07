<<<<<<< HEAD
=======
import {Link} from 'react-router-dom';
>>>>>>> 634422ba53aee7599255a2fd446ebde831261409
const Item = ({id, name, codigo, price, category, stock, imgSrc}) => {
    return (
        <article className = 'CardItem rounded-md  border w-60 m-5'>
            <header className = 'Header'>
                <h2 className = 'ItemHeader text-xl text-black p-2'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={imgSrc} alt={name} className='ItemImg w-40'/>
            </picture>
            <section>
                <p className = 'Info pl-2'>${price}</p>
                <p className = 'Info pl-2'>Disponibles: {stock}</p>
            </section>
            <footer className = 'ItemFooter pl-2'>
<<<<<<< HEAD
                <button className="Option">Ver Detalle</button>
=======
                <Link to={`/item/${id}`} className='Option'>Ver Detalle</Link>
>>>>>>> 634422ba53aee7599255a2fd446ebde831261409
            </footer>
        </article>
    )
}
export default Item