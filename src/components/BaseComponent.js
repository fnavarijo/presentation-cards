import { loadSheet } from './BaseStyles.js'

export class BaseComponent extends HTMLElement {
  #templateId

  constructor(templateId) {
    super()

    this.#templateId = templateId

    this.attachShadow({ mode: 'open' })
  }

  async connectedCallback() {
    // Shadow DOM doesn't have access to the global styles.
    // We are constructing stylesheet and passing it to the shadow DOM.
    const sheet = await loadSheet()
    this.shadowRoot.adoptedStyleSheets = [sheet]

    const page = document.getElementById(this.#templateId).content.cloneNode(true)
    this.shadowRoot.appendChild(page)

    this.onMount()
  }

  onMount() {
    // To be implemented by the child class
  }
}