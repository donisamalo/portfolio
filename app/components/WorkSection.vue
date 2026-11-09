<script setup lang="ts">
import { projects } from '~/data/resume'

const { t } = useI18n()
</script>

<template>
  <section id="work" class="section">
    <div class="container">
      <SectionHeading index="03" :title="t('work.title')" />

      <p v-reveal class="work-lead">{{ t('work.lead') }}</p>

      <div class="work-grid">
        <article
          v-for="(project, i) in projects"
          :key="project.id"
          v-reveal="Math.min(i * 70, 210)"
          class="card"
          :class="{ featured: project.featured }"
        >
          <a
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="card-link"
            :aria-label="`${project.name} - ${t('work.visit')}`"
          >
            <div class="cover" :class="{ 'has-img': project.cover }">
              <img
                v-if="project.cover"
                :src="project.cover"
                :alt="`${project.name} interface`"
                loading="lazy"
                class="cover-img"
              >
              <span v-else class="cover-letter" aria-hidden="true">{{ project.name.charAt(0) }}</span>
            </div>

            <div class="card-body">
              <div class="card-head">
                <h3 class="card-name">{{ project.name }}</h3>
                <span class="visit">
                  {{ t('work.visit') }}
                  <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
                  </svg>
                </span>
              </div>

              <p class="card-desc">{{ t(`work.items.${project.id}`) }}</p>

              <div class="card-tech">
                <span v-for="tech in project.tech" :key="tech" class="chip">{{ tech }}</span>
              </div>
            </div>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.work-lead {
  max-width: 52ch;
  font-size: 17px;
  color: var(--text-2);
  margin: -20px 0 48px;
}

.work-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.card {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: color-mix(in srgb, var(--surface) 55%, transparent);
  overflow: hidden;
  transition: transform 350ms var(--ease-out), border-color 250ms ease;
}

@media (hover: hover) and (pointer: fine) {
  .card:hover {
    transform: translateY(-6px);
    border-color: var(--line-strong);
  }

  .card:hover .cover-letter {
    transform: scale(1.08) rotate(-4deg);
  }

  .card:hover .visit {
    color: var(--text);
  }

  .card:hover .visit svg {
    transform: translate(2px, -2px);
  }
}

.card:active {
  transform: scale(0.99);
}

.card-link {
  display: block;
  padding: 14px;
}

/* Generated cover art - always dark, like a gallery piece */
.cover {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: calc(var(--radius) - 7px);
  overflow: hidden;
  display: grid;
  place-items: center;
  background:
    radial-gradient(120% 150% at 85% 8%, hsl(0 0% 100% / 0.14), transparent 52%),
    radial-gradient(110% 130% at 12% 95%, hsl(0 0% 100% / 0.08), transparent 55%),
    linear-gradient(160deg, hsl(0 0% 13%), hsl(0 0% 5%));
}

/* faint blueprint grid on top of the gradients */
.cover::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(hsl(0 0% 100% / 0.07) 1px, transparent 1px),
    linear-gradient(90deg, hsl(0 0% 100% / 0.07) 1px, transparent 1px);
  background-size: 44px 44px;
  -webkit-mask-image: radial-gradient(130% 100% at 50% 0%, #000 30%, transparent 75%);
  mask-image: radial-gradient(130% 100% at 50% 0%, #000 30%, transparent 75%);
}

/* Vary the backdrop pattern per card so the grid doesn't feel repetitive */
.card:nth-child(2) .cover::after {
  background-image: radial-gradient(hsl(0 0% 100% / 0.1) 1.2px, transparent 1.3px);
  background-size: 20px 20px;
}

.card:nth-child(3) .cover::after {
  background-image: repeating-linear-gradient(-45deg, hsl(0 0% 100% / 0.07) 0 1px, transparent 1px 13px);
  background-size: auto;
}

.card:nth-child(4) .cover::after {
  background-image: repeating-radial-gradient(circle at 50% 135%, hsl(0 0% 100% / 0.08) 0 1px, transparent 1px 24px);
  background-size: auto;
}

.card:nth-child(5) .cover::after {
  background-image: repeating-linear-gradient(0deg, hsl(0 0% 100% / 0.06) 0 1px, transparent 1px 10px);
  background-size: auto;
}

.card:nth-child(6) .cover::after {
  background-image: repeating-linear-gradient(45deg, hsl(0 0% 100% / 0.07) 0 1px, transparent 1px 13px);
  background-size: auto;
}

.card:nth-child(7) .cover::after {
  background-image: radial-gradient(hsl(0 0% 100% / 0.09) 1.5px, transparent 1.6px);
  background-size: 26px 26px;
}

/* Real screenshot: grayscale at rest, color on hover */
.cover-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  filter: grayscale(1);
  transition: filter 320ms ease;
}

.cover.has-img::after {
  display: none;
}

@media (hover: hover) and (pointer: fine) {
  .card:hover .cover-img {
    filter: grayscale(0);
  }
}

.cover-letter {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(88px, 14vw, 150px);
  line-height: 1;
  color: hsl(0 0% 97% / 0.94);
  text-shadow: 0 10px 60px hsl(0 0% 100% / 0.35);
  transition: transform 450ms var(--ease-out);
  transform-origin: 50% 60%;
}

.featured .cover {
  aspect-ratio: 16 / 9;
}

.card-body {
  padding: 22px 12px 12px;
}

.card-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
}

.card-name {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.015em;
}

.visit {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
  white-space: nowrap;
  transition: color 200ms ease;
}

.visit svg {
  transition: transform 250ms var(--ease-out);
}

.card-desc {
  font-size: 15px;
  color: var(--text-2);
  margin-top: 10px;
  max-width: 58ch;
}

.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

@media (min-width: 720px) {
  .work-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .featured {
    grid-column: span 2;
  }

  .featured .cover {
    aspect-ratio: 21 / 8;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card,
  .cover-letter,
  .cover-img,
  .visit svg {
    transition: none;
  }
}
</style>
