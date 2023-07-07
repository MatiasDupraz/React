import { useEffect, useState } from "react"
<<<<<<< HEAD
import {getProducts} from '../../asyncMock'
import {ItemList} from '../ItemList/ItemList'
const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts()
=======
import {getProducts, getProductByCategory} from '../../asyncMock'
import {ItemList} from '../ItemList/ItemList'

import { useParams } from "react-router-dom"
const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    
    const {categoryId} = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts; //Verifica si hay productos filtrados por categoría y si no los hay envía todos (getProducts)
        
        asyncFunc(categoryId)
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
    }, [categoryId])
>>>>>>> 634422ba53aee7599255a2fd446ebde831261409

    return(
        <div>
            <h1 className="text-5xl text-gray-800 font-bold flex justify-center mt-4">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer