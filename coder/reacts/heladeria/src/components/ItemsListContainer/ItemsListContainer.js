import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import './ItemsListContainer.css'


const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, []
    )

    return (
    <div>
        <div>Hola, acá iran tus productos</div>
        <Item products={products}/>
    </div>
    )
}

export default ItemListContainer