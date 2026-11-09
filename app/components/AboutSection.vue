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

        <div v-reveal="140" class="about-stats">
          <StatNumber :value="years" suffix="+" :label="t('about.stats.years')" />
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
