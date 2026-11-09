export function useTheme() {
  const isLight = useState('theme-light', () => false)

  onMounted(() => {
    isLight.value = document.documentElement.classList.contains('light')
  })

  function toggle() {
    isLight.value = !isLight.value
    document.documentElement.classList.toggle('light', isLight.value)
    try {
      localStorage.setItem('theme', isLight.value ? 'light' : 'dark')
    } catch {
      /* storage unavailable (private mode) - theme still toggles for this visit */
    }
  }

  return { isLight, toggle }
}
