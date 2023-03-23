const products = [
    { 
        id: '1', 
        name: 'Smart TV Hitachi', 
        price: 52000, 
        category: 'Televisores', 
        img:'https://www.megatone.net/Images/Articulos/zoom2x/251/TEL3222HIT.jpg', 
        stock: 15, 
        description:'Descripción 1'
    },
    
    {
        id: '2',
        name: 'Parlante Bluetooth Philips',
        price: 37000,
        category: 'Audio',
        img:'https://www.megatone.net/Images/Articulos/zoom2x/259/MCA2206PHI.jpg',
        stock: 22,
        description:'Descripción 2'
    },
    
    {
        id: '3',
        name: 'Cámara Digital Canon Rebel T7',
        price: 252000,
        category: 'Cámaras',
        img:'https://lafiammaitalian.com/wp-content/uploads/2023/03/La-Fiamma-Chef-Specials-Mar17-scaled.jpg',
        stock: 8,
        description:'Descripción 3'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.id === productId))
        }, 1500)
    })
}