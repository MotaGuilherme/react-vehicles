import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react';
import { AuthService } from '../../service/vehicles/AuthService';
import {Link} from "react-router-dom";

const Auth = () => {

    const [login, setLogin] =  useState("");
    const [password, setPassword] = useState("");
    const authService = new AuthService();
    const toast = useRef(null);

    const fazerLogin = () =>{
        authService.login(login, password, mostrarMensagemErro);
    }

    const mostrarMensagemErro = (erro) =>{
        toast.current.show({ severity: 'error', summary: 'Erro', detail: erro, life: 3000 });

    }

    return (
        <div className="surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
            <Toast ref={toast}/>
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src="images/blocks/logos/hyper.svg" alt="hyper" height="50" className="mb-3" />
                    <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                    <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                    <Link to={"/register"}>
                        <button className="p-link font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</button>
                    </Link>
                </div>

                <div>
                    <label htmlFor="login1" className="block text-900 font-medium mb-2">Login</label>
                    <InputText id="login1" type="text" className="w-full mb-3" onChange={(e)=>setLogin(e.target.value)}/>

                    <label htmlFor="password1" className="block text-900 font-medium mb-2">Password</label>
                    <InputText id="password1" type="password" className="w-full mb-3" onChange={(e)=>setPassword(e.target.value)}/>

                    <Button onClick={()=>fazerLogin()} label="Sign In" icon="pi pi-user" className="w-full" />
                </div>
            </div>
        </div>
    );
}

export default Auth;
