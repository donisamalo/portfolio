<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const { t } = useI18n()
const is404 = computed(() => props.error?.statusCode === 404)

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="err">
    <span class="ghost" aria-hidden="true">{{ error?.statusCode || 404 }}</span>

    <div class="err-body">
      <p class="kicker">{{ t('error.kicker') }}</p>
      <h1 class="err-title">
        {{ is404 ? t('error.title404') : t('error.titleGeneric') }}
      </h1>
      <p class="err-text">{{ t('error.body') }}</p>
      <button type="button" class="btn btn--primary" @click="goHome">
        {{ t('error.cta') }}
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M13.5 8h-11M7 3.5 2.5 8 7 12.5" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.err {
  position: relative;
  min-height: 100svh;
  display: grid;
  place-items: center;
  overflow: hidden;
  padding: var(--gutter);
}

/* Giant outlined status code behind the message */
.ghost {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -54%);
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(220px, 46vw, 560px);
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in srgb, var(--text) 10%, transparent);
  pointer-events: none;
  user-select: none;
}

.err-body {
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.err-body .kicker {
  margin-bottom: 20px;
}

.err-title {
  font-size: clamp(32px, 5.4vw, 56px);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin-bottom: 16px;
}

.err-text {
  color: var(--text-2);
  max-width: 44ch;
  margin-bottom: 32px;
}
</style>
