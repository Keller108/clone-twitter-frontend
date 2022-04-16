import { Button } from '../Button';
import './PopupForm.css';

interface IPopupForm {
    title: string;
    description: string;
    descriptionLink: string;
    btnText: string;
    closePopup: (popupVis: boolean) => void;
    btnAction: () => void;
    submitAction: () => void;
}

export function PopupForm({
    title,
    description,
    descriptionLink,
    btnText,
    closePopup,
    btnAction,
    submitAction
    }: IPopupForm) {
    const closeAction = () => {
        closePopup(false);
    };

    return (
        <div className="popup-form">
            <button onClick={closeAction} className="popup-form__close-btn" />
            <h2 className="popup-form__title">{title}</h2>
                <form className="popup-form__form">
                    <input type="text" className="popup-form__input" placeholder="Ваше имя" minLength={2} maxLength={30}/>
                    <input type="text" className="popup-form__input" placeholder="Ваша почта" minLength={2} maxLength={30}/>
                    <input type="password" className="popup-form__input" placeholder="Ваш пароль" minLength={8} maxLength={30}/>
                    <Button className="button button_size_medium button_type_primary" btnText={btnText} action={submitAction}></Button>
                </form>
                <p className="popup-form__go_login">
                    {description}
                </p>
                <span onClick={btnAction} className="popup-form__go_link">{descriptionLink}</span>
        </div>
    )
}