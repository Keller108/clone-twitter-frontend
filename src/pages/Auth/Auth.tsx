import { useNavigate } from 'react-router-dom';

import './Auth.css';
import LOGO_PATH from '../../images/twitter-logo.svg';
import { Button } from '../../shared/Button';
import { Register } from '../../features/Register';
import { useState } from 'react';

export function Auth() {
    const [popupVis, setPopupVis] = useState(false);
    const navigate = useNavigate();

    const goToMain = () => {
        navigate('/');
    };

    const openPopup = () => {
        setPopupVis(true);
    };

    const closePopup = () => {
        setPopupVis(false);
    };

    return (
        <>
            <div className="auth">
                <div className="auth__img-col"></div>
                <div className="auth__content-col">
                    <img className="auth__logo" src={LOGO_PATH} alt="Twitter logo"/>
                    <div className="auth__auth">
                        <h1 className="auth__title">
                            Присоединиться к нашей социальной сети
                        </h1>
                        <Button className="button_size_medium button_type_primary mb_15" btnText="Войти" action={goToMain} />
                        <Button className="button_size_medium button_type_secondary" btnText="Регистрация" action={openPopup} />
                    </div>
                </div>
            </div>
            <Register visible={popupVis} closePopup={closePopup}/>
        </>
    )
}