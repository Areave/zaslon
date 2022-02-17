import React, {useState, useRef} from "react";
import './authorizationPage.scss';
import {sassTrue} from "sass";

const AuthorizationPage: React.FC<any> = (props) => {
    return <div className="authorization">
        <div className="authorization-wrapper">
            <form action="" className="authorization-form">
                <div className="login">
                    <div className="label">Логин</div>
                    <input type="text" className="login-input"/>
                </div>
                <div className="password">
                    <div className="label">Пароль</div>
                    <input type="password" className="password-input"/>
                </div>
                <div className="remember-wrapper">
                    <input type="checkbox"/>
                    <span className="checkbox-label">Запомнить меня</span>
                </div>
                <div className="buttons-wrapper">
                    <button className="registration-button">Регистрация</button>
                    <button className="login-button">Вход</button>
                </div>
                <span className="forget-password">Забыли пароль?</span>
            </form>
        </div>
    </div>
};

export default AuthorizationPage;