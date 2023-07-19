import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react';
import { AuthService } from '../../service/vehicles/AuthService';
import route from "react-router-dom/es/Route";
import {AuthRegisterService} from "../../service/vehicles/AuthRegisterService";

const Auth = () => {

    const [login, setLogin] =  useState("");
    const [password, setPassword] = useState("");
    const registerService = new AuthRegisterService();
    const toast = useRef(null);

    const register = () =>{
        registerService.register(login, password, mostrarMensagemErro);
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
                    <div className="text-900 text-3xl font-medium mb-3">Welcome!</div>
                </div>

                <div>
                    <label htmlFor="login1" className="block text-900 font-medium mb-2">Login</label>
                    <InputText id="login1" type="text" className="w-full mb-3" onChange={(e)=>setLogin(e.target.value)}/>

                    <label htmlFor="password1" className="block text-900 font-medium mb-2">Password</label>
                    <InputText id="password1" type="password" className="w-full mb-3" onChange={(e)=>setPassword(e.target.value)}/>

                    <Button onClick={()=>register()} label="Register" icon="pi pi-user" className="w-full" />
                </div>
            </div>
        </div>
    );
}

export default Auth;
