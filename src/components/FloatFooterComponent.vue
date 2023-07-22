<template>
  <div class="float-footer">
    <button @click="toggleMenuTop" :class="{ 'is-hidden': showMenu }">
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
      <span class="badge is-danger"></span>
    </button>
    <div
      class="float-content is-flex is-justify-content-start"
      :class="{
        animate__animated: true,
        animate__slideInLeft: showMenu,
        animate__slideOutLeft: !showMenu,
        animate__faster: animating,
        'is-hidden': !showMenu && !animating
      }"
      ref="menuDiv"
    >
      <div
        class="mr-2 is-flex is-flex-direction-column is-align-items-center is-relative is-clickable"
      >
        <img :src="mailFloat" alt="float menu" width="40" />
        <span class="badge is-danger"></span>
        <div>Correio</div>
      </div>
      <div
        class="mr-2 is-flex is-flex-direction-column is-align-items-center is-relative is-clickable"
      >
        <img :src="tradeFloat" alt="float menu" width="40" />
        <div>Trocas</div>
      </div>
      <div
        class="mr-2 is-flex is-flex-direction-column is-align-items-center is-relative is-clickable"
      >
        <img :src="friendsFloat" alt="float menu" width="40" />
        <div>Amigos</div>
      </div>
      <div
        class="mr-2 is-flex is-flex-direction-column is-align-items-center is-relative is-clickable"
      >
        <img :src="guildsFloat" alt="float menu" width="40" />
        <div>Guilda</div>
      </div>
      <div
        class="mr-2 is-flex is-flex-direction-column is-align-items-center is-relative is-clickable"
      >
        <img :src="achievementsFloat" alt="float menu" width="40" />
        <div>Triunfos</div>
      </div>
      <div
        class="mr-2 is-flex is-flex-direction-column is-align-items-center is-relative is-clickable"
      >
        <img :src="indexFloat" alt="float menu" width="40" />
        <div>Índice</div>
      </div>
      <div class="is-flex is-flex-direction-column is-align-items-center is-relative is-clickable">
        <button @click="toggleMenuTop" :class="{ 'is-hidden': !showMenu }">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
          <span class="badge is-danger"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import {
  mailFloat,
  tradeFloat,
  friendsFloat,
  guildsFloat,
  achievementsFloat,
  indexFloat
} from '@/data/imageData';

const showMenu = ref(false);
const animating = ref(false);
const menuDiv = ref<HTMLElement | null>(null);

function toggleMenuTop() {
  showMenu.value = !showMenu.value;
}

function onAnimationEnd() {
  if (menuDiv.value) {
    if (!showMenu.value) {
      menuDiv.value.classList.add('is-hidden', 'pe-none');
    } else {
      menuDiv.value.classList.remove('is-hidden', 'pe-none');
    }
    menuDiv.value.classList.remove('animate__slideOutLeft', 'animate__slideInLeft');
  }
}

watch(showMenu, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    animating.value = true;
    if (!newValue) {
      menuDiv.value?.classList.add('animate__slideOutLeft');
    } else {
      menuDiv.value?.classList.add('animate__slideInLeft');
    }
  }
});

onMounted(() => {
  menuDiv.value?.addEventListener('animationend', onAnimationEnd);
});

onUnmounted(() => {
  menuDiv.value?.removeEventListener('animationend', onAnimationEnd);
});
</script>

<style scoped>
.float-footer {
  position: absolute;
  top: 386px;
  left: 0px;
  width: auto;
  height: auto;
  color: #ffffff;
  font-weight: 600;
  font-size: 13px;
}

button {
  border: 0;
  background-color: #202429;
  color: #a5a6a8;
  width: 28px;
  height: 60px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 20px;
  padding: 0;
  margin: 0 auto;
  position: relative;
  border-radius: 0 5px 5px 0;
}

.badge {
  transform: translate(-50%, 50%);
}

.float-content {
  width: 325px;
  height: 60px;
  background-color: #202429;
  color: #a5a6a8;
  font-size: 10px;
  position: absolute;
  top: 0;
  border-radius: 0 5px 5px 0;
  padding: 2px;
}
</style>
