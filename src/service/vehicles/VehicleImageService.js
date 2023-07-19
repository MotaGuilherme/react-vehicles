import axios from "axios";
import {ServiceBase} from "./ServiceBase";


export class VehicleImageService extends ServiceBase{

    constructor(){
        super("/imgVehicles/");
    }
    // url = process.env.REACT_APP_URL+'/imgVehicles'

    uploadImagens(obj){
        const formData = new FormData();
        formData.append('idVehicle', obj.idVehicle);
        console.log(obj)
        formData.append('file', obj.file);
        const config ={
            headers :{
                'content-type':'multipart/form-data'
            }
        }
        return axios.post(this.url + obj.idVehicle, formData, config);
    }

    buscarPorVehicle(idVehicle){
        return this.axiosInstance.get(this.url+"/"+idVehicle);
    }

}
