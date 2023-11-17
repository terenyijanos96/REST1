export default class SorView {
  #obj = {};
  constructor(index, obj, szuloElem) {
    this.#obj = obj;
    this.index = index;
    this.szuloElem = szuloElem;

    this.htmlOsszerak();
  }

  htmlOsszerak() {
    let htmlTartalom = "";
    let gombObjLista = [
      {
        gombClass: "btn-outline-danger",
        ikonClass: "bi-trash-fill",
        gombSzoveg: "Törlés",
      },
      {
        gombClass: "btn-outline-success",
        ikonClass: "bi-pencil-square",
        gombSzoveg: "Módosítás",
      },
    ];

    for (const key in this.#obj) {
      htmlTartalom += `
            <td>${this.#obj[key]}</td>˙
        `;
    }

    gombObjLista.forEach((gomb) => {
      htmlTartalom += `
        <td>
          <button class="btn ${gomb.gombClass}">
            <i class="bi ${gomb.ikonClass}"></i>
            ${gomb.gombSzoveg}
          </button>
        </td>˙
      `;
    });

    this.szuloElem.append(`<tr>${htmlTartalom}</tr>`);
  }
}
