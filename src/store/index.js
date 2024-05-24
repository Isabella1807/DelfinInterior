import { createStore } from 'vuex'
import products from "./modules/products.js";
import user from "./modules/user.js";

export default createStore({
    modules: {
        products,
        user
    }
})