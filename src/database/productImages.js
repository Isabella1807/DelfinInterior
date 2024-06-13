import {ref} from 'vue';
import {getStorage, ref as storageRef, uploadBytes, getDownloadURL} from 'firebase/storage';
import {storage} from "./initFirebase.js";

console.log(storage)
export function useImageUpload() {
    const storage = getStorage();

    let file = ref({
        value: null
    });
    let imageUrl = ref('');

    const convertBytesToMB = (bytes) => {
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    };

    const handleFileUpload = async (event) => {
        file.value = event.target.files[0];
        // håndtere fil upload
        console.log('Selected file:', file.value.name, 'Size:', convertBytesToMB(file.value.size));

        await uploadProduct();
    };

    const uploadProduct = async () => {
        console.log('Uploading file:', file.value?.name, 'Size:', convertBytesToMB(file.value?.size));
        if (!file.value) {
            console.error("No file selected");
            return;
        }

        // Generere ID med tidsstempel
        const fileId = Date.now();

        // fil extension fra oprindeligt fil navn
        const fileExtension = file.value.name.split('.').pop();

        // konstruere nyt filnavn med genereret id og fil extension
        const newFileName = `${fileId}.${fileExtension}`;

        //uploader produktbillede med nyt filnavn
        const imageRef = storageRef(storage, `images/${newFileName}`);
        const uploadTask = uploadBytes(imageRef, file.value);
        console.log('Upload task object:', uploadTask);

        try {
            const snapshot = await uploadTask;
            const downloadURL = await getDownloadURL(snapshot.ref);
            console.log('File available at', downloadURL);

            // Opdater imageUrl med downloadURL
            imageUrl.value = downloadURL;
        } catch (error) {
            console.error('Error during upload:', error);
        }
    };


/*    const getImage = async () => {
        if (imageUrl.value) {
            // Brug imageUrl til at hente det uploadede billede
            const image = storageRef(storage, imageUrl.value);
            const downloadURL = await getDownloadURL(image);
            console.log('Downloaded image URL:', downloadURL);
        } else {
            console.error('No image URL available');
        }
    };*/
/*    const getFullImageUrl = newFileName => {
        return `https://firebasestorage.googleapis.com/v0/b/mortenschokolade.appspot.com/o/images%2F${newFileName}?alt=media&token=9e458b88-9ac5-49c3-8bfd-c4c49fb19cc0`
    };*/

    return {handleFileUpload, imageUrl}
}
