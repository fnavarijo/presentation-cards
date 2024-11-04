export class NotFoundPage extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const page = document.getElementById('not-found-page').content.cloneNode(true)
    this.shadowRoot.appendChild(page)

  }
}

customElements.define('not-found-page', NotFoundPage)