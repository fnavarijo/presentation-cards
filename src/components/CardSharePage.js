import { BaseComponent } from "./BaseComponent.js";

export class CardSharePage extends BaseComponent {
  constructor() {
    super('card-share-page')
  }

  onMount() {
    new QRious({
      element: this.shadowRoot.getElementById('qr'),
      value: 'https://github.com/fnavarijo'
    });
  }
}


customElements.define('card-share-page', CardSharePage)