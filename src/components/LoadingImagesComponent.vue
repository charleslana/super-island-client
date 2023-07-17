<template>
  <div>
    <slot :isLoading="isLoading"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import images from '@/data/imageData';

const isLoading = ref(true);

onMounted(() => {
  const imageUrls = Object.values(images);
  const imagesToLoad = imageUrls.map((url) => {
    return new Promise<void>((resolve) => {
      const image = new Image();
      image.onload = () => {
        resolve();
      };
      image.onerror = () => {
        console.error('Erro ao carregar imagem:', url);
        resolve();
      };
      image.src = url;
    });
  });

  Promise.all(imagesToLoad)
    .then(() => {
      isLoading.value = false;
    })
    .catch((error) => {
      console.error('Erro ao carregar imagens:', error);
    });
});
</script>

<style scoped></style>
