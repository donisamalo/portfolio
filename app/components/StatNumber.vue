<script setup lang="ts">
const props = defineProps<{
  value: number
  suffix?: string
  label: string
}>()

const el = ref<HTMLElement | null>(null)
const display = ref(0)
const reduced = usePreferredReducedMotion()

let started = false

const { stop } = useIntersectionObserver(
  el,
  (entries) => {
    const entry = entries[0]
    if (!entry?.isIntersecting || started) return
    started = true
    stop()

    if (reduced.value === 'reduce') {
      display.value = props.value
      return
    }

    const start = performance.now()
    const duration = 1100

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      display.value = Math.round(props.value * eased)
      if (p < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  },
  { threshold: 0.4 },
)
</script>

<template>
  <div ref="el" class="stat">
    <span class="num">{{ display }}<span class="suffix">{{ suffix }}</span></span>
    <span class="label">{{ label }}</span>
  </div>
</template>

<style scoped>
.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 22px 0;
  border-top: 1px solid var(--line);
}

.num {
  font-size: clamp(34px, 4vw, 44px);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.suffix {
  color: var(--accent);
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  margin-left: 2px;
}

.label {
  font-size: 14px;
  color: var(--text-2);
}
</style>
