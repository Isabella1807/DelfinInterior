import productDB from "@/database/products"
import router from "@/router/index"
import {defineStore} from 'pinia'
import {computed, ComputedRef, Ref, ref} from "vue";
import {Product} from "@/Types.js";

export const useProductStore = defineStore('products', () => {

    /** PRODUCT HANDLER**/
    const products: Ref<Product[]> = ref([]);

    const getProductById = (id: Product['id']): Product | undefined =>
        products.value.find(product => product.id === id)


    const loadAllProducts = async () => {
        products.value = await productDB.getAllProducts();
    }

    const getAllProductInCategory: ComputedRef<Product[]> = computed(() => {
        if (selectedCategory.value === '') {
            return products.value
        }
        return products.value.filter((productItem) => {
            return productItem.category === selectedCategory.value
        })
    })

    /**SAVE PRODUCT HANDLER**/
    const saveProduct = async (newProductInfo: Product) => {
        if (newProductInfo.id === '') {
            await productDB.addNewProduct(newProductInfo).then((newId: Product["id"] | null) => {
                if (!newId) return

                products.value.push({
                    ...newProductInfo,
                    id: newId
                })
                cancelEditingProduct()
            })
        } else {
            await productDB.editProduct(
                newProductInfo.id,
                newProductInfo
            ).then(() => {
                const indexOfUpdatedProduct = products.value.findIndex((product) => product.id === newProductInfo.id)
                if (indexOfUpdatedProduct >= 0) {
                    products.value[indexOfUpdatedProduct] = {...newProductInfo, id: newProductInfo.id}
                }
                cancelEditingProduct()
            })
        }
    }

    /**DELETE PRODUCT HANDLER**/
    const deleteProduct = async (productIdToDelete: Product['id']) => {
        await productDB.deleteProduct(productIdToDelete)
        products.value = products.value.filter((productObject: Product) => productObject.id !== productIdToDelete)
        await router.push('/shop')
    }

    /**EDIT PRODUCT HANDLER**/
    const isEditingProduct: Ref<boolean> = ref(false);
    const editingProductId: Ref<null | Product['id']> = ref(null);

    const startEditingProduct = (productIdInEditing: Product['id'] | null) => {
        isEditingProduct.value = true
        editingProductId.value = productIdInEditing
    }

    const getEditingProduct: ComputedRef<Product | undefined> = computed(() => {
        return products.value.find((product: Product) => product.id === editingProductId.value)
    })

    const cancelEditingProduct = () => {
        isEditingProduct.value = false
        editingProductId.value = null
    }

    /** CATEGORY HANDLER **/
    const selectedCategory: Ref<string> = ref('');

    const getSelectedCategory: ComputedRef<string> = computed(() => selectedCategory.value ? selectedCategory.value : "Alle produkter")

    const allCategories: ComputedRef<Set<string>> = computed(() => {
        const sortedCategories: Set<string> = new Set();
        products.value.forEach((product) => {
            sortedCategories.add(product.category)
        })
        return sortedCategories
    })

    const setCategory = (newCategory: string) => {
        selectedCategory.value = newCategory
    }

    const resetCategory = () => {
        selectedCategory.value = ''
    }

    return {
        products,
        loadAllProducts,
        allCategories,
        setCategory,
        resetCategory,
        getSelectedCategory,
        getAllProductInCategory,
        getProductById,
        cancelEditingProduct,
        startEditingProduct,
        isEditingProduct,
        getEditingProduct,
        deleteProduct,
        saveProduct
    }
})