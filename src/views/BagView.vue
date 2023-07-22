<template>
  <NavComponent />
  <div class="game-content">
    <div class="title">
      Mochila (0/100)
      <div class="title-right is-flex">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="mr-4" />
        <font-awesome-icon :icon="['fas', 'money-bill-1']" />
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script setup lang="ts">
import NavComponent from '@/components/NavComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<style scoped>
.title-right svg:nth-child(1) {
  color: #f4a835;
}

.title-right svg:nth-child(2) {
  color: #9de06d;
}
</style>
