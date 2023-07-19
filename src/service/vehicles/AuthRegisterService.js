import axios from "axios";


export class AuthRegisterService {

    url = process.env.REACT_APP_URL + '/auth/register'

    register(login, password, role) {
    axios.post(this.url , {'login': login, 'password': password, 'role': role});
    window.location.href = "/login";

    }



}
