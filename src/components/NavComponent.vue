<template>
  <nav>
    <progress class="progress is-small is-radiusless mb-0" value="20" max="100"></progress>
    <header class="header p-1">
      <div class="header-left">
        <img
          :src="avatar1"
          alt="avatar"
          class="is-clickable"
          @click="$router.push({ name: 'home' })"
        />
        <div class="ml-2 is-flex is-flex-direction-column">
          <div class="is-flex">
            <img :src="name" alt="name icon" width="12" height="12" />
            <div>Charles</div>
          </div>
          <div class="is-flex">
            <img :src="rank1" alt="name icon" width="12" height="12" />
            <div>Nv. 15</div>
          </div>
        </div>
      </div>
      <div class="header-right">
        <HeaderStatusComponent :icon="meat" value="100/100" />
        <HeaderStatusComponent :icon="gold" :value="1500" />
        <HeaderStatusComponent
          :icon="diamond"
          :value="0"
          :isPlus="true"
          :callback="() => console.log('Hello')"
        />
      </div>
    </header>
  </nav>
</template>

<script setup lang="ts">
import { avatar1, name, rank1, meat, gold, diamond } from '@/data/imageData';
import HeaderStatusComponent from '@/components/HeaderStatusComponent.vue';
</script>

<style scoped>
.header {
  background-color: #202429;
  min-height: 41px;
  color: #949494;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
}

.header-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.header-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header-left > img {
  height: 41px;
  border-radius: 50%;
}

.progress::-webkit-progress-value {
  background-color: #1286d7;
}

.progress::-webkit-progress-bar {
  background-color: #202a3b;
}

.progress::-moz-progress-bar {
  background-color: #1286d7;
}

.progress::-ms-fill {
  background-color: #1286d7;
}
</style>
