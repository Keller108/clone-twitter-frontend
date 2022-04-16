import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PopupForm } from '../../shared/PopupForm';
import './Greetings.css';

interface IRegister {
    visible: boolean;
    closePopup: (popupVis: boolean) => void;
}

export function Greetings({visible, closePopup}: IRegister) {
    const [isLogin, setIsLogin] = useState(true);
    const [isRegister, setIsRegister] = useState(false);
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

    if (isLogin) {
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
        ]} else if (isRegister) {
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