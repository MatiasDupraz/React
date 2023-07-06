import { useEffect, useState } from "react"
import {getProducts, getProductByCategory} from '../../asyncMock'
import {ItemList} from '../ItemList/ItemList'

import { useParams } from "react-router-dom"
const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    
    const {categoryId} = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts; //Verifica si hay productos filtrados por categoría y si no los hay envía todos (getProducts)
        
        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(err => {
            console.error(err)
        })
    }, [categoryId])

    return(
        <div>
            <h1 className="text-5xl text-gray-800 font-bold flex justify-center mt-4">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer