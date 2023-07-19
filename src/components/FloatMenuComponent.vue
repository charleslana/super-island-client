<template>
  <div class="menu-left is-flex is-flex-direction-column">
    <div
      class="is-flex is-justify-content-space-between"
      :class="{
        animate__animated: true,
        animate__slideInDown: showMenu,
        animate__slideOutUp: !showMenu,
        animate__faster: animating,
        'is-hidden': !showMenu && !animating
      }"
      ref="menuDiv"
    >
      <div
        class="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center"
      >
        <div class="is-flex is-flex-direction-column is-clickable is-align-items-center">
          <img :src="huntingFloat" alt="float icon" width="50" />
          <div class="text-shadow has-text-centered">Caçadas</div>
        </div>
        <div class="is-flex is-flex-direction-column is-clickable is-align-items-center">
          <img :src="tasksFloat" alt="float icon" width="50" />
          <div class="text-shadow has-text-centered">Tarefas</div>
        </div>
        <div class="is-flex is-flex-direction-column is-clickable is-align-items-center">
          <img :src="challengeFloat" alt="float icon" width="50" />
          <div class="text-shadow has-text-centered">Desafios</div>
        </div>
      </div>
      <div
        class="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center"
      >
        <div class="is-flex is-flex-direction-column is-clickable is-align-items-center">
          <img :src="shopFloat" alt="float icon" width="50" />
          <div class="text-shadow has-text-centered">Shop</div>
        </div>
        <div class="is-flex is-flex-direction-column is-clickable is-align-items-center">
          <img :src="rewardsFloat" alt="float icon" width="50" />
          <div class="text-shadow has-text-centered">Prêmios</div>
        </div>
        <div class="is-flex is-flex-direction-column is-clickable is-align-items-center">
          <img :src="wheelFloat" alt="float icon" width="50" />
          <div class="text-shadow has-text-centered">Girar a roda</div>
        </div>
      </div>
      <div
        class="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center"
      >
        <div class="is-flex is-flex-direction-column is-clickable is-align-items-center">
          <img :src="eventsFloat" alt="float icon" width="50" />
          <div class="text-shadow has-text-centered">Eventos</div>
        </div>
        <div class="is-flex is-flex-direction-column is-clickable is-align-items-center">
          <img :src="rankFloat" alt="float icon" width="50" />
          <div class="text-shadow has-text-centered">TOP Rank</div>
        </div>
        <div class="is-flex is-flex-direction-column is-clickable is-align-items-center">
          <img :src="referralFloat" alt="float icon" width="50" />
          <div class="text-shadow has-text-centered">Convidar</div>
        </div>
      </div>
    </div>
    <button @click="toggleMenuTop">
      <font-awesome-icon :icon="['fas', showMenu ? 'chevron-up' : 'chevron-down']" />
    </button>
  </div>
</template>

<script setup lang="ts">
import {
  huntingFloat,
  tasksFloat,
  challengeFloat,
  shopFloat,
  rewardsFloat,
  wheelFloat,
  eventsFloat,
  rankFloat,
  referralFloat
} from '@/data/imageData';
import { getShowMenu, saveShowMenu } from '@/utils/localStorageUtils';
import { onMounted, onUnmounted, ref, watch } from 'vue';

const showMenu = ref(true);
const animating = ref(false);
const menuDiv = ref<HTMLElement | null>(null);

function toggleMenuTop() {
  showMenu.value = !showMenu.value;
  saveShowMenu(showMenu.value);
}

function onAnimationEnd() {
  if (menuDiv.value) {
    if (!showMenu.value) {
      menuDiv.value.classList.add('is-hidden');
    } else {
      menuDiv.value.classList.remove('is-hidden');
    }
    menuDiv.value.classList.remove('animate__slideOutUp', 'animate__slideInDown');
  }
}

watch(showMenu, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    animating.value = true;
    if (!newValue) {
      menuDiv.value?.classList.add('animate__slideOutUp');
    } else {
      menuDiv.value?.classList.add('animate__slideInDown');
    }
  }
});

onMounted(() => {
  menuDiv.value?.addEventListener('animationend', onAnimationEnd);
  showMenu.value = getShowMenu();
  if (!showMenu.value && menuDiv.value) {
    menuDiv.value.classList.add('is-hidden');
  }
});

onUnmounted(() => {
  menuDiv.value?.removeEventListener('animationend', onAnimationEnd);
});
</script>

<style scoped>
.menu-left {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 195px;
  height: auto;
  color: #ffffff;
  font-weight: 600;
  font-size: 13px;
}

.menu-left > div img:hover {
  transform: scale(1.2);
}

button {
  border: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #a5a6a8;
  width: 45px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 20px;
  padding: 0;
  margin: 0 auto;
}
</style>
