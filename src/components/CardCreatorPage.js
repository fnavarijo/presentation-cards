import { loadSheet } from './BaseStyles.js'

export class CardCreatorPage extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

  }

  async connectedCallback() {
    const sheet = await loadSheet()
    this.shadowRoot.adoptedStyleSheets = [sheet]

    const page = document.getElementById('card-creator-page').content.cloneNode(true)
    this.shadowRoot.appendChild(page)

    const form = this.shadowRoot.querySelector('form[name="card-creator"]')
    form.addEventListener('submit', this.handleSubmit.bind(this))
  }

  handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const card = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      title: formData.get('title'),
      website: formData.get('website'),
      twitter: formData.get('twitter'),
      github: formData.get('github'),
      linkedin: formData.get('linkedin'),
    }

    app.router.navigate('/share')
  }
}

customElements.define('card-creator-page', CardCreatorPage)