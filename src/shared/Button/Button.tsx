import './Button.css';

interface IButton {
    className: string;
    btnText: any;
    action: () => void;
}

export function Button({className, btnText, action}: IButton) {
    return (
        <button onClick={action} className={'button '+ className} type="button" aria-label={btnText}>{btnText}</button>
    )
}