export default class DataService {
  constructor() {
    console.log(" data service ");
  }

  getData(vegpont, callback) {
    axios
      .get(vegpont)
      .then(function (response) {
        callback(response.data.irok)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        
      });
  }

  postData() {}

  putData() {}

  deleteData() {}
}
