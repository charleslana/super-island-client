<template>
  <footer class="footer is-flex is-justify-content-space-evenly has-text-centered">
    <div class="is-flex is-flex-direction-column is-clickable w-100">
      <div class="is-relative">
        <div class="is-relative footer-icon">
          <img :src="worldMapFooter" alt="menu icon" width="44" />
          <span class="badge is-danger"></span>
        </div>
      </div>
      <div>Mundo</div>
    </div>
    <div
      class="is-flex is-flex-direction-column is-clickable w-100"
      @click="$router.push({ path: '/err' })"
    >
      <div class="is-relative">
        <div class="is-relative footer-icon">
          <img :src="townFooter" alt="menu icon" width="44" />
        </div>
      </div>
      <div>Cidade</div>
    </div>
    <div
      class="is-flex is-flex-direction-column is-clickable w-100"
      :class="{ active: $router.currentRoute.value.name === 'game-home' }"
      @click="$router.push({ name: 'game-home' })"
    >
      <div class="is-relative footer-icon">
        <img :src="homeFooter" alt="menu icon" width="44" />
      </div>
      <div>Casa</div>
    </div>
    <div class="is-flex is-flex-direction-column is-clickable w-100">
      <div class="is-relative footer-icon">
        <img :src="characterFooter" alt="menu icon" width="44" />
      </div>
      <div>Personagens</div>
    </div>
    <div class="is-flex is-flex-direction-column is-clickable w-100">
      <div class="is-relative footer-icon">
        <img :src="bagFooter" alt="menu icon" width="44" />
      </div>
      <div>Mochila</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  worldMapFooter,
  townFooter,
  homeFooter,
  characterFooter,
  bagFooter
} from '@/data/imageData';
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  padding: 2px !important;
  background-color: #202429 !important;
  color: #949494;
  font-size: 10px;
  font-weight: bold;
}

.footer-icon {
  width: 44px;
  margin: 0 auto;
  display: flex;
}

.active {
  background: #2e3439 !important;
  height: 60px;
}

.badge {
  transform: translate(-50%, 50%);
}
</style>
