export async function loadSheet() {
  const resetStyles = await fetch('/styles/reset.css').then(res => res.text())
  const componentStyles = await fetch('/styles/components.css').then(res => res.text())

  const sheet = new CSSStyleSheet();
  sheet.replaceSync(resetStyles + '\n' + componentStyles)

  return sheet
}