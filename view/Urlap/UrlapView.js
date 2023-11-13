import { adatLeiro } from "../adatLeiro.js";

export default class UrlapView {
  #szuloElem;
  constructor(szuloElem) {
    this.#szuloElem = szuloElem;

    this.htmlOsszerak();
    $("form").on("submit", (e) => {
      e.preventDefault();
      this.#esemenyLetrehozo("urlapKuldes");
    });
  }

  htmlOsszerak() {
    let htmlTartalom = ""

    for (const key in adatLeiro) {
        let tipus = key === "nev" ? "text" : "number" 

        htmlTartalom += `
        <div class="form-group">
            <label for="${key}" class="form-label">${adatLeiro[key]}</label>
            <input type="${tipus}" id="${key}" name="${key}" class="form-control">
        </div>
        `
    }

    htmlTartalom += `
    <button type="submit" class="btn btn-outline-success">Submit</button>
    `

    this.#szuloElem.append(`<form>${htmlTartalom}</form>`);
  }

  urlapAdatKikero() {
    const obj = {};
    for (const key in adatLeiro) {
      obj[key] = $(`form input[name=${key}]`).val()
    }

    return obj
  }

  #esemenyLetrehozo(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, {
      detail: this.urlapAdatKikero(),
    });

    window.dispatchEvent(esemenyem);
  }
}
