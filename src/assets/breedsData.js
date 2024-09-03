// src/assets/breedsData.js
export default {
    'Toy Poodle': {
        images: [
            require('@/assets/toypoodle1.jpg'),
            require('@/assets/toypoodle4.jpg'),
            require('@/assets/toypoodle18.jpg'),
            require('@/assets/toypoodle3.jpg'),
            require('@/assets/toypoodle11.jpg'),
            require('@/assets/toypoodleadult2.jpg'),
            require('@/assets/toypoodleadult3.jpg'),
            require('@/assets/toypoodleadult4.jpg')
        ],
        description: 'The Toy Poodle is an elegant and lively companion with a hypoallergenic coat.',
        price: 'starts from 5,000,000 IDR',
        colors: [
            { name: 'Red', class: 'red', ellipseClass: 'ellipse-6' },
            { name: 'Brown', class: 'brown', ellipseClass: 'ellipse-5' },
            { name: 'Apricot', class: 'apricot', ellipseClass: 'ellipse-4' },
            { name: 'Black', class: 'black', ellipseClass: 'ellipse-3' },
            { name: 'Silver', class: 'silver', ellipseClass: 'ellipse-2' },
            { name: 'White', class: 'white', ellipseClass: 'ellipse' },
        ]
    },
    'Schnauzer': {
        images: [
            require('@/assets/schnauzer1.jpg'),
            require('@/assets/schnauzer3.jpg'),
            require('@/assets/schnauzer8.jpg'),
            require('@/assets/schnauzer5.jpg'),
            require('@/assets/schnauzeradult2.jpg'),
            require('@/assets/schnauzeradult5.jpg'),
        ],
        description: 'The Schnauzer is a robust and fearless dog with a charming personality.',
        price: 'starts from 6,000,000 IDR',
        colors: [
            { name: 'Salt & Pepper', class: 'salt-pepper', ellipseClass: 'ellipse-10' },
            { name: 'Black', class: 'black', ellipseClass: 'ellipse-3' },
            { name: 'White', class: 'white', ellipseClass: 'ellipse' }
        ]
    },
    'Yorkshire': {
        images: [
            require('@/assets/yorkie1.jpg'),
            require('@/assets/yorkie2.jpg'),
            require('@/assets/yorkie4.jpg'),
            require('@/assets/yorkie5.jpg'),
            require('@/assets/yorkie6.jpg'),
        ],
        description: 'The Yorkshire Terrier is a small but brave dog with a silky coat and big personality.',
        price: 'starts from 7,000,000 IDR',
        colors: [
            // { name: 'Blue & Tan', class: 'blue-tan', ellipseClass: 'ellipse-7' },
            { name: 'Black & Tan', class: 'black-tan', ellipseClass: 'ellipse-8' },
            // { name: 'Steel Blue', class: 'steel-blue', ellipseClass: 'ellipse-9' }
        ]
    }
};
