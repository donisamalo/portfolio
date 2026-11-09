<script setup lang="ts">
import { education } from '~/data/resume'

const { t } = useI18n()
</script>

<template>
  <section id="education" class="section">
    <div class="container">
      <SectionHeading index="05" :title="t('education.title')" />

      <div v-reveal class="edu-row">
        <div class="edu-side">
          <span class="edu-period">{{ education.period }}</span>
        </div>

        <div class="edu-body">
          <h3 class="edu-school">{{ education.school }}</h3>
          <p class="edu-degree">{{ education.degree }}</p>
          <div class="edu-tags">
            <span class="chip">{{ t('education.gpa') }} {{ education.gpa }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  border-block: 1px solid var(--line);
  padding: 32px 24px;
  margin-inline: -24px;
  border-radius: var(--radius);
  transition: background-color 250ms ease;
}

@media (hover: hover) and (pointer: fine) {
  .edu-row:hover {
    background: color-mix(in srgb, var(--surface) 70%, transparent);
  }
}

.edu-period {
  font-family: var(--font-mono);
  font-size: 13.5px;
  color: var(--text-2);
  white-space: nowrap;
}

.edu-school {
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -0.015em;
}

.edu-degree {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
  margin-top: 2px;
}

.edu-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

@media (min-width: 840px) {
  .edu-row {
    grid-template-columns: 200px 1fr;
    gap: 40px;
  }

  .edu-side {
    padding-top: 4px;
  }
}
</style>
