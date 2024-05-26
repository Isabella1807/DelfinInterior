import productDB from "@/database/products.js"

const state = () => ({
    products: [],
    selectedCategory: '',
    isEditingProduct: false,
    editingProductId: null,
})

const getters = {
    getProductById: (state) => (id) => {
        return state.products.find(product => product.id === id)
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
    getAllProductsInCategory: (state) => {
        if (state.selectedCategory === '') {
            return state.products
        }

        return state.products.filter((product) => {
            return product.category === state.selectedCategory
        })
    },
    getSelectedCategory: (state) => {
        return state.selectedCategory ? state.selectedCategory : "Alle produkter"
    },
    getIsEditingProduct: (state) => {
        return state.isEditingProduct
    },
    getEditingProduct: (state) => {
        return state.products.find(product => product.id === state.editingProductId)
    }
}

const actions = {
    async loadAllProducts({state, commit}) {
        console.log("all my products from actions")
        const abe = await productDB.getAllProducts()
        console.log(abe)
        commit('setProducts', abe)
    },
    setCategory({state, commit}, category) {
        commit('overwriteCategory', category)
    },
    resetCategory({commit}) {
        commit('overwriteCategory', '')
    },
    async saveProduct({state, commit, dispatch}, newProductInfo) {
        console.log('fra store ACTION saveproduct', newProductInfo)

        if (newProductInfo.id === null) {
            await productDB.addNewProduct({
                title: newProductInfo.title,
                priceDKK: newProductInfo.priceDKK,
                description: newProductInfo.description,
                material: newProductInfo.material,
                weightKilo: newProductInfo.weightKilo,
                category: newProductInfo.category,
                mainImage: newProductInfo.mainImage,
                extraImages: newProductInfo.extraImages
            }).then(() => {
                dispatch('cancelEditingProduct')
            })
        } else {
            await productDB.editProduct(
                newProductInfo.id,
                newProductInfo
            )
            dispatch('cancelEditingProduct')
        }
    },
    deleteProduct({state, commit}, productIdToDelete) {
        console.log("fra store deleteproduct", productIdToDelete)
    },
    startEditingProduct({state, commit}, productIdInEditing) {
        commit('setEditingState', true)
        commit('setEditingId', productIdInEditing)
    },
    cancelEditingProduct({state, commit}) {
        commit('setEditingState', false)
        commit('setEditingId', null)
    }
}

const mutations = {
    setCounter(state, newValue) {
        state.count = newValue;
    },
    overwriteCategory(state, newCategory) {
        state.selectedCategory = newCategory
    },
    setEditingState(state, newIsEditingState) {
        state.isEditingProduct = newIsEditingState

    },
    setEditingId(state, productIdInEditing) {
        state.editingProductId = productIdInEditing
    },
    setProducts(state, productArray) {
        state.products = productArray
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}