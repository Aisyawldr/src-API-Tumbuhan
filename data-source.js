import { response } from "express";
import plants from "./plant.js";

class DataSource {
  static searchPlant(keyword) {
    return fetch(`https://perenual.com/api/species-list?page=1&key=sk-RQr164495ae1430ff652`)
    .then(response=>{
      return response.json();
    })
    .then(responseJson=>{
      if(responseJson.merk){
        return Promise.resolve(responseJson.merk);
      } else{
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;