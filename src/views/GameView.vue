<template>
  <div>
    <LoadingImagesComponent>
      <template #default="{ isLoading }">
        <LoadingOverlayComponent v-if="isLoading" />
        <div v-else>
          <div class="page is-clipped">
            <nav>
              <progress
                class="progress is-small is-radiusless mb-0"
                value="20"
                max="100"
              ></progress>
              <header class="header p-1">
                <div class="header-left">
                  <img
                    :src="avatar1"
                    alt="avatar"
                    class="is-clickable"
                    @click="router.push({ name: 'home' })"
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
            <div class="map">
              <div
                class="homeMap"
                :style="{
                  ...bgHomeStyle,
                  transform: `translate(${dragPosition.x}px, ${dragPosition.y}px)`
                }"
                v-interact-draggable="dragOptions"
                @dragmove="onDragMove"
              ></div>
            </div>
          </div>
        </div>
      </template>
    </LoadingImagesComponent>
  </div>
</template>

<script setup lang="ts">
import LoadingImagesComponent from '@/components/LoadingImagesComponent.vue';
import LoadingOverlayComponent from '@/components/LoadingOverlayComponent.vue';
import { avatar1, name, rank1, meat, gold, diamond, homeMap } from '@/data/imageData';
import HeaderStatusComponent from '@/components/HeaderStatusComponent.vue';
import { computed, ref } from 'vue';
import router from '@/router';
import interact from 'interactjs';

const bgHomeStyle = computed(() => {
  return {
    backgroundImage: `url(${homeMap})`
  };
});

const dragPosition = ref({ x: 0, y: 0 });

const dragOptions = {
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: '.map',
      endOnly: true
    })
  ],
  listeners: {
    move: onDragMove
  }
};

function onDragMove(event: Interact.InteractEvent) {
  const { dx, dy } = event;
  dragPosition.value.x += dx;
  dragPosition.value.y += dy;
}
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

.homeMap {
  width: 1312px;
  height: calc((800px) + 53px);
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  background-color: #4fc498 !important;
  touch-action: none;
}

.page {
  background: #4fc498 !important;
  height: 100vh;
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

.map {
  width: 100%;
  height: 100%;
  overflow: auto;
}

@media screen and (min-width: 1408px) {
  .homeMap {
    width: 100vw;
  }
}
</style>
