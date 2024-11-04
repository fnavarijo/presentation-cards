export class CardSharePage extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const page = document.getElementById('card-share-page').content.cloneNode(true)
    this.shadowRoot.appendChild(page)

    new QRious({
      element: this.shadowRoot.getElementById('qr'),
      value: 'https://github.com/fnavarijo'
    });
  }
}

customElements.define('card-share-page', CardSharePage)