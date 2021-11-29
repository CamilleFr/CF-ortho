import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Presentation')
  }

  async getHtml() {
    const html = 
    `  <div class="presentation">
          <div class="transition transition-1 is-active"></div>
          <h1>Dr Caroline Bruyère Franc</h1>
          <h2>Chirurgien dentiste, orthodontiste</h2>
            <div class="presentation__body">
              <p> Diplômée de la faculté de médecine de Paris en médecine dentaire et de la,
                le Dr Bruyère-Franc a poursuivi sa spécialisation en chirurgie orthodontique 
                au sein de l'université de Montrouge.
              </p>
            </div>
          <nav>
          <div class="views__footer">
                <a href="/presentation" class="home__footer__section__presentation" data-link>
                  <svg x="100" y="20" viewBox="0 0 10 2">
                    <text x="0" y="2">PRESENTATION</text>
                  </svg>
                </a>
              <a href="/traitements" class="home__footer__section__traitements" data-link>
                <svg x="100" y="20" viewBox="0 0 10 2">
                  <text x="0" y="2">TRAITEMENTS</text>
                </svg>
              </a>
              <a href="/contact" class="home__footer__section__contact" data-link>
                <svg x="100" y="20" viewBox="0 0 10 2">
                  <text x="0" y="1">CONTACT</text>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      `
      return html
  }
}