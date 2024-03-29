import React  from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {AuthService} from "./service/vehicles/AuthService";

export const AppTopbar = (props) => {

    const authService = new AuthService();

    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo">
                <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/logo-dark.svg' : 'assets/layout/images/logo-white.svg'} alt="logo"/>
                <span>SAKAI</span>
            </Link>

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars"/>
            </button>

            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>

                <ul className={classNames("layout-topbar-menu lg:flex origin-top", {'layout-topbar-menu-mobile-active': props.mobileTopbarMenuActive })}>

                    <li>
                        <button className="p-link layout-topbar-button" onClick={() => authService.sair()}>
                            <i className="pi pi-user"/>
                            <span>Sair</span>
                        </button>
                    </li>
                </ul>
        </div>
    );
}
