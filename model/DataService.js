export default class DataService {
  constructor() {
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
  }

  postData(vegpont, adat) {
    axios
      .post(vegpont, adat)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  putData() {}

  deleteData() {}
}
