import { BaseComponent } from "./BaseComponent.js"

export class CardViewerPage extends BaseComponent {
  constructor() {
    super('card-viewer-page')
  }
}


customElements.define('card-viewer-page', CardViewerPage)