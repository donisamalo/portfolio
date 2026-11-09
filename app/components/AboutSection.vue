<script setup lang="ts">
import { yearsOfExperience } from '~/data/resume'

const { t } = useI18n()
const years = yearsOfExperience()
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <SectionHeading index="01" :title="t('about.title')" />

      <div class="about-grid">
        <div class="about-copy">
          <p v-reveal class="about-p">{{ t('about.p1') }}</p>
          <p v-reveal="80" class="about-p">{{ t('about.p2') }}</p>
        </div>

        <div v-reveal="140" class="about-side">
          <figure class="about-photo">
            <img src="/portrait.jpg" alt="Doni Samalo" loading="lazy" width="800" height="1066">
          </figure>
          <div class="about-stats">
            <StatNumber :value="years" suffix="+" :label="t('about.stats.years')" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
}

.about-p {
  font-size: clamp(17px, 2vw, 19px);
  line-height: 1.75;
  color: var(--text-2);
}

.about-p + .about-p {
  margin-top: 22px;
}

.about-p::first-letter {
  color: var(--text);
}

.about-side {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* Kept deliberately small - a note in the margin, not a hero portrait */
.about-photo {
  max-width: 240px;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--line);
}

.about-photo img {
  display: block;
  width: 100%;
  height: auto;
  filter: grayscale(1);
  transition: filter 320ms ease;
}

@media (hover: hover) and (pointer: fine) {
  .about-photo:hover img {
    filter: grayscale(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-photo img {
    transition: none;
  }
}

.about-stats {
  display: flex;
  flex-direction: column;
}

@media (min-width: 840px) {
  .about-grid {
    grid-template-columns: 1.5fr 1fr;
    gap: 80px;
  }
}
</style>
