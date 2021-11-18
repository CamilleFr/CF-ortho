import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Home')
  }

  async getHtml() {
    return `
    <nav>
      <div class="home__header">
        <a href="/" class="animate-text">
          <h1>Dr Bruyère-Franc</h1>
        </a>
      </div>
      <div class="home__footer">
        <a href="/presentation" class="home__footer__section" data-link>
          <svg x="580" y="100" viewBox="0 0 56 6.5">
            <text x="0" y="6.4">PRESENTATION</text>
          </svg>
        </a>
        <a href="/traitements" class="home__footer__section" data-link>
          <svg x="560" y="90" viewBox="0 0 56 6.5">
            <text x="0" y="5">TRAITEMENTS</text>
          </svg>
        </a>
        <a href="/contact" class="home__footer__section" data-link>
          <svg x="560" y="100" viewBox="0 0 56 6.5">
            <text x="0" y="3.7">CONTACT</text>
          </svg>
        </a>
      </div>
    </nav>
   
    `;
  }
}