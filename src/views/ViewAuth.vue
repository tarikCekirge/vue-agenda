<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': !register }"><a @click.prevent="register = false">Login</a></li>
        <li :class="{ 'is-active': register }"><a @click.prevent="register = true">Register</a></li>
      </ul>
    </div>
    <div class="card auth-form">
      <div class="card-content">
        <p class="title has-text-centered">{{ formTitle }}</p>
        <form @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">E-mail</label>
            <div class="control">
              <input v-model="credentials.email" class="input" type="email" placeholder="e.g Alex Smith" />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="credentials.password" class="input" type="password" placeholder="Password" />
            </div>
          </div>
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button class="button is-primary">{{ formTitle }}</button>
            </p>
          </div>
        </form>
        <template v-if="errorMessage">
          <div class="notification is-danger mt-4">
            <button @click="clearErrorMessage" class="delete"></button>
            {{ errorMessage }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useStoreAuth } from "@/stores/storeAuth";

/**
 * store
 */

const storeAuth = useStoreAuth();
/**Register */
const register = ref(false);

const formTitle = computed(() => {
  return register.value ? "Register" : "Login";
});

/**
 * Credentials
 */
const credentials = reactive({
  email: "",
  password: "",
});

/**
 * Submit
 */

const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert("Pleace enter an email and password");
  } else {
    if (register.value) {
      storeAuth.registerUser(credentials);
    } else {
      storeAuth.loginUser(credentials);
    }
  }
};
/**
 * Error Message
 */

const errorMessage = computed(() => storeAuth.errorMessage);

const clearErrorMessage = () => {
  storeAuth.errorMessage = null;
  credentials.email = "";
  credentials.password = "";
};
</script>

<style scoped>
.auth-form {
  max-width: 600px;
  margin: 0 auto;
}
</style>
