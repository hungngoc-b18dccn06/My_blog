<template>
  <div class="reset-password">
    <Modal v-if="modalActive" :modalMessage="modalMessage" @close-modal="closeModal" /> 
    <!-- emit tại component con để gửi tín hiệu đến component cha -->
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
         <router-link class="header" :to="{ name: 'home' }"
          ><img src="../assets/logo2.png"
        /></router-link>
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'login' }">Login</router-link>
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your passowrd?Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <email class="icon" />
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>


<script>
import email from "../assets/Icons/envelope-regular.svg";
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";
import firebase from "firebase/compat/app";
import "firebase/auth";
export default {
  name: "forgot-password",
  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },
  components: {
    email,
    Modal,
    Loading,
  },
  methods: {
    resetPassword(){
      this.loading = true;
      firebase.auth().sendPasswordResetEmail(this.email).then(() => {
        this.modalMessage = "If your acount exists , Please check your email !";
        this.loading = false;
        this.modalActive = true;
      }).catch((err) =>{
        this.modalMessage = err.message;
        this.modalActive = true;
        this.loading = false;
      })
    },
    closeModal(){
        this.modalActive = !this.modalActive;
        this.email = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
