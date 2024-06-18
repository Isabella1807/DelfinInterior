<script setup>
import {ref} from 'vue';
import {useUserStore} from "@/store/modules/userStore";
import {useRouter} from 'vue-router'

const store = useUserStore();
const router = useRouter();
const adminName = ref('');
const adminPassword = ref('');
let errorInLogin = ref(false);

const loginAsAdmin = async () => {
  const success = store.login(adminName.value, adminPassword.value);

  if (success) {
    adminName.value = '';
    adminPassword.value = '';
    errorInLogin.value = false;
    await router.push('/');
  } else {
    errorInLogin.value = true;
  }
}
</script>

<template>
  <div>
    <div class="adminLoginContainer">
      <form class="adminLoginForm" v-on:submit.prevent="">
        <div>
          <label for="brugernavn">Brugernavn:</label>
          <input type="text" id="brugernavn" placeholder="Indtast brugernavn" v-model="adminName">
        </div>
        <div>
          <label for="kodeord">Kodeord:</label>
          <input type="password" id="kodeord" placeholder="Indtast kodeord" v-model="adminPassword">
          <div v-if="errorInLogin" class="errorContainer">
            <p>Brugernavn eller kodeord forkert</p>
          </div>
        </div>


        <div class="adminLoginButtonContainer">
          <button type="submit" @click="loginAsAdmin" class="adminLoginButton"> Log ind</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.errorContainer {
  color: red;
  margin: 10px 0;
}

.adminLoginContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
}

.adminLoginForm {
  display: grid;
  gap: 10%;
  width: 50%;
  height: 50%;
  margin: 5%;
  padding: 5%;
}

.adminLoginForm label {
  font-size: 25px;
}

.adminLoginForm input {
  border: solid grey 2px;
  width: 100%;
  font-size: 25px;
  padding: 5px;
}

.adminLoginButtonContainer button {
  border: solid grey 2px;
  font-size: 25px;
  padding: 10px 45px;
  background-color: white;
}

.adminLoginButton:hover {
  cursor: pointer;
  border: solid darkgray 2px;
  background-color: grey;
  color: white;

}
</style>