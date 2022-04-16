import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PopupForm } from '../../shared/PopupForm';
import './Greetings.css';

interface IRegister {
    visible: boolean;
    isLogin: boolean;
    setIsLogin: (value: boolean) => void;
    setIsRegister: (value: boolean) => void;
    isRegister: boolean;
    closePopup: (popupVis: boolean) => void;
}

export function Greetings({
    visible,
    isLogin,
    setIsLogin,
    isRegister,
    setIsRegister,
    closePopup
}: IRegister) {
    let className = visible === true ? "greetings greetings_visible" : "greetings";

    const navigate = useNavigate();

    const goToMain = () => {
        navigate('/');
    };

    const closeAction = () => {
        closePopup(false);
        console.log(visible)
    };

    const activateLogin = () => {
        setIsLogin(true);
        setIsRegister(false);
    };

    const activateRegister = () => {
        setIsRegister(true);
        setIsLogin(false);
    };

    const handleShowPopup = () => {
        if (isLogin) {
            activateRegister();
        } else if (isRegister) {
            activateLogin();
        } else return
    };

    const handleApply = () => {
        goToMain();
    };

    let popupForm: any = [];

    if (isRegister === true && isLogin === false) {
        popupForm = [
            <PopupForm
                title="Регистрация"
                description="Уже зарегистрированы?"
                descriptionLink="Войти"
                btnText="Зарегистрироваться"
                closePopup={closeAction}
                btnAction={handleShowPopup}
                submitAction={handleApply}
            />
        ]} else if (isLogin === true && isRegister === false) {
            popupForm = [
                <PopupForm
                    title="Авторизация"
                    description="Еще не зарегистрированы?"
                    descriptionLink="Регистрация"
                    btnText="Войти"
                    closePopup={closeAction}
                    btnAction={handleShowPopup}
                    submitAction={handleApply}
                />
            ]
        } else popupForm = null;

    return (
        <div className={className}>
            {popupForm}
        </div>
    )
}