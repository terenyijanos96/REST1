import UrlapView from "../View/Urlap/UrlapView.js"
import TablaView from "../View/Tablazat/TablaView.js";
import DataService from "../model/DataService.js";

export default class Controller{
    constructor(){
       this.dataService =  new DataService()
       this.dataService.getData("adatok.json", this.megjelenit)
       
    }

    megjelenit(list){
        new UrlapView($(".urlap"))
        new TablaView(list, $(".adatok"))
    }
}