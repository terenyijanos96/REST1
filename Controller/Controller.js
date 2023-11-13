import UrlapView from "../View/Urlap/UrlapView.js"
import TablaView from "../View/Tablazat/TablaView.js";
import DataService from "../model/DataService.js";

export default class Controller{
    constructor(){
       this.dataService =  new DataService()
       this.dataService.getData("adatok.json", this.megjelenit)

       $(window).on("urlapKuldes", (event)=>{
            this.dataService.postData("http://localhost:3000/irok", event.detail)
       })
       
    }

    megjelenit(list){
        new UrlapView($(".urlap"))
        new TablaView(list, $(".adatok"))
    }    

}