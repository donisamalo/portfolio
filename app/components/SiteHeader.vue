<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 8)

/* Reading progress for the hairline under the header */
const progress = computed(() => {
  if (import.meta.server) return 0
  const doc = document.documentElement
  const max = doc.scrollHeight - doc.clientHeight
  return max > 0 ? Math.min(y.value / max, 1) : 0
})

const links = ['about', 'experience', 'work', 'contact']
</script>

<template>
  <header class="header" :class="{ scrolled }">
    <div class="container header-inner">
      <NuxtLink :to="localePath('/')" class="logo">Doni&nbsp;Samalo</NuxtLink>

      <nav class="nav" aria-label="Main">
        <a v-for="link in links" :key="link" :href="`#${link}`" class="nav-link">
          {{ t(`nav.${link}`) }}
        </a>
      </nav>

      <div class="controls">
        <LocaleSwitch />
        <ThemeToggle />
      </div>
    </div>
    <span class="progress" :style="{ transform: `scaleX(${progress})` }" aria-hidden="true" />
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  height: var(--header-h);
  border-bottom: 1px solid transparent;
  transition: border-color 250ms ease, background-color 250ms ease;
}

.header.scrolled {
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  border-bottom-color: var(--line);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}

.header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.logo {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 20px;
  letter-spacing: 0.01em;
}

.nav {
  display: none;
  gap: 28px;
}

.nav-link {
  position: relative;
  font-size: 14px;
  color: var(--text-2);
  transition: color 180ms ease;
}

/* Underline slides in from the left on hover */
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 1px;
  background: var(--text);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 220ms var(--ease-out);
}

@media (hover: hover) and (pointer: fine) {
  .nav-link:hover {
    color: var(--text);
  }

  .nav-link:hover::after {
    transform: scaleX(1);
  }
}

.progress {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: var(--text);
  transform: scaleX(0);
  transform-origin: left;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .nav-link::after {
    transition: none;
  }
}

.controls {
  display: flex;
  align-items: center;
  gap: 14px;
}

@media (min-width: 720px) {
  .nav {
    display: flex;
  }
}
</style>
