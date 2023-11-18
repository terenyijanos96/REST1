export default class DataService {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8000/api/';

  }

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

  async deleteData(vegpont, index, hibaCallback) {
    try {
      const response = await axios.delete(vegpont + "/" + index);
      console.log(response);
    } catch (error) {
      hibaCallback(error)
    }
  }

  putData() {}
}
