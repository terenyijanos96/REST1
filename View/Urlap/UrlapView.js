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
        let tipus = key === "nev" ? "text" : "number" 

        htmlTartalom += `
        <div>
            <label for="${key}" class="form-label">${adatLeiro[key]}</label>
            <input type="${tipus}" id="${key}" class="form-control">
        </div>
        `
    }

    htmlTartalom += `
    <button type="submit" class="btn btn-outline-success">Submit</button>
    `

    this.#szuloElem.append(`<form>${htmlTartalom}</form>`)
  }
}
