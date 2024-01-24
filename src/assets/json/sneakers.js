//Required Info
const categoryOption = ['Men','Women','Kids'];
const specialTags = [null, 'hotSale','Trending']
const sneakers = 
[
    {
        specialTag: specialTags[1],
        brand: 'Jordan',
        title: 'AIR JORDAN 5 TRAINERS',
        image : 'https://cdn.media.amplience.net/i/office/4175135836_sd1.jpg?$highres$&fmt=auto&qlt=default&fmt.jpeg',
        styleCode: '4175135836',
        price: 125.99,
        sizeOption: ['Green','Blue','Red'],
        colourOption: [41,42,43],
        category : categoryOption[0],
        stock: ''
    },
    {
        specialTag: specialTags[0],
        brand: 'Adidas Y-3',
        title: 'Y-3 Runner 4D Halo',
        image : 'https://cdn.media.amplience.net/i/office/4552309835_sd1.jpg?$highres$&fmt=auto&qlt=default&fmt.jpeg',
        styleCode: '4552309835',
        price: 230.00,
        sizeOption: ['Green','Blue','Red'],
        colourOption: [41,42,43],
        category : categoryOption[0],
        stock: ''
    }
]

export default sneakers;