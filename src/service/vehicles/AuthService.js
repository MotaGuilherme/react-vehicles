import axios from "axios";

export class AuthService {

    TOKEN_KEY = "my-secret-key";
    url = process.env.REACT_APP_URL + '/auth/login'


    constructor() {
        this.axiosInstance = axios.create({
            baseURL: process.env.REACT_APP_URL,
        });

        this.axiosInstance.interceptors.request.use((config) => {
            const token = new AuthService().getToken();
            console.log(token)
            const authRequestToken = token ? `Bearer ${token}`: '';
            config.headers.common['Authorization'] = authRequestToken;
            return config;
        },
            (error) => Promise.reject(error)
        );
    }


    login(login, password, mensagemErro) {
        axios.post(this.url , {'login': login, 'password': password}).then(res=>{
            localStorage.setItem(this.TOKEN_KEY, res.data.token);
            window.location.href = "/#/vehicles";
        }).catch(error=> {
            mensagemErro(error.response.data.message);
        })
    }

    autenticado(){
        return this.getToken()!=null;
    }

    sair(){
        localStorage.removeItem(this.TOKEN_KEY);
        window.location.href = "/#/auth";
    }

    getToken(){
        return localStorage.getItem(this.TOKEN_KEY);
    }
}
