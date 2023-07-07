import { useEffect, useState } from "react"
import {getProductById} from '../../asyncMock'
import {ItemDetail} from '../ItemDetail/ItemDetail'
<<<<<<< HEAD
const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null   )
    
    useEffect(() => {
        getProductById(3)
=======

import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)
    
    const {ItemId} = useParams()
    useEffect(() => {
        getProductById(ItemId)
>>>>>>> 634422ba53aee7599255a2fd446ebde831261409
        .then(response => {
            setProducts(response)
        })
        .catch(err => {
            console.error(err)
        })
<<<<<<< HEAD
    })
=======
    }, [ItemId])
>>>>>>> 634422ba53aee7599255a2fd446ebde831261409

    return(
        <div>
            <ItemDetail {...products}/>
        </div>
    )
}
export default ItemDetailContainer