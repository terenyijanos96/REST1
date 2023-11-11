import { adatLeiro } from "../adatLeiro.js";

export default class UrlapView {
  #szuloElem;
  constructor(szuloElem) {
    this.#szuloElem = szuloElem;

    this.htmlOsszerak();
  }

  htmlOsszerak() {
    let htmlTartalom = ""

    for (const key in adatLeiro) {
        htmlTartalom += `
        <div>
            <label for="${key}" class="form-label">${adatLeiro[key]}</label>
            <input type="text" id="${key}" class="form-control">
        </div>
        `
    }

    this.#szuloElem.append(`<form>${htmlTartalom}</form>`)
  }
}
