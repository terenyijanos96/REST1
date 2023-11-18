import UrlapView from "../view/Urlap/UrlapView.js";
import TablaView from "../view/Tablazat/TablaView.js";
import DataService from "../model/DataService.js";

export default class Controller {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getData("flights", this.megjelenit);

    $(window).on("urlapKuldes", (event) => {
      this.dataService.postData("flights", event.detail);
    });

    $(window).on("sorTorlese", (event) => {
      this.dataService.deleteData("flights", event.detail, this.hibaCallback)
    });

    $(window).on("sorModositas");
  }

  hibaCallback(err){
    const hibaKod= err.response.status
    switch (hibaKod) {
      case value:
        
        break;
    
      default:
        break;
    }
  }

  megjelenit(list) {
    new UrlapView($(".urlap"));
    new TablaView(list, $(".adatok"));
  }
}
