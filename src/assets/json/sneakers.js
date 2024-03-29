//Required Info
const categoryOption = ['Men','Women','Kids'];
const specialTags = [null, 'hotSale','Trending']
const sneakers = 
[
    {
        id: 1,
        specialTag: specialTags[1],
        brand: 'Jordan',
        title: 'AIR JORDAN 5 TRAINERS',
        styleCode: '4175135836',
        price: 125.99,
        colourOption: ['Blue','Red'],
        sizeOption: [7,8,8.5,9,9.5],
        category : categoryOption[0],
        stock: '',
        popularity: 10,
        image : ['https://cdn.media.amplience.net/i/office/4175135836_sd1.jpg?$highres$&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4175135836_dt1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4175135836_bk1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4175135836_bv1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4175135836_pr1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg'],
    },
    {
        id: 2,
        specialTag: specialTags[0],
        brand: 'Adidas Y-3',
        title: 'Y-3 Runner 4D Halo',
        styleCode: '4552309835',
        price: 230.00,
        colourOption: ['Black','Blue'],
        sizeOption: [7,8,8.5,9],
        category : categoryOption[0],
        stock: '',
        popularity: 6,
        image : ['https://cdn.media.amplience.net/i/office/4552309835_sd1.jpg?$highres$&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4552309835_dt1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4552309835_bk1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4552309835_bv1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4552309835_pr1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg'],
    },
    // Additional cards (remove in future)
    {
        id: 3,
        specialTag: specialTags[0],
        brand: 'Nike',
        title: 'ACG MOUNTAIN FLY 2 LOW',
        styleCode: '4915525390',
        price: 165.00,
        colourOption: ['White'],
        sizeOption: [7,8,8.5,9.5],
        category : categoryOption[0],
        stock: '',
        popularity: 5,
        image : ['https://cdn.media.amplience.net/i/office/4915525390_sd1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4915525390_dt1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4915525390_bk1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4915525390_bv1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4915525390_pr1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg'],
    },
    {
        id: 4,
        specialTag: specialTags[0],
        brand: 'Nike',
        title: 'AIR MAX 90 GORE-TEX',
        styleCode: '4552309835',
        price: 230.00,
        colourOption: ['Summit White Cool'],
        sizeOption: [7,8,9.5],
        category : categoryOption[0],
        stock: '',
        popularity: 1,
        image : ['https://cdn.media.amplience.net/i/office/4143117983_sd1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4143117983_dt1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4143117983_bk1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4143117983_bv1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4143117983_pr1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg'],
    },
    {
        id: 5,
        specialTag: specialTags[0],
        brand: 'SALOMON',
        title: 'XT-6 TRAINERS',
        styleCode: '4909409977',
        price: 160.00,
        colourOption: ['Brown'],
        sizeOption: [7,8],
        category : categoryOption[0],
        stock: '',
        popularity: 12,
        image : ['https://cdn.media.amplience.net/i/office/4909409977_sd1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4909409977_dt1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4909409977_bk1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4909409977_bv1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4909409977_pr1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg'],
    },
     {
        id: 6,
        specialTag: specialTags[0],
        brand: 'New Balance',
        title: 'WRPD Runner Trainers',
        styleCode: '5037825282',
        price: 155.00,
        colourOption: ['Grey'],
        sizeOption: [3,4,5,6,7,8],
        category : categoryOption[0,1],
        stock: '',
        popularity: 15,
        image : ['https://cdn.media.amplience.net/i/office/5037825282_sd1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5037825282_dt1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5037825282_bk1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5037825282_bv1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5037825282_pr1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg'],
    },
    {
        id: 7,
        specialTag: specialTags[0],
        brand: 'Converse',
        title: 'CT70 Deluxe Squared Trainers',
        styleCode: '5087706698',
        price: 110.00,
        colourOption: ['Black'],
        sizeOption: [4,5,6,7,8],
        category : categoryOption[1],
        stock: '',
        popularity: 15,
        image : ['https://cdn.media.amplience.net/i/office/5087706698_sd1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5087706698_dt1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5087706698_bk1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5087706698_bv1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5087706698_pr1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg'],
    },
    {
        id: 8,
        specialTag: specialTags[0],
        brand: 'Adidas',
        title: 'Gazelle Bold WTrainers',
        styleCode: '4870204440',
        price: 89.99,
        colourOption: ['Peach'],
        sizeOption: [4,5,6,7,8],
        category : categoryOption[1],
        stock: '',
        popularity: 8,
        image : ['https://cdn.media.amplience.net/i/office/4870204440_sd1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4870204440_dt1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4870204440_bk1.jpg?$highres$&w=1068&h=934&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4870204440_bv1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4870204440_pr1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg'],
    },
    {
        id: 9,
        specialTag: specialTags[0],
        brand: 'Adidas',
        title: 'Stella MCCartney',
        styleCode: '5142681168',
        price: 280.00,
        colourOption: ['Magic Mauve'],
        sizeOption: [4,5,6,7,],
        category : categoryOption[1],
        stock: '',
        popularity: 5,
        image : ['https://cdn.media.amplience.net/i/office/5142681168_sd1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5142681168_dt1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5142681168_bk1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5142681168_bv1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5142681168_pr1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg'],
    },
    {
        id: 10,
        specialTag: specialTags[0],
        brand: 'Veja',
        title: 'V12',
        styleCode: '5142681168',
        price: 150.00,
        colourOption: ['Extra White'],
        sizeOption: [4,5,6,7,],
        category : categoryOption[0,1],
        stock: '',
        popularity: 35,
        image : ['https://cdn.media.amplience.net/i/office/3521518058_sd1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/3521518058_dt1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/3521518058_bk1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/3521518058_bv1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/3521518058_pr1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg'],
    },
    {
        id: 11,
        specialTag: specialTags[0],
        brand: 'Converse',
        title: 'Chuck 70 Deluxe Wedge',
        styleCode: '5087809578',
        price: 115.00,
        colourOption: ['Extra White'],
        sizeOption: [4,5,6,7,],
        category : categoryOption[1],
        stock: '',
        popularity: 15,
        image : ['https://cdn.media.amplience.net/i/office/5087809578_sd1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5087809578_dt1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5087809578_bk1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5087809578_bv1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/5087809578_pr1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg'],
    },
    {
        id: 12,
        specialTag: specialTags[0],
        brand: 'On Running',
        title: 'Cloudstratus Trainers',
        styleCode: '4558817296',
        price: 170.00,
        colourOption: ['Undyed White Sand'],
        sizeOption: [4,5,6,7,],
        category : categoryOption[0,1],
        stock: '',
        popularity: 15,
        image : ['https://cdn.media.amplience.net/i/office/4558817296_sd1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4558817296_dt1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4558817296_bk1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4558817296_bv1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4558817296_pr1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg.'],
    },
    {
        id: 13,
        specialTag: specialTags[0],
        brand: 'Jordan',
        title: 'Jordan 3 GS Trainers',
        styleCode: '3878217969',
        price: 115.00,
        colourOption: ['White Midnight Navy'],
        sizeOption: [4,5,6,7,],
        category : categoryOption[0,1],
        stock: '',
        popularity: 23,
        image : ['https://cdn.media.amplience.net/i/office/3878217969_sd1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/3878217969_dt1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/3878217969_bk1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/3878217969_bv1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/3878217969_pr1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg'],
    },
    {
        id: 14,
        specialTag: specialTags[0],
        brand: 'Nike',
        title: 'Dunk Low Trainers',
        styleCode: '2002397232',
        price: 110.00,
        colourOption: ['Bronzine Coconut Milk Playdul Pink Alabaster'],
        sizeOption: [4,5,6,7,],
        category : categoryOption[1],
        stock: '',
        popularity: 14,
        image : ['https://cdn.media.amplience.net/i/office/2002397232_sd1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/2002397232_dt1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/2002397232_bk1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/2002397232_bv1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/2002397232_pr1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg'],
    },
    {
        id: 15,
        specialTag: specialTags[0],
        brand: 'Rick Owens',
        title: 'Turbowpn Trainers',
        styleCode: '4458285545',
        price: 190.00,
        colourOption: ['Grey'],
        sizeOption: [4,5,6,7,],
        category : categoryOption[0],
        stock: '',
        popularity: 12,
        image : ['https://cdn.media.amplience.net/i/office/4458285545_sd1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4458285545_dt1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4458285545_bk1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4458285545_bv1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg',
        'https://cdn.media.amplience.net/i/office/4458285545_pr1.jpg?$highres$&w=800&h=710&fmt=auto&qlt=default&fmt.jpeg'],
    },


]
const sneakersJSON = JSON.stringify(sneakers, null, 2);
export default sneakers;