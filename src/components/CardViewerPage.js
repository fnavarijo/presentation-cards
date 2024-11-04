export class CardViewerPage extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const page = document.getElementById('card-viewer-page').content.cloneNode(true)
    this.shadowRoot.appendChild(page)

  }
}

customElements.define('card-viewer-page', CardViewerPage)