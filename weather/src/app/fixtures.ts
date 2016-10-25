export default {
  types: [
    { key: 'hotels', label: 'Hotels' },
    { key: 'fishing', label: 'Fishing' },
    { key: 'travels', label: 'Travels' }
  ],
  store: {
    hotels: [
      {
        id: 11,
        title: 'Hotel Nikko',
        phone: '+1285 968 685',
        stats: { following: 3244, followers: 3211 },
        temp: { air: 5, water: 14 },
        img: {
          lg: '/assets/images/leonardo-lg.jpg',
          md: '/assets/images/leonardo-md.jpg',
          sm: [
            '/assets/images/leonardo-sm.jpg',
            '/assets/images/leonardo-sm2.jpg'
          ]
        }
      },
      {
        id: 12,
        title: 'Hampshire Hotel',
        phone: '+2115 134 987',
        stats: { following: 1124, followers: 5111 },
        temp: { air: 15, water: 24 },
        img: {
          lg: '/assets/images/hampshire-lg.jpg',
          md: '/assets/images/hampshire-md.jpg',
          sm: [
            '/assets/images/hampshire-sm.jpg',
            '/assets/images/hampshire-sm2.jpg'
          ]
        }
      },
      {
        id: 13,
        title: 'Hotel Okura',
        phone: '+3448 234 992',
        stats: { following: 1244, followers: 1221 },
        temp: { air: 1, water: 4 },
        img: {
          lg: '/assets/images/okura-lg.jpg',
          md: '/assets/images/okura-md.jpg',
          sm: [
            '/assets/images/okura-sm.jpg',
            '/assets/images/okura-sm2.jpg'
          ]
        }
      }
    ],
    fishing: [
      {
        id: 21,
        title: 'Kaikoura Fishing Tour',
        phone: '+5532 988 222',
        stats: { following: 1442, followers: 1211 },
        temp: { air: 11, water: 22 },
        img: {
          lg: '/assets/images/kaikokura-lg.jpg',
          md: '/assets/images/kaikokura-md.jpg',
          sm: [
            '/assets/images/kaikokura-sm.jpg',
            '/assets/images/kaikokura-sm2.jpg'
          ]
        }
      },
      {
        id: 22,
        title: 'Irish Fishing Tour',
        phone: '+2344 879 999',
        stats: { following: 3341, followers: 1232 },
        temp: { air: 18, water: 7 },
        img: {
          lg: '/assets/images/irish-fishing-lg.jpg',
          md: '/assets/images/irish-fishing-md.png',
          sm: [
            '/assets/images/irish-fishing-sm.jpg',
            '/assets/images/irish-fishing-sm2.png'
          ]
        }
      },
      {
        id: 23,
        title: 'Scott Martin Fishing Tour',
        phone: '+1233 442 221',
        stats: { following: 1341, followers: 5232 },
        temp: { air: 12, water: 17 },
        img: {
          lg: '/assets/images/scott-martin-lg.png',
          md: '/assets/images/scott-martin-md.png',
          sm: [
            '/assets/images/scott-martin-sm.png',
            '/assets/images/scott-martin-sm2.png'
          ]
        }
      }
    ],
    travels: [
      {
        id: 31,
        title: 'Tanzania Travel Tour',
        phone: '+1223 442 222',
        stats: { following: 3141, followers: 8232 },
        temp: { air: 22, water: 17 },
        img: {
          lg: '/assets/images/Tanzania-tour-lg.jpg',
          md: '/assets/images/Tanzania-tour-md.jpg',
          sm: [
            '/assets/images/Tanzania-tour-sm.jpg',
            '/assets/images/Tanzania-tour-sm2.jpg'
          ]
        }
      },
      {
        id: 32,
        title: 'Egypt Travel Tour',
        phone: '+1222 444 222',
        stats: { following: 1141, followers: 2442 },
        temp: { air: 28, water: 5 },
        img: {
          lg: '/assets/images/egypt-lg.jpg',
          md: '/assets/images/egypt-md.jpg',
          sm: [
            '/assets/images/egypt-sm.jpg',
            '/assets/images/egypt-sm2.jpg'
          ]
        }
      },
      {
        id: 33,
        title: 'Tanzania Travel Tour',
        phone: '+2242 221 123',
        stats: { following: 2341, followers: 8232 },
        temp: { air: 28, water: 17 },
        img: {
          lg: '/assets/images/Morocco-lg.jpg',
          md: '/assets/images/Morocco-md.jpg',
          sm: [
            '/assets/images/Morocco-sm.jpg',
            '/assets/images/Morocco-sm2.jpg'
          ]
        }
      }
    ]
  }
};
