<script setup lang="ts">
import { contacts } from '~/data/resume'

const { t } = useI18n()

/* Live Jakarta clock - client-only so SSR markup stays stable */
const now = ref('')
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Jakarta',
  })
  const tick = () => {
    now.value = fmt.format(new Date())
  }
  tick()
  timer = setInterval(tick, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div v-reveal class="panel">
      <p v-reveal="60" class="kicker contact-kicker">06 - {{ t('nav.contact') }}</p>

      <h2 v-reveal="80" class="contact-title">
        {{ t('contact.title1') }}
        <span class="serif-accent">{{ t('contact.title2') }}</span>
      </h2>

      <p v-reveal="150" class="contact-body">{{ t('contact.body') }}</p>

      <div v-reveal="220" class="contact-actions">
        <a class="btn btn--primary" :href="`mailto:${contacts.email}`">
          {{ t('contact.cta') }}
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
          </svg>
        </a>
      </div>

      <ul v-reveal="290" class="contact-links">
        <li>
          <a :href="`mailto:${contacts.email}`" class="contact-link">
            <span class="label">{{ t('contact.emailLabel') }}</span>
            <span class="value">{{ contacts.email }}</span>
          </a>
        </li>
        <li>
          <a :href="contacts.linkedin" target="_blank" rel="noopener" class="contact-link">
            <span class="label">{{ t('contact.linkedinLabel') }}</span>
            <span class="value">/in/donisamalo</span>
          </a>
        </li>
        <li>
          <a :href="contacts.github" target="_blank" rel="noopener" class="contact-link">
            <span class="label">{{ t('contact.githubLabel') }}</span>
            <span class="value">/donisamalo</span>
          </a>
        </li>
      </ul>

      <div v-reveal="340" class="contact-meta">
        <span>{{ t('hero.location') }}</span>
        <span aria-hidden="true">·</span>
        <span v-if="now" class="meta-time">{{ now }} WIB</span>
      </div>

      <span class="panel-star" aria-hidden="true">✦</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Capture the page tokens before the panel swaps them */
.contact {
  --paper: var(--text);
  --ink: var(--bg);
}

/* Inverted panel: light card on the dark page (and vice versa in light theme).
   Swapping the custom properties re-themes everything inside automatically. */
.panel {
  --bg: var(--paper);
  --text: var(--ink);
  --text-2: color-mix(in srgb, var(--ink) 74%, transparent);
  --text-3: color-mix(in srgb, var(--ink) 55%, transparent);
  --line: color-mix(in srgb, var(--ink) 14%, transparent);
  --line-strong: color-mix(in srgb, var(--ink) 30%, transparent);
  --accent: var(--ink);
  --accent-soft: color-mix(in srgb, var(--ink) 8%, transparent);
  --accent-ink: var(--paper);

  position: relative;
  overflow: hidden;
  background: var(--paper);
  color: var(--text);
  border-radius: calc(var(--radius) + 12px);
  padding: clamp(56px, 9vw, 96px) var(--gutter);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Outlined star ornament in the corner */
.panel::before {
  content: '✦';
  position: absolute;
  top: -46px;
  right: -14px;
  font-size: 190px;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in srgb, var(--ink) 15%, transparent);
  pointer-events: none;
}

/* Faint dot grid anchored to the bottom-left corner */
.panel::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(color-mix(in srgb, var(--ink) 16%, transparent) 1px, transparent 1px);
  background-size: 26px 26px;
  -webkit-mask-image: radial-gradient(55% 60% at 10% 92%, #000, transparent 72%);
  mask-image: radial-gradient(55% 60% at 10% 92%, #000, transparent 72%);
  pointer-events: none;
}

/* Keep content above the pseudo-element decorations */
.panel > * {
  position: relative;
  z-index: 1;
}

/* Small counterweight star, bottom-left */
.panel-star {
  position: absolute;
  left: 30px;
  bottom: 24px;
  z-index: 0;
  font-size: 44px;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in srgb, var(--ink) 28%, transparent);
  transform: rotate(-12deg);
  pointer-events: none;
}

.contact-kicker {
  color: var(--accent);
  margin-bottom: 24px;
}

.contact-title {
  font-size: clamp(34px, 6vw, 64px);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.08;
  max-width: 18ch;
  margin-bottom: 24px;
}

.contact-title .serif-accent {
  display: block;
  font-size: 1.05em;
}

.contact-body {
  max-width: 46ch;
  color: var(--text-2);
  margin-bottom: 36px;
}

.contact-actions {
  margin-bottom: 52px;
}

.contact-links {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px 40px;
}

.contact-link {
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 13.5px;
}

.contact-link .label {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-3);
}

.contact-link .value {
  color: var(--text-2);
  border-bottom: 1px solid transparent;
  transition: color 180ms ease, border-color 180ms ease;
}

.contact-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 44px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  color: var(--text-3);
}

.meta-time {
  font-variant-numeric: tabular-nums;
}

@media (hover: hover) and (pointer: fine) {
  .contact-link:hover .value {
    color: var(--text);
    border-bottom-color: var(--accent);
  }

  /* Global hover would resolve to the same ink color - shade it instead */
  .panel .btn--primary:hover {
    background: color-mix(in srgb, var(--ink) 82%, var(--paper));
    color: var(--paper);
  }
}
</style>
