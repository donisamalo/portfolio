<script setup lang="ts">
import { experience } from '~/data/resume'

const { t } = useI18n()
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <SectionHeading index="02" :title="t('experience.title')" />

      <ol class="xp-list">
        <li
          v-for="(item, i) in experience"
          :key="item.id"
          v-reveal="Math.min(i * 50, 150)"
          class="xp-row"
        >
          <div class="xp-side">
            <span class="xp-period">{{ item.ongoing ? `${item.period} - ${t('common.present')}` : item.period }}</span>
            <span class="xp-type">{{ t(`common.type.${item.type}`) }}</span>
          </div>

          <div class="xp-body">
            <h3 class="xp-company">{{ item.company }}</h3>
            <p class="xp-role">{{ item.role }}</p>
            <p class="xp-summary">{{ t(`experience.items.${item.id}`) }}</p>
            <div class="xp-tags">
              <span v-for="tag in item.tags" :key="tag" class="chip">{{ tag }}</span>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.xp-list {
  list-style: none;
  padding: 0;
  border-bottom: 1px solid var(--line);
}

.xp-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  border-top: 1px solid var(--line);
  padding: 32px 24px;
  margin-inline: -24px;
  border-radius: var(--radius);
  transition: background-color 250ms ease;
}

@media (hover: hover) and (pointer: fine) {
  .xp-row:hover {
    background: color-mix(in srgb, var(--surface) 70%, transparent);
  }
}

.xp-side {
  display: flex;
  align-items: baseline;
  gap: 14px;
}

.xp-period {
  font-family: var(--font-mono);
  font-size: 13.5px;
  color: var(--text-2);
  white-space: nowrap;
}

.xp-type {
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-3);
}

.xp-company {
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -0.015em;
  transition: transform 300ms var(--ease-out);
}

@media (hover: hover) and (pointer: fine) {
  .xp-row:hover .xp-company {
    transform: translateX(6px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .xp-company {
    transition: none;
  }
}

.xp-role {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
  margin-top: 2px;
}

.xp-summary {
  max-width: 62ch;
  font-size: 15.5px;
  color: var(--text-2);
  margin-top: 12px;
}

.xp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

@media (min-width: 840px) {
  .xp-row {
    grid-template-columns: 200px 1fr;
    gap: 40px;
  }

  .xp-side {
    flex-direction: column;
    gap: 6px;
    padding-top: 4px;
  }
}
</style>
