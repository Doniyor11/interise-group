export const onLinkClick = (id: string) => {
  const block = document.querySelector(`#${id}`)
  if (!block) return
  block.scrollIntoView(true)
}
