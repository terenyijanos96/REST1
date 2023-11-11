export default class FejlecView {
    #obj = {};
    constructor(obj, szuloElem) {
      this.#obj = obj;
      this.szuloElem = szuloElem;
      this.htmlOsszerak();
    }
  
    htmlOsszerak() {
      let cellaTartalom = "";
  
      for (const key in this.#obj) {
        cellaTartalom += `
              <th>${this.#obj[key]}</th>˙
              `
      }
  
      this.szuloElem.append(`<tr>${cellaTartalom}</tr>`)
    }
  }
  