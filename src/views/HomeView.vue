<template>
  <div class="page is-clipped">
    <NavComponent />
    <div class="map">
      <div
        class="homeMap"
        :style="{
          ...bgHomeStyle,
          transform: `translate(${dragPosition.x}px, ${dragPosition.y}px)`
        }"
        v-interact-draggable="dragOptions"
      ></div>
      <FloatMenuComponent />
      <FloatQuestComponent />
      <FloatFooterComponent />
    </div>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { homeMap } from '@/data/imageData';
import NavComponent from '@/components/NavComponent.vue';
import { computed, ref } from 'vue';
import interact from 'interactjs';
import FooterComponent from '@/components/FooterComponent.vue';
import FloatMenuComponent from '@/components/FloatMenuComponent.vue';
import FloatQuestComponent from '@/components/FloatQuestComponent.vue';
import FloatFooterComponent from '@/components/FloatFooterComponent.vue';
import { saveHomeMapPosition, getHomeMapPosition } from '@/utils/localStorageUtils';
import { isMobileDevice } from '@/utils/utils';

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
      endOnly: false
    })
  ],
  listeners: {
    move: onDragMove,
    end: onDragEnd
  }
};

const savedPosition = getHomeMapPosition();
if (savedPosition && isMobileDevice()) {
  dragPosition.value = savedPosition;
}

function onDragMove(event: Interact.InteractEvent) {
  const { dx, dy } = event;
  dragPosition.value.x += dx;
  dragPosition.value.y += dy;
}

function onDragEnd() {
  saveHomeMapPosition(dragPosition.value);
}
</script>

<style scoped>
.homeMap {
  width: 1312px;
  height: calc((800px) + 53px + 61px);
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  background-color: #4fc498 !important;
  touch-action: none;
  position: relative;
}

.page {
  background: #4fc498 !important;
  height: 100vh;
}

.map {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

@media screen and (min-width: 1408px) {
  .homeMap {
    width: 100vw;
  }
}
</style>
