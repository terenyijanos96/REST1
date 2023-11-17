export default class SorView {
  #obj = {};
  #index
  #szuloElem

  constructor(index, obj, szuloElem) {
    this.#obj = obj;
    this.#index = index;
    this.#szuloElem = szuloElem;

    this.htmlOsszerak();

    $(".torles-gomb").on("click", ()=>{
      this.#esemenyLetrehozo("sorTorlese")
    })
  }

  htmlOsszerak() {
    let htmlTartalom = "";
    let gombObjLista = [
      {
        gombClassok: ["btn", "btn-outline-danger", "torles-gomb"],
        ikonClassok: ["bi", "bi-trash-fill"],
        gombSzoveg: "Törlés",
      },
      {
        gombClassok: ["btn", "btn-outline-success", "modositas-gomb"] ,
        ikonClassok: ["bi", "bi-pencil-square"],
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
          <button class="${gomb.gombClassok.join(" ")}">
            <i class="${gomb.ikonClassok.join(" ")}"></i>
            ${gomb.gombSzoveg}
          </button>
        </td>˙
      `;
    });

    this.#szuloElem.append(`<tr>${htmlTartalom}</tr>`);
  }

  getIndex(){
    return this.#index
  }

  #esemenyLetrehozo(esemenynev){
    const objektum = { index : this.getIndex() + 1}
    const esemenyem = new CustomEvent(esemenynev, { detail: objektum})
    window.dispatchEvent(esemenyem)
  }
}
