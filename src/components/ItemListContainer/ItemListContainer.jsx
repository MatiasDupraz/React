import { useEffect, useState } from "react"
import {getProducts} from '../../asyncMock'
import {ItemList} from '../ItemList/ItemList'
const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(err => {
            console.error(err)
        })
    })

    return(
        <div>
            <h1 className="text-5xl text-gray-800 font-bold flex justify-center mt-4">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer