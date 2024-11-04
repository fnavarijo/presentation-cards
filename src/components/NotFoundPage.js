import { BaseComponent } from "./BaseComponent.js"

export class NotFoundPage extends BaseComponent {
  constructor() {
    super('not-found-page')
  }
}

customElements.define('not-found-page', NotFoundPage)