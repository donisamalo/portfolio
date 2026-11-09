<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="locale-switch">
    <NuxtLink
      :to="switchLocalePath('en')"
      class="loc"
      :class="{ active: locale === 'en' }"
      aria-label="English"
    >
      EN
    </NuxtLink>
    <span class="sep" aria-hidden="true">/</span>
    <NuxtLink
      :to="switchLocalePath('id')"
      class="loc"
      :class="{ active: locale === 'id' }"
      aria-label="Bahasa Indonesia"
    >
      ID
    </NuxtLink>
  </div>
</template>

<style scoped>
.locale-switch {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  letter-spacing: 0.08em;
}

.sep {
  color: var(--text-3);
}

.loc {
  color: var(--text-3);
  transition: color 180ms ease;
}

.loc.active {
  color: var(--accent);
}

@media (hover: hover) and (pointer: fine) {
  .loc:not(.active):hover {
    color: var(--text);
  }
}
</style>
