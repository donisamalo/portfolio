/**
 * v-reveal - scroll-triggered entrance.
 *
 * The hidden state is applied from JS (not in markup), so content stays
 * visible without JavaScript and for crawlers. Optional number value =
 * transition delay in ms, used for staggering siblings.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      const delay = typeof binding.value === 'number' ? binding.value : 0

      el.classList.add('reveal')
      if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              el.classList.add('in')
              io.disconnect()
            }
          }
        },
        { rootMargin: '0px 0px -10% 0px' },
      )

      io.observe(el)
      ;(el as any)._revealIO = io
    },
    unmounted(el: HTMLElement) {
      ;(el as any)._revealIO?.disconnect()
    },
    getSSRProps() {
      return {}
    },
  })
})
