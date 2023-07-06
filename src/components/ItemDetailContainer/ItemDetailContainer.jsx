import { useEffect, useState } from "react"
import {getProductById} from '../../asyncMock'
import {ItemDetail} from '../ItemDetail/ItemDetail'
const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null   )
    
    useEffect(() => {
        getProductById(3)
        .then(response => {
            setProducts(response)
        })
        .catch(err => {
            console.error(err)
        })
    })

    return(
        <div>
            <ItemDetail {...products}/>
        </div>
    )
}
export default ItemDetailContainer