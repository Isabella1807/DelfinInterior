import { deleteDoc, doc, addDoc, collection, getDocs,updateDoc} from "firebase/firestore";
import {myDB} from "./initFirebase";
import {Product} from "@/Types.js";

const productsCollection = "products";

/** ///////////// **/
/** SHOW PRODUCTS **/
/** ///////////// **/
const getAllProducts = async (): Promise<Product[]> => {
    const result: Product[] = [];

    await getDocs(collection(myDB, productsCollection))
        //.then & .catch tager ét paramter som er en callback funktion
        .then((allProducts) => {
            allProducts.forEach((product) => {
                //Super grim data, vi "spreader" product.data og tilføjer et id og gemmer så alle dokumenterne med et id igen i en ny liste.
                result.push({
                    ...product.data(),
                    id: product.id,
                } as Product);
            });
        }).catch(() => {
            console.log("getAllProducts fejlede");
        });

    return result;
}

/** //////////// **/
/** ADD PRODUCTS **/
/** //////////// **/
const addNewProduct = async ({title, priceDKK, description, weightKilo, category, mainImage, extraImages}: Product): Promise<Product['id'] | null> => {

    const result = await addDoc(collection(myDB, productsCollection), {
        title,
        priceDKK,
        description,
        weightKilo,
        category,
        mainImage,
        extraImages
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });

    if (!result){
        return null
    }

    return result.id;
}

/** ///////////// **/
/** EDIT PRODUCTS **/
/** ///////////// **/
const editProduct = async (productId: Product["id"], changedObject: Partial<Product>) => {
    await updateDoc(doc(myDB, productsCollection, productId), changedObject)
}

/** /////////////// **/
/** DELETE PRODUCTS **/
/** /////////////// **/
const deleteProduct = async (productId: Product["id"]) => {
    await deleteDoc(doc(myDB, productsCollection, productId))
}

export default {
    getAllProducts,
    addNewProduct,
    editProduct,
    deleteProduct,
}