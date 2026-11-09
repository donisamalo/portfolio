<script setup lang="ts">
import { yearsOfExperience } from '~/data/resume'

const { t } = useI18n()
const years = yearsOfExperience()

/* Subtle parallax: hero content drifts slower than the page and fades out.
   Client-only (mounted gate) so SSR markup carries no inline style. */
const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})

const { y } = useWindowScroll()
const reduced = usePreferredReducedMotion()

const parallaxStyle = computed(() => {
  if (!mounted.value || reduced.value === 'reduce') return undefined
  const offset = Math.min(y.value, 720)
  return {
    transform: `translate3d(0, ${Math.round(offset * 0.16)}px, 0)`,
    opacity: String(Math.max(1 - offset / 820, 0)),
  }
})
</script>

<template>
  <section class="hero">
    <div class="container hero-inner" :style="parallaxStyle">
      <p class="kicker hero-kicker" data-rise style="--d: 0ms">
        {{ t('hero.kicker') }}
      </p>

      <h1 class="hero-title">
        <span class="line" data-rise style="--d: 90ms">{{ t('hero.line1') }}</span>
        <span class="line serif-accent" data-rise style="--d: 190ms">{{ t('hero.line2') }}</span>
        <span class="line" data-rise style="--d: 290ms">{{ t('hero.line3') }}</span>
      </h1>

      <p class="hero-summary" data-rise style="--d: 400ms">
        {{ t('hero.summary', { years }) }}
      </p>

      <div class="hero-actions" data-rise style="--d: 490ms">
        <a href="#work" class="btn btn--primary">
          {{ t('hero.ctaWork') }}
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" />
          </svg>
        </a>
        <a href="#contact" class="btn">{{ t('hero.ctaContact') }}</a>
      </div>

      <div class="hero-meta" data-rise style="--d: 580ms">
        <span class="status">
          <span class="dot" aria-hidden="true" />
          {{ t('hero.status') }}
        </span>
        <span class="sep" aria-hidden="true">·</span>
        <span class="location">{{ t('hero.location') }}</span>
      </div>
    </div>

  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: var(--header-h);
  overflow: hidden;
}

/* Soft accent glow, anchored to the headline */
.hero::before {
  content: '';
  position: absolute;
  top: -20%;
  left: -10%;
  width: 70%;
  height: 80%;
  background: radial-gradient(closest-side, var(--accent-soft), transparent 70%);
  filter: blur(40px);
  pointer-events: none;
}

/* Faint dot grid in the hero's negative space */
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(color-mix(in srgb, var(--text) 15%, transparent) 1px, transparent 1px);
  background-size: 30px 30px;
  -webkit-mask-image: radial-gradient(85% 70% at 75% 18%, #000, transparent 72%);
  mask-image: radial-gradient(85% 70% at 75% 18%, #000, transparent 72%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  padding-block: 72px;
  will-change: transform, opacity;
}

.hero-kicker {
  color: var(--text-2);
  margin-bottom: 28px;
}

.hero-title {
  font-size: clamp(42px, 7.6vw, 92px);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.04;
  margin-bottom: 32px;
}

.hero-title .line {
  display: block;
}

.hero-title .serif-accent {
  font-size: 1.04em;
  letter-spacing: -0.01em;
}

.hero-summary {
  max-width: 54ch;
  font-size: clamp(16px, 2vw, 18px);
  color: var(--text-2);
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 44px;
}

.hero-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-2);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--accent);
}

.dot::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 999px;
  border: 1px solid var(--accent);
  opacity: 0;
  animation: ping 2.6s var(--ease-out) infinite;
}

@keyframes ping {
  0% {
    transform: scale(0.5);
    opacity: 0.8;
  }
  70%,
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

.sep {
  color: var(--text-3);
}

.location {
  color: var(--text-3);
}

@media (prefers-reduced-motion: reduce) {
  .dot::after {
    animation: none;
  }
}
</style>
