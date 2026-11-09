<script setup lang="ts">
import { yearsOfExperience } from '~/data/resume'

const { t } = useI18n()
const years = yearsOfExperience()

useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description', { years }),
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description', { years }),
  ogType: 'website',
  ogImage: 'https://donisamalo.com/og.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <SiteHeader />
    <main>
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>
