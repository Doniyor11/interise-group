export const onLinkClick = (id: string) => {
  const block = document.querySelector(`#${id}`)
  if (!block) return

  // Ищем фиксированный header разными способами
  const header =
    document.querySelector('header[style*="position: fixed"]') ||
    document.querySelector('nav[style*="position: fixed"]') ||
    document.querySelector(".navbarWrapper") ||
    document.querySelector("header")

  const headerHeight = header ? (header as HTMLElement).offsetHeight : 80
  const additionalOffset = 20 // Дополнительный отступ для красоты

  const elementTop = block.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementTop - headerHeight - additionalOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })
}
