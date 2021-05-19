import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Maryam',
            email: 'fragilecoder@gmail.com',
            password: bcrypt.hashSync('salawudeen', 8),
            isAdmin: true,
        },
        {
            name: 'Oye',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('salawudeen', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
           
            name:'Medium Balloon Gift',
            category:'Balloon Gifts',
            image: '/images/product-3.png',
            price:'120',
            countInStock: 10,
            brand: 'balloon',
            rating: 4.5,
            numReviews: 10,
            description:'hih quality product',
        },
       {
          
            name:'Damol Balloon Gift',
            category:'Damol Gifts',
            image: '/images/product-3.png',
            price:'300',
            countInStock: 0,
            brand: 'balloon',
            rating: 5.0,
            numReviews: 50,
            description:'high qualiy product',
        },
        {
            
            name:'Oy Balloon Gift',
            category:'Oy Gifts',
            image: '/images/product-4.png',
            price:'300',
            countInStock: 20,
            brand: 'balloon',
            rating: 5.0,
            numReviews: 50,
            description:'igh quality product',
        },
        {
            
            name:'Small Balloon Gift',
            category:'Birthday Gifts',
            image: '/images/product-2.png',
            countInStock: 30,
            price:'80',
            brand: 'balloon',
            rating:3.5,
            numReviews: 12,
            description:'high qulity product',
        },
        {
            
            name:'Damola Balloon Gift',
            category:'Damola Gifts',
            image: '/images/product-3.png',
            price:'300',
            countInStock: 40,
            brand: 'balloon',
            rating: 5.0,
            numReviews: 50,
            description:'high qualiy product',
        },
        {
            
            name:'Oye Balloon Gift',
            category:'Oye Gifts',
            image: '/images/product-4.png',
            price:'300',
            countInStock: 10,
            brand: 'balloon',
            rating: 5.0,
            numReviews: 50,

            description:'high qality product',
        },
        {
            
            name:'Smal Balloon Gift',
            category:'Birthday Gifts',
            image: '/images/product-2.png',
            price:'80',
            countInStock: 0,
            brand: 'balloon',
            rating: 4.3,
            numReviews: 12,
            description:'high quality product',
        },
    ],
};

export default data;