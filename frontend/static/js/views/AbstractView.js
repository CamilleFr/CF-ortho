export default class AbstractView {
  constructor(params) {
    this.params = params;
    console.log("passing in abstract view")
    console.log('params', params)
  }

  setTitle(title){
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}