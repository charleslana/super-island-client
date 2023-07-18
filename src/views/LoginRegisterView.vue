<template>
  <div>
    <LoadingAssetsComponent>
      <template #default="{ isLoading }">
        <LoadingOverlayComponent v-if="isLoading" />
        <div v-else>
          <div class="bg-home" :style="bgHomeStyle" @click="showLoginModal = true">
            <div class="is-flex is-align-items-center is-justify-content-center w-100 h-100">
              <div
                class="shadow is-size-2 is-size-4-mobile is-size-1-fullhd animate__animated animate__flash animate__slower animate__infinite"
              >
                Toque para começar!
              </div>
              <img :src="logo" class="logo" alt="Logo" />
            </div>
            <footer class="footer">
              <div class="content has-text-centered">
                <div>
                  &copy; {{ new Date().getFullYear() }} Super Island
                  <span class="version">{{ version }}</span>
                </div>
              </div>
            </footer>
          </div>
          <div class="modal" :class="{ 'is-active': showLoginModal }">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title"></p>
                <button
                  class="delete is-large"
                  aria-label="close"
                  @click="showLoginModal = false"
                ></button>
              </header>
              <section class="modal-card-body">
                <form @submit.prevent="login">
                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input class="input" type="email" placeholder="E-mail" v-model="loginEmail" />
                      <span class="icon is-small is-left">
                        <font-awesome-icon :icon="['fas', 'at']" />
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control has-icons-left">
                      <input
                        class="input"
                        type="password"
                        placeholder="Senha"
                        v-model="loginPassword"
                      />
                      <span class="icon is-small is-left">
                        <font-awesome-icon :icon="['fas', 'lock']" />
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <button class="button is-fullwidth is-info">Login</button>
                  </div>
                  <div class="field">
                    <button class="button is-fullwidth is-success" @click.prevent="toggleModal">
                      Criar uma conta
                    </button>
                  </div>
                </form>
                <div class="level mt-3">
                  <div class="level-left">
                    <a>Esqueceu a senha?</a>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="modal" :class="{ 'is-active': showRegisterModal }">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title"></p>
                <button
                  class="delete is-large"
                  aria-label="close"
                  @click="showRegisterModal = false"
                ></button>
              </header>
              <section class="modal-card-body">
                <form @submit.prevent="register">
                  <div class="field">
                    <p class="control has-icons-left has-icons-right">
                      <input class="input" type="email" placeholder="E-mail" required />
                      <span class="icon is-small is-left">
                        <font-awesome-icon :icon="['fas', 'at']" />
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control has-icons-left">
                      <input class="input" type="password" placeholder="Senha" required />
                      <span class="icon is-small is-left">
                        <font-awesome-icon :icon="['fas', 'lock']" />
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control has-icons-left">
                      <input class="input" type="password" placeholder="Repita a Senha" required />
                      <span class="icon is-small is-left">
                        <font-awesome-icon :icon="['fas', 'lock']" />
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <button class="button is-fullwidth is-success">Jogar</button>
                  </div>
                </form>
                <div class="has-text-centered mt-3">
                  Tocando em Jogar, você concorda com nosso <a>Tos</a>
                </div>
                <div class="level mt-3">
                  <div class="level-left">
                    <a @click="toggleModal">Fazer login?</a>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <LoadingOverlayComponent v-if="loading" />
        </div>
      </template>
    </LoadingAssetsComponent>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import LoadingAssetsComponent from '@/components/LoadingAssetsComponent.vue';
import LoadingOverlayComponent from '@/components/LoadingOverlayComponent.vue';
import { bgHome, logo } from '@/data/imageData';
import { version } from '@/config/config';
import { showToast } from '@/utils/utils';
import ToastEnum from '@/enum/ToastEnum';
import router from '@/router';

const showLoginModal = ref(false);

const showRegisterModal = ref(false);

const bgHomeStyle = computed(() => {
  return {
    backgroundImage: `url(${bgHome})`
  };
});

const loading = ref(false);

const loginEmail = ref('');

const loginPassword = ref('');

function toggleModal() {
  showLoginModal.value = !showLoginModal.value;
  showRegisterModal.value = !showRegisterModal.value;
}

async function login() {
  console.log(loginEmail.value);
  console.log(loginPassword.value);
  router.push({ name: 'game-home' });
}

async function register() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    showToast('Preencha todos os campos.', ToastEnum.Danger);
  }, 2000);
}
</script>

<style scoped>
.bg-home {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  cursor: pointer;
}

.footer {
  background-color: #111111 !important;
  padding: 0.2rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.version {
  position: absolute;
  right: 5px;
}

.logo {
  max-width: 100%;
  max-height: 200px;
  margin: 0 auto;
  position: absolute;
  top: 20px;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
