import axios from "axios";


export class AuthRegisterService {

    url = process.env.REACT_APP_URL + '/auth/register'

    register(login, password) {
    axios.post(this.url , {'login': login, 'password': password});
    window.location.href = "/login";

    }



}
