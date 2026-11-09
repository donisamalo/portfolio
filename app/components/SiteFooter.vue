<script setup lang="ts">
const { t } = useI18n()
const year = new Date().getFullYear()

function backToTop() {
  window.scrollTo({ top: 0 })
}
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span>© {{ year }} {{ t('footer.rights') }}</span>
      <span class="built">{{ t('footer.built') }}</span>
      <button type="button" class="top" @click="backToTop">
        {{ t('footer.top') }}
        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" />
        </svg>
      </button>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding-block: 28px;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 24px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-3);
}

.top {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  font-size: inherit;
  color: var(--text-2);
  transition: color 180ms ease;
}

.top svg {
  transition: transform 250ms var(--ease-out);
}

@media (hover: hover) and (pointer: fine) {
  .top:hover {
    color: var(--text);
  }

  .top:hover svg {
    transform: translateY(-2px);
  }
}
</style>
