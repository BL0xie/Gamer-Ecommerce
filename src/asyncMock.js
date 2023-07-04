const products = [
    {   id:'1',
        nombre:"Xbox",
        price:1000,
        category:'console',
        img:'https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png',
        stock:10,
        description:'Xbox series X'
    },
        { id:'2',
        nombre:"Xbox controller",
        price:50,
        category:'accesories',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Microsoft-Xbox-One-controller.jpg/220px-Microsoft-Xbox-One-controller.jpg',
        stock:10,
        description:'Xbox series X controller'
        },
        { id:'3',
        nombre:"Halo",
        price:50,
        category:'games',
        img:'https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Halo_Infinite.png/220px-Halo_Infinite.png',
        stock:10,
        description:'Halo infinite'
        }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    }) 
}

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod =>prod.category === productCategory))
        },500)
    })
}