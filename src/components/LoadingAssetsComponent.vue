<template>
  <div>
    <slot :isLoading="isLoading"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import images from '@/data/imageData';
import sounds from '@/data/soundData';

const isLoading = ref(true);

onMounted(async () => {
  try {
    const imageUrls = Object.values(images);
    const soundUrls = Object.values(sounds);
    await loadAssets(imageUrls, soundUrls);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
    // document.addEventListener('click', playFirstSound);
  }
});

// function playFirstSound() {
//   const firstSound = new Audio(sounds.notificationSound);
//   firstSound.loop = true;
//   firstSound.play();
//   document.removeEventListener('click', playFirstSound);
// }

function loadAssets(imageUrls: string[], soundUrls: string[]): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const loadImage = (url: string): Promise<void> => {
      return new Promise<void>((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
          resolve();
        };
        image.onerror = () => {
          reject(new Error(`Falha ao carregar imagem: ${url}`));
        };
        image.src = url;
      });
    };
    const imagePromises = imageUrls.map((url) => loadImage(url));
    const loadSound = (url: string): Promise<void> => {
      return new Promise<void>((resolve, reject) => {
        const audio = new Audio();
        audio.oncanplaythrough = () => {
          resolve();
        };
        audio.onerror = () => {
          reject(new Error(`Falha ao carregar som: ${url}`));
        };
        audio.src = url;
      });
    };
    const soundPromises = soundUrls.map((url) => loadSound(url));
    Promise.all([...imagePromises, ...soundPromises])
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}
</script>

<style scoped></style>
