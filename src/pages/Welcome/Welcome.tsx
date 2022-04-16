import { useState } from 'react';

import './Welcome.css';
import LOGO_PATH from '../../images/twitter-logo.svg';
import { Button } from '../../shared/Button';
import { Greetings } from '../../entitites/Greetings';

export function Welcome() {
    const [greetings, openGreetings] = useState(false);

    const openPopup = () => {
        openGreetings(true);
    };

    const closeGreetings = () => {
        openGreetings(false);
    };

    return (
        <div className="auth">
            <div className="auth__img-col"></div>
            <div className="auth__content-col">
                <img className="auth__logo" src={LOGO_PATH} alt="Twitter logo"/>
                <div className="auth__auth">
                    <h1 className="auth__title">
                        Клон Twitter ;)
                        Присоединяйся
                    </h1>
                    <Button className="button_size_medium button_type_primary mb_15" btnText="Войти" action={openPopup} />
                    <Button className="button_size_medium button_type_secondary" btnText="Регистрация" action={openPopup} />
                </div>
            </div>
            <Greetings visible={greetings} closePopup={closeGreetings}/>
        </div>
    )
}