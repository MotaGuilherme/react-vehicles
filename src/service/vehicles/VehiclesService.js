import axios from "axios";
import {ServiceBase} from "./ServiceBase";

export class VehiclesService extends ServiceBase{

    //rl = process.env.REACT_APP_URL+'/vehicles'

    constructor(){
        super("vehicles");
    }
    inserir(objeto) {
        console.log(objeto)
        return axios.post(this.url, objeto)

    }

    alterar(objeto, id) {
        return axios.put(this.url + '/' + id, objeto)

    }

    excluir(id) {
        return axios.delete(this.url + '/' + id)
    }

    listarTodos() {
        return axios.get(this.url)

    }
}
