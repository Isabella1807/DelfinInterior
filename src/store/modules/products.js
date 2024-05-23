const state = () => ({
    count: 0,
    products: [
        {
            id: 1,
            category: 'lænesstol',
            title: 'Bamsestol',
            description: 'Jeg er hammer dyr!',
            price_dkk: 41800,
            images: {
                main: 'https://source.unsplash.com/random/200x200?sig=4',
                extra: [
                    'http://gogleimages/bamsestol2.jpg',
                    'http://gogleimages/bamsestol3.jpg'
                ],
            },
            weight_kilo: 28,
        },
        {
            id: 2,
            category: 'lænesstol',
            title: 'højstol',
            description: 'shit en dyr stol',
            price_dkk: 120000,
            images: {
                main: 'https://source.unsplash.com/random/200x200?sig=2',
                extra: [
                    'http://gogleimages/bamsestol2.jpg',
                    'http://gogleimages/bamsestol3.jpg'
                ],
            },
            weight_kilo: 31,
        },
        {
            id: 3,
            category: 'lænesstol',
            title: 'fuglestol',
            description: 'Jeg er ikk lavet af fugle',
            price_dkk: 10,
            images: {
                main: 'https://source.unsplash.com/random/200x200?sig=1',
                extra: [
                    'http://gogleimages/bamsestol2.jpg',
                    'http://gogleimages/bamsestol3.jpg'
                ],
            },
            weight_kilo: 10,
        },
        {
            id: 4,
            category: 'lænesstol',
            title: 'womp womp stolen',
            description: 'goes womp womp',
            price_dkk: 99999,
            images: {
                main: 'https://source.unsplash.com/random/200x200?sig=3',
                extra: [
                    'http://gogleimages/bamsestol2.jpg',
                    'http://gogleimages/bamsestol3.jpg'
                ],
            },
            weight_kilo: 99,
        },
        {
            id: 4,
            category: 'spisestol',
            title: 'syverstol',
            description: 'Jeg er bare en super fancy stol man glider ned af',
            price_dkk: 7000,
            images: {
                main: 'https://source.unsplash.com/random/200x200?sig=6',
                extra: [
                    'http://gogleimages/bamsestol2.jpg',
                    'http://gogleimages/bamsestol3.jpg'
                ],
            },
            weight_kilo: 7,
        },
        {
            id: 5,
            category: 'spisestol',
            title: 'endnu en spisestol',
            description: 'alt for dyr',
            price_dkk: 41800,
            images: {
                main: 'https://source.unsplash.com/random/200x200?sig=7',
                extra: [
                    'http://gogleimages/bamsestol2.jpg',
                    'http://gogleimages/bamsestol3.jpg'
                ],
            },
            weight_kilo: 28,
        },
        {
            id: 6,
            category: 'spisestol',
            title: 'den lille stol',
            description: 'Jeg er ikke særlig lille faktisk',
            price_dkk: 65000,
            images: {
                main: 'https://source.unsplash.com/random/200x200?sig=8',
                extra: [
                    'http://gogleimages/bamsestol2.jpg',
                    'http://gogleimages/bamsestol3.jpg'
                ],
            },
            weight_kilo: 120,
        },
        {
            id: 8,
            category: 'Borde',
            title: 'omvendt bord',
            description: 'Jeg er omvendt bordet woop woop',
            price_dkk: 80085,
            images: {
                main: 'https://source.unsplash.com/random/200x200?sig=13',
                extra: [
                    'http://gogleimages/bamsestol2.jpg',
                    'http://gogleimages/bamsestol3.jpg'
                ],
            },
            weight_kilo: 80,
        },
        {
            id: 9,
            category: 'Borde',
            title: 'jeg er et bord jeg er et bord',
            description: 'Jeg er super meget et bord ok',
            price_dkk: 1234,
            images: {
                main: 'https://source.unsplash.com/random/200x200?sig=9',
                extra: [
                    'http://gogleimages/bamsestol2.jpg',
                    'http://gogleimages/bamsestol3.jpg'
                ],
            },
            weight_kilo: 5000,
        },
        {
            id: 10,
            category: 'Borde',
            title: 'kaffebord',
            description: 'kaffebordet der ikke må drikkes kaffe på',
            price_dkk: 100,
            images: {
                main: 'https://source.unsplash.com/random/200x200?sig=10',
                extra: [
                    'http://gogleimages/bamsestol2.jpg',
                    'http://gogleimages/bamsestol3.jpg'
                ],
            },
            weight_kilo: 12,
        },
        {
            id: 11,
            category: 'Lamper',
            title: 'den der store lampe fra alle for to som de prøver at stjæle',
            description: 'der er noget med den er populær',
            price_dkk: 60000,
            images: {
                main: 'https://source.unsplash.com/random/200x200?sig=11',
                extra: [
                    'http://gogleimages/bamsestol2.jpg',
                    'http://gogleimages/bamsestol3.jpg'
                ],
            },
            weight_kilo: 40,
        },
        {
            id: 12,
            category: 'Lamper',
            title: 'ph lampe',
            description: 'whatever ph lampe du lige kunne ønske dig, den skaffer vi bare',
            price_dkk: 10000,
            images: {
                main: 'https://source.unsplash.com/random/200x200?sig=12',
                extra: [
                    'http://gogleimages/bamsestol2.jpg',
                    'http://gogleimages/bamsestol3.jpg'
                ],
            },
            weight_kilo: 5,
        },

    ]
})

const getters = {
    getProductById: (state) => {
        return state.products.id
    },
    getAllProducts: (state) => {
        return state.products
    },
    getAllCategories: (state) => {
        const sortedCategories = new Set();
        state.products.forEach((product) => {
            sortedCategories.add(product.category)
        })
        return sortedCategories
    },
}

const
actions = {
    incrementCounter({state, commit, dispatch}) {
        commit('setCounter', state.count + 1)
    }
}

const mutations = {
    setCounter(state, newValue) {
        state.count = newValue;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}