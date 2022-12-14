const products = [
    {
        id:'1',
        name: 'Kilo',
        price: 1800,
        category: 'pote',
        img: 'https://media.cdn.puntobiz.com.ar/102021/1635525946142.webp?cw=984&ch=553&extw=jpg',
        stock: 11,
        description: 'Kilo de helado'

    },
    {
        id:'2',
        name: 'medio kilo',
        price: 900,
        category: 'pote',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyy5bq4Y1ssihQfTsv6gfGxXSDndgcbvQs9ajR4DgxvumkY5h1HBXcFYxl1mBUzwdzZo&usqp=CAU',
        stock: 7,
        description: 'Medio Kilo de helado'

    },
    {
        id:'3',
        name: 'Cuarto Kilo',
        price: 600,
        category: 'pote',
        img: 'https://www.heladeriarampoldi.com.ar/wp-content/uploads/2020/09/rampoldi_productos_helado_1k_01.jpg',
        stock: 13,
        description: 'Cuarto Kilo de helado'

    }
    //postres
    ,
    {
        id:'4',
        name: 'Bombón suizo',
        price: 1000,
        category: 'postre',
        img: 'https://i.ytimg.com/vi/FR1QFAtKlIc/maxresdefault.jpg',
        stock: 13,
        description: 'es un postrecito copado'

    },
    {
        id:'5',
        name: 'Bombón escocés',
        price: 1000,
        category: 'postre',
        img: 'https://www.miohelados.com.ar/resources/original/imagenes/productos/b-escoces.png',
        stock: 13,
        description: 'el mejor postre que tenemos'

    }
] 



export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductByCategory = (category) => {
    return new Promise((response, reject) => {
        setTimeout(() => {
            response(products.filter(product => product.category === category))
        },1000)
    }

    )

}





















