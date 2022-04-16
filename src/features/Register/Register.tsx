import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/Button';
import './Register.css';

interface IRegister {
    visible: boolean;
    closePopup: (popupVis: boolean) => void;
}

export function Register({visible, closePopup}: IRegister) {
    const [isLogin, setIsLogin] = useState(true);
    const [isRegister, setIsRegister] = useState(false);
    let className = visible === true ? "register register_visible" : "register";

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

    return (
        <div className={className}>
            <button onClick={closeAction} className="register__close-btn" />
            <div className="register__popup">
                {isLogin ? (
                <>
                    <h2 className="register__title">
                    Регистрация
                    </h2>
                    <form className="register__form">
                        <input type="text" className="register__input" placeholder="Ваше имя" minLength={2} maxLength={30}/>
                        <input type="text" className="register__input" placeholder="Ваша почта" minLength={2} maxLength={30}/>
                        <input type="password" className="register__input" placeholder="Ваш пароль" minLength={8} maxLength={30}/>
                        <Button className="button button_size_medium button_type_primary" btnText="Зарегистрироваться" action={() => 1}></Button>
                    </form>
                    <p className="register__go_login">
                        Уже зарегистрированы?
                    </p>
                    <span onClick={activateRegister} className="register__go_link">Войти</span>
                        </>
                    ) : isRegister ? (
                    <>
                        <h2 className="register__title">
                            Залогиниться
                        </h2>
                        <form className="register__form">
                            <input type="text" className="register__input" placeholder="Ваше имя" minLength={2} maxLength={30}/>
                            <input type="text" className="register__input" placeholder="Ваша почта" minLength={2} maxLength={30}/>
                            <input type="password" className="register__input" placeholder="Ваш пароль" minLength={8} maxLength={30}/>
                            <Button className="button button_size_medium button_type_primary" btnText="Войти" action={() => 1}></Button>
                        </form>
                        <p className="register__go_login">
                            Еще не зарегистрированы?
                        </p>
                        <span onClick={activateLogin} className="register__go_link">Регистрация</span>
                    </>
                    ) : null}
            </div>
        </div>
    )
}