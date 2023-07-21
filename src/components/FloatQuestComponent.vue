<template>
  <div class="float-quest">
    <button @click="toggleMenuTop">
      <font-awesome-icon :icon="['fas', showMenu ? 'chevron-left' : 'chevron-right']" />
    </button>
    <div
      :class="{
        animate__animated: true,
        animate__slideInLeft: showMenu && !isShow,
        animate__slideOutLeft: !showMenu && !isShow,
        animate__faster: animating,
        'is-hidden': !showMenu && !animating
      }"
      ref="menuDiv"
    >
      <div class="quest">
        # Main Quests #
        <p>Derrote piratas do barba branca (0/6)</p>
      </div>
      <div class="quest"># Side Quests #</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getShowQuest, saveShowQuest } from '@/utils/localStorageUtils';
import { onMounted, onUnmounted, ref, watch } from 'vue';

const showMenu = ref(true);
const animating = ref(false);
const menuDiv = ref<HTMLElement | null>(null);
const isShow = ref(true);

function toggleMenuTop() {
  isShow.value = false;
  showMenu.value = !showMenu.value;
  saveShowQuest(showMenu.value);
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
  showMenu.value = getShowQuest();
  if (!showMenu.value && menuDiv.value) {
    isShow.value = false;
    menuDiv.value.classList.add('is-hidden', 'pe-none');
  }
});

onUnmounted(() => {
  menuDiv.value?.removeEventListener('animationend', onAnimationEnd);
});
</script>

<style scoped>
.float-quest {
  position: absolute;
  top: 242px;
  left: 10px;
  width: auto;
  height: auto;
  color: #ffffff;
  font-weight: 600;
  font-size: 13px;
}

button {
  border: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #a5a6a8;
  width: 20px;
  height: 48px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 20px;
  padding: 0;
  margin: 0 auto;
}

.quest {
  background-color: rgba(0, 0, 0, 0.5);
  width: 150px;
  height: 45px;
  color: #f4a835;
  border-radius: 2px;
  font-weight: 500;
  font-size: 11px;
  padding: 2px;
  margin-top: 2px;
  line-height: 13px;
  overflow: auto;
  overflow-wrap: break-word;
}

.quest p {
  color: #ffffff;
}
</style>
