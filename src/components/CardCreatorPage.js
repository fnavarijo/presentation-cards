import { BaseComponent } from './BaseComponent.js'

export class CardCreatorPage extends BaseComponent {
  constructor() {
    super('card-creator-page')
  }

  onMount() {
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