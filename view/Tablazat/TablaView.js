import SorView from "./SorView.js";
import FejlecView from "./fejlecView.js";
import {adatLeiro} from "../adatLeiro.js";

export default class TablaView{
    #lista = [];

    constructor(lista, szuloElem){
        this.#lista = lista;
        szuloElem.append(`
            <table class="table table-striped">
                <thead></thead>
                <tbody></tbody>
            </table>
        `)

        this.theadElem = szuloElem.find("thead")
        this.tbodyElem = szuloElem.find("tbody")
        new FejlecView(adatLeiro, this.theadElem)
        this.sorMegjelenito()
    }

    sorMegjelenito(){
        let index = 1

        this.#lista.forEach((sor)=> {
            new SorView(index++, sor, this.tbodyElem)
        });
    }
}