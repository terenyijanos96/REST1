export default class DataService {
  constructor() {}

  async getData(vegpont, callback) {
    try {
      const response = await axios.get(vegpont);
      callback(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async postData(vegpont, adat) {
    try {
      const response = await axios.post(vegpont, adat);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  putData() {}

  deleteData() {}
}
