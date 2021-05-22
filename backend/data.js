import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Maryam',
            email: 'fragilecoder@gmail.com',
            password: bcrypt.hashSync('salawudeen', 8),
            isAdmin: true,
            isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
        },
    },
        {
            name: 'Oye',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('salawudeen', 8),
            isAdmin: false,
        },
    ],
    products: [
    ]
};

export default data;