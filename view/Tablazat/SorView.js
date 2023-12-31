export default class SorView {
  #obj = {};
  #szuloElem

  constructor(id, obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.htmlOsszerak();
    
    $(".torles-gomb:last").on("click", (event)=> {
      event.preventDefault()
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


  #esemenyLetrehozo(esemenynev){
    
    console.log(this.#obj.id)
    const esemenyem = new CustomEvent(esemenynev, { detail: this.#obj.id})
    window.dispatchEvent(esemenyem)
  }
}
