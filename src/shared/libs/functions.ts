export const functions = (date: string) => {
  return new Date(date).toLocaleString()
}

export const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1)

export const onScrollInto = (id: string) => {
  const block = document.querySelector(`#${id}`)
  if (!block) return
  block.scrollIntoView(true)
}
