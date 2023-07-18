import axios from "axios";

export class VehiclesService {

    url = process.env.REACT_APP_URL+'/vehicles/'

    inserir(objeto) {
        return axios.post(this.url, objeto)

    }

    alterar(objeto) {
        return axios.put(this.url, objeto)

    }

    excluir() {
        return axios.delete(this.url)
    }

    listarTodos() {
        return axios.get(this.url)

    }
}
