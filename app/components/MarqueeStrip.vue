<script setup lang="ts">
import { marqueeItems } from '~/data/resume'
</script>

<template>
  <div class="marquee" aria-hidden="true">
    <div class="track">
      <div v-for="copy in 2" :key="copy" class="group">
        <span v-for="item in marqueeItems" :key="item" class="item">
          {{ item }}
          <span class="star">✦</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  border-block: 1px solid var(--line);
  /* fade edges */
  -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}

.track {
  display: flex;
  width: max-content;
  animation: marquee 38s linear infinite;
}

.marquee:hover .track {
  animation-play-state: paused;
}

.group {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 22px 20px;
}

.item {
  display: inline-flex;
  align-items: center;
  gap: 40px;
  font-size: clamp(20px, 2.6vw, 30px);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-2);
  white-space: nowrap;
}

/* Every other item is outlined - type as texture */
.item:nth-child(even) {
  color: transparent;
  -webkit-text-stroke: 1px var(--text-3);
}

.star {
  font-size: 12px;
  color: var(--text-3);
  -webkit-text-stroke: 0;
  opacity: 0.7;
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .track {
    animation: none;
  }
}
</style>
