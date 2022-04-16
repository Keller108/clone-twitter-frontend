import './Register.css';
import { Button } from '../../shared/Button';

interface IRegister {
    visible: boolean;
    closePopup: (popupVis: boolean) => void;
}

export function Register({visible, closePopup}: IRegister) {
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
                    Регистрация
                </h2>
                <form className="register__form">
                    <input type="text" className="register__input" placeholder="Ваше имя"/>
                    <input type="text" className="register__input" placeholder="Ваша почта"/>
                    <input type="text" className="register__input" placeholder="Ваш пароль"/>
                    <Button className="button button_size_medium button_type_primary" btnText="Регистрация" action={() => 1}></Button>
                </form>
                <p className="register__go_login">
                    Уже зарегистрированы? Войти
                </p>
            </div>
        </div>
    )
}