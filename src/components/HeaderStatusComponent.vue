<template>
  <div class="status p-1 mr-1 has-tooltip-bottom" :data-tooltip="showFormatValue(value)">
    <img :src="icon" alt="status icon" width="20" class="mr-1" />
    <div>
      {{ showFormatCompactValue(value) }}
    </div>
  </div>
  <img
    :src="plus"
    alt="status icon"
    width="20"
    class="is-clickable"
    @click="callback"
    v-if="isPlus"
  />
</template>

<script setup lang="ts">
import { plus } from '@/data/imageData';
import { formatCompactNumber, formatNumber } from '@/utils/utils';

defineProps({
  icon: {
    type: String,
    required: true
  },
  value: {
    required: true
  },
  isPlus: {
    type: Boolean
  },
  callback: {
    type: Function as unknown as () => (payload: MouseEvent) => void
  }
});

function showFormatCompactValue(value: unknown): string {
  if (typeof value === 'number') {
    return formatCompactNumber(value);
  }
  return value as string;
}

function showFormatValue(value: unknown): string {
  if (typeof value === 'number') {
    return formatNumber(value);
  }
  return value as string;
}
</script>

<style scoped>
.status {
  display: flex;
  background-color: #191c20;
  border-radius: 5px;
  align-items: center;
  min-width: 77px;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .status {
    min-width: 48px;
  }
}
</style>
