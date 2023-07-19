<template>
  <div class="menu-left is-flex is-justify-content-space-between">
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
</style>
