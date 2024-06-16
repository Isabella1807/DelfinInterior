import {ref} from 'vue';
import {getStorage, ref as storageRef, uploadBytes, getDownloadURL} from 'firebase/storage';
import {storage} from "./initFirebase.js";

export function useImageUpload() {
    const storage = getStorage();

    const file = ref(null);
    const imageUrl = ref('');

    const handleFileUpload = async (event) => {
        // Håndtere fil upload
        file.value = event.target.files[0];

        await uploadProduct();
    };

    const uploadProduct = async () => {
        if (!file.value) {
            console.error("No file selected");
            return;
        }

        // Bruges til at lave et id med unix tal/tid
        const timestamp = Date.now();

        // Fil extension fra oprindeligt fil navn
        const fileExtension = file.value.name.split('.').pop();

        // Nyt filnavn med nyt id og fil extension, for at undgå filnavne med samme navn
        const newFileName = `${timestamp}.${fileExtension}`;

        // Upload produktbillede med nyt filnavn
        const imageRef = storageRef(storage, `images/${newFileName}`);

        try {
            const snapshot = await uploadBytes(imageRef, file.value);

            // Opdater imageUrl med url fra det valgte billede fra storage
            imageUrl.value = await getDownloadURL(snapshot.ref);
        } catch (error) {
            console.error('Error during upload:', error);
        }
    };

    return {handleFileUpload, imageUrl}
}
