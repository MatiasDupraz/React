import { useEffect, useState } from "react"
import {getProductById} from '../../asyncMock'
import {ItemDetail} from '../ItemDetail/ItemDetail'

import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)
    
    const {ItemId} = useParams()
    useEffect(() => {
        getProductById(ItemId)
        .then(response => {
            setProducts(response)
        })
        .catch(err => {
            console.error(err)
        })
    }, [ItemId])

    return(
        <div>
            <ItemDetail {...products}/>
        </div>
    )
}
export default ItemDetailContainer