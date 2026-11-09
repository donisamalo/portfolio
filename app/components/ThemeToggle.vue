<script setup lang="ts">
const { isLight, toggle } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="isLight ? 'Switch to dark theme' : 'Switch to light theme'"
    @click="toggle"
  >
    <!-- Sun -->
    <svg
      class="icon"
      :class="{ shown: isLight }"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
    >
      <circle cx="12" cy="12" r="4.4" />
      <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5 5l1.6 1.6M17.4 17.4 19 19M19 5l-1.6 1.6M6.6 17.4 5 19" />
    </svg>
    <!-- Moon -->
    <svg
      class="icon"
      :class="{ shown: !isLight }"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid var(--line);
  color: var(--text-2);
  display: grid;
  place-items: center;
  transition: transform 160ms var(--ease-out), border-color 200ms ease, color 200ms ease;
}

.theme-toggle:active {
  transform: scale(0.94);
}

@media (hover: hover) and (pointer: fine) {
  .theme-toggle:hover {
    border-color: var(--line-strong);
    color: var(--text);
  }
}

.icon {
  grid-area: 1 / 1;
  opacity: 0;
  transform: rotate(-40deg) scale(0.7);
  transition: opacity 250ms var(--ease-out), transform 250ms var(--ease-out);
}

.icon.shown {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .icon {
    transform: none;
    transition: opacity 200ms ease;
  }
}
</style>
