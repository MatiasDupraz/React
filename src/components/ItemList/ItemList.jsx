import Item from '../Item/Item.jsx'
export const ItemList = ({products}) => {
    return(
        <div className='ListGroup flex flex-wrap justify-center'>
            {products.map(prod =>   <Item key={prod.id} {...prod} />)}
        </div>
    )
}

