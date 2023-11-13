export default class SorView {
  #obj = {};
  constructor(index, obj, szuloElem) {
    this.#obj = obj;
    this.index = index;
    this.szuloElem = szuloElem;

    this.htmlOsszerak();
  }

  htmlOsszerak() {
    let cellaTartalom = "";

    for (const key in this.#obj) {
      cellaTartalom += `
            <td>${this.#obj[key]}</td>˙
        `
    }

    this.szuloElem.append(`<tr>${cellaTartalom}</tr>`)
  }
}
