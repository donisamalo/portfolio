<script setup lang="ts">
const head = useLocaleHead()

useHead(() => ({
  htmlAttrs: head.value.htmlAttrs,
  link: head.value.link,
  meta: head.value.meta,
}))

/* Structured data so search engines recognize the person behind the site */
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Doni Samalo',
        url: 'https://donisamalo.com',
        jobTitle: 'Frontend Engineer',
        worksFor: { '@type': 'Organization', name: 'Mekari' },
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'Bina Nusantara University' },
        knowsAbout: ['Vue', 'Nuxt', 'TypeScript', 'Frontend Engineering'],
        sameAs: [
          'https://www.linkedin.com/in/donisamalo',
          'https://github.com/donisamalo',
        ],
      }),
    },
  ],
})
</script>

<template>
  <NuxtPage />
</template>
