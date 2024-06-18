import {defineStore} from "pinia";
import {Ref, ref} from "vue";

const adminLogin = {
    username: "admin",
    password: "qwe"
}

export const useUserStore = defineStore('users', () => {
    const isAdmin: Ref<boolean> = ref(false);

    const login = (username: string, password: string): boolean => {
        if (adminLogin.username === username && adminLogin.password === password) {
            isAdmin.value = true;
            return true;
        }
        return false;
    }

    const logout = () => {
        isAdmin.value = false;
    }

    return {isAdmin, login, logout}
})
