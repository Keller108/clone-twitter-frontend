import './Login.css';
import { Button } from '../../shared/Button';

interface ILogin {
    visible: boolean;
    closePopup: (popupVis: boolean) => void;
}

export function Login({visible, closePopup}: ILogin) {
    let className = visible === true ? "register register_visible" : "register";

    const closeAction = () => {
        closePopup(false);
        console.log(visible)
    };

    return (
        <div className={className}>
            <button onClick={closeAction} className="register__close-btn" />
            <div className="register__popup">
                <h2 className="register__title">
                    Залогиниться
                </h2>
                <form className="register__form">
                    <input type="text" className="register__input" placeholder="Ваше имя" minLength={2} maxLength={30}/>
                    <input type="text" className="register__input" placeholder="Ваша почта" minLength={2} maxLength={30}/>
                    <input type="password" className="register__input" placeholder="Ваш пароль" minLength={8} maxLength={30}/>
                    <Button className="button button_size_medium button_type_primary" btnText="Зарегистрироваться" action={() => 1}></Button>
                </form>
                <p className="register__go_login">
                    Еще не зарегистрированы?
                    Регистрация
                </p>
            </div>
        </div>
    )
}