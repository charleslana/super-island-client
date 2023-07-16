<template>
  <div class="overlay" :class="{ 'overlay-black': isBlack }">
    <div class="overlay-content">
      <img :src="loadingGif" alt="Imagem" class="centered-image" />
      <p class="loading-text">Carregando...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { loadingGif } from '@/data/imageData';

defineProps({
  isBlack: {
    type: Boolean
  }
});
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
}

.overlay-content {
  text-align: center;
}

.centered-image {
  max-width: 100%;
  max-height: 100%;
}

.loading-text {
  color: white;
  margin-top: 10px;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
}

.overlay-black {
  background-color: rgba(0, 0, 0, 1) !important;
}
</style>
