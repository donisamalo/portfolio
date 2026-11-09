<script setup lang="ts">
defineProps<{
  index: string
  title: string
}>()
</script>

<template>
  <div v-reveal class="sec-head">
    <span class="ghost" aria-hidden="true">{{ index }}</span>
    <span class="idx kicker">{{ index }}</span>
    <h2 class="title">{{ title }}</h2>
    <span class="rule" aria-hidden="true" />
  </div>
</template>

<style scoped>
.sec-head {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: clamp(36px, 6vh, 64px);
}

/* Oversized outlined numeral behind the title */
.ghost {
  position: absolute;
  left: -0.06em;
  top: 50%;
  transform: translateY(-56%);
  /* z-index: -1 would sink it behind the body background */
  z-index: 0;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(110px, 15vw, 180px);
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in srgb, var(--text) 13%, transparent);
  pointer-events: none;
  user-select: none;
}

.idx,
.title,
.rule {
  position: relative;
  z-index: 1;
}

.idx {
  color: var(--accent);
}

.title {
  font-size: clamp(26px, 3.6vw, 38px);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

/* The rule draws itself in once the heading reveals */
.rule {
  flex: 1;
  height: 1px;
  background: var(--line);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.9s var(--ease-out) 150ms;
}

.sec-head.in .rule {
  transform: scaleX(1);
}

@media (prefers-reduced-motion: reduce) {
  .rule {
    transform: none;
    transition: none;
  }
}
</style>
