import productDB from "@/database/products"
import {defineStore} from 'pinia'
import {computed, ComputedRef, Ref, ref} from "vue";
import {Product} from "@/Types.js";

export const useProductStore = defineStore('products', () => {
    const getProductById = (id: string) => products.value.find(product => product.id === id)

    const getSelectedCategory: ComputedRef<string> = computed(() => selectedCategory.value ? selectedCategory.value : "Alle produkter")



    /** PRODUCT HANDLER**/
    const products: Ref<Product[]> = ref([]);

    const loadAllProducts =  async () => {
        products.value = await productDB.getAllProducts();
    }

    const getAllProductInCategory: ComputedRef<Product[]> = computed(() => {
        if(selectedCategory.value === ''){
            return products.value
        }
        return products.value.filter((productItem) => {
            return productItem.category === selectedCategory.value
        })
    })

    /** CATEGORY HANDLER **/
    const selectedCategory: Ref<string> = ref('');

    const allCategories: ComputedRef<string[]> = computed(() => {
        const sortedCategories: Set<string> = new Set();
        products.value.forEach((product) => {
            sortedCategories.add(product.category)
        })
        return Array.from(sortedCategories)
    })

    const setCategory = (newCategory: string) => {
        selectedCategory.value = newCategory
    }

    const resetCategory = () => {
        selectedCategory.value = ''
    }

    return {products, loadAllProducts, allCategories, setCategory, resetCategory, getSelectedCategory, getAllProductInCategory}
})