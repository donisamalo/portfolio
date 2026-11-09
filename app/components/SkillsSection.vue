<script setup lang="ts">
import { skillGroups } from '~/data/resume'

const { t } = useI18n()
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <SectionHeading index="04" :title="t('skills.title')" />

      <div class="skills-grid">
        <div
          v-for="(group, i) in skillGroups"
          :key="group.id"
          v-reveal="Math.min(i * 60, 180)"
          class="skill-group"
        >
          <h3 class="kicker group-title">{{ t(`skills.groups.${group.id}`) }}</h3>
          <div class="skill-items">
            <span v-for="item in group.items" :key="item" class="chip">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
}

.skill-group {
  border-top: 1px solid var(--line);
  padding-top: 20px;
}

.group-title {
  color: var(--accent);
  margin-bottom: 16px;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (min-width: 720px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 44px 56px;
  }
}

@media (min-width: 1000px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
