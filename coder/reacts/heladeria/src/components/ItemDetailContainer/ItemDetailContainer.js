import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncMock'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
   
    const [product, setProduct] = useState({})

    const { productId } = useParams()

    useEffect(() => {
        getProduct(productId).then(response => {
            console.log(productId)
            setProduct(response)
            console.log(product.name)
        })
    }, [productId])

    return (
        <div>
            <h1>{product?.name}</h1>
            <img src={product?.img} className='productImg'></img>
            <div>{product?.description}</div>
        </div>
    )
}

export default ItemDetailContainer