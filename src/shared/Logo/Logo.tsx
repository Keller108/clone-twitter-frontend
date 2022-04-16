import './Logo.css';
import LOGO_PATH from './icons/twitter-logo.svg';

export function Logo() {
    return (
        <img className="logo" src={LOGO_PATH} alt="Twitter Logo"/>
    )
}