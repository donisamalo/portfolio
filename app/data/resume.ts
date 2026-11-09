export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  /** Still working here: the UI appends a localized "Present" */
  ongoing?: boolean
  type: 'full' | 'part' | 'intern'
  tags: string[]
}

export interface ProjectItem {
  id: string
  name: string
  url: string
  tech: string[]
  /** Real screenshot under public/, shown grayscale; omit to use generated cover art */
  cover?: string
  featured?: boolean
}

/** First year of professional experience (Bridestory internship) */
export const careerStartYear = 2018

export const yearsOfExperience = () => new Date().getFullYear() - careerStartYear

export const experience: ExperienceItem[] = [
  {
    id: 'mekari',
    company: 'Mekari',
    role: 'Software Engineer - Frontend',
    period: '2021',
    ongoing: true,
    type: 'full',
    tags: ['Vue 2.7', 'Vue 3', 'Mekari Pixel', 'Jest', 'Storybook', 'Datadog'],
  },
  {
    id: 'kompas',
    company: 'Kompas Gramedia',
    role: 'Frontend Engineer',
    period: '2022',
    ongoing: true,
    type: 'part',
    tags: ['Nuxt 2', 'Nuxt 3', 'Element UI', 'Ant Design', 'Keycloak', 'Sentry'],
  },
  {
    id: 'schoters',
    company: 'Schoters',
    role: 'Frontend Engineer',
    period: '2021 - 2022',
    type: 'part',
    tags: ['Nuxt 2', 'Element UI'],
  },
  {
    id: 'qoala',
    company: 'Qoala',
    role: 'Frontend Engineer',
    period: '2020 - 2021',
    type: 'full',
    tags: ['Nuxt 2', 'PWA', 'Workbox', 'GTM', 'Jest'],
  },
  {
    id: 'umroh',
    company: 'Umroh.com',
    role: 'Frontend Developer',
    period: '2019 - 2020',
    type: 'full',
    tags: ['Nuxt 2', 'Element UI', 'SEO', 'GTM', 'Google Analytics'],
  },
  {
    id: 'aktivaku',
    company: 'Aktivaku',
    role: 'Frontend Developer',
    period: '2019',
    type: 'part',
    tags: ['Nuxt 2', 'Bootstrap 4'],
  },
  {
    id: 'bridestory',
    company: 'Bridestory',
    role: 'Frontend Developer',
    period: '2018 - 2019',
    type: 'intern',
    tags: ['React', 'Nuxt 2', 'Bootstrap'],
  },
]

export const projects: ProjectItem[] = [
  {
    id: 'klikpajak',
    name: 'Klikpajak',
    url: 'https://my.klikpajak.id/',
    tech: ['Vue 2.7', 'Mekari Pixel', 'Jest', 'Datadog'],
    cover: '/covers/klikpajak.jpg',
    featured: true,
  },
  {
    id: 'jurnal',
    name: 'Jurnal',
    url: 'https://my.jurnal.id/',
    tech: ['Vue 3', 'Vue 2.7', 'Mekari Pixel', 'Storybook'],
    cover: '/covers/jurnal.jpg',
  },
  {
    id: 'kognisi',
    name: 'Kognisi',
    url: 'https://kognisi.mykg.id/',
    tech: ['Nuxt 2', 'Nuxt 3', 'Element UI', 'Ant Design', 'Keycloak', 'Sentry'],
    cover: '/covers/kognisi.jpg',
  },
  {
    id: 'qoala',
    name: 'Qoala App',
    url: 'https://www.qoala.app',
    tech: ['Nuxt 2', 'Workbox', 'GTM', 'Google Analytics'],
    cover: '/covers/qoala.jpg',
  },
  {
    id: 'umroh',
    name: 'Umroh.com',
    url: 'https://umroh.com',
    tech: ['Nuxt 2', 'Element UI', 'SEO', 'GTM', 'Google Analytics'],
    cover: '/covers/umroh.jpg',
  },
  {
    id: 'aktivaku',
    name: 'Aktivaku',
    url: 'https://web.aktivaku.com/',
    tech: ['Nuxt 2', 'Bootstrap 4'],
    cover: '/covers/aktivaku.jpg',
  },
  {
    id: 'bridestory',
    name: 'Bridestory',
    url: 'https://www.bridestory.com/',
    tech: ['React', 'Nuxt 2', 'Bootstrap'],
    cover: '/covers/bridestory.jpg',
  },
]

export const education = {
  school: 'Bina Nusantara University',
  degree: 'Computer Science',
  period: '2015 - 2019',
  gpa: '3.55',
}

export const skillGroups: { id: string; items: string[] }[] = [
  { id: 'core', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { id: 'frameworks', items: ['Vue', 'Nuxt', 'React', 'Next.js', 'Pinia', 'Vuex', 'Redux'] },
  { id: 'ui', items: ['SASS', 'CSS Frameworks', 'Storybook', 'Responsive Design', 'SEO'] },
  { id: 'quality', items: ['Jest', 'Unit Testing', 'Sentry', 'Datadog RUM', 'Lighthouse'] },
  { id: 'tooling', items: ['Vite', 'Git', 'Vercel', 'Strapi', 'Google Tag Manager'] },
]

export const contacts = {
  email: 'donisamalo01@gmail.com',
  linkedin: 'https://www.linkedin.com/in/donisamalo',
  github: 'https://github.com/donisamalo',
}

export const marqueeItems = [
  'Vue',
  'Nuxt',
  'TypeScript',
  'React',
  'Next.js',
  'Pinia',
  'SASS',
  'Vite',
  'Jest',
  'Storybook',
  'Sentry',
  'Datadog RUM',
  'SEO',
  'Strapi',
  'GTM',
  'Vercel',
]
