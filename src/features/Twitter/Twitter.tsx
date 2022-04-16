import './Twitter.css';
import AVA_PATH from './icons/pic-avatar.png';

export function Twitter() {
    return (
        <div className="twitter">
            <div className="twitter__avatar-container">
                <img src={AVA_PATH} alt="Аватар"/>
            </div>
            <div className="twitter__content">
                <textarea className="twitter__input" rows={3} placeholder="What's happening?" />
                <div className="twitter__action-container">
                    <ul className="twitter__functional-list">
                        <li className="twitter__functional-item">
                            <button
                                className="twitter__functional-btn twitter__functional-btn_type_image"
                                type="button"
                                aria-label="Button action"
                            />
                        </li>
                        <li className="twitter__functional-item">
                            <button
                                className="twitter__functional-btn twitter__functional-btn_type_gif"
                                type="button"
                                aria-label="Button action"
                            />
                        </li>
                        <li className="twitter__functional-item">
                            <button
                                className="twitter__functional-btn twitter__functional-btn_type_ask"
                                type="button"
                                aria-label="Button action"
                            />
                        </li>
                        <li className="twitter__functional-item">
                            <button
                                className="twitter__functional-btn twitter__functional-btn_type_smile"
                                type="button"
                                aria-label="Button action"
                            />
                        </li>
                        <li className="twitter__functional-item">
                            <button
                                className="twitter__functional-btn twitter__functional-btn_type_date"
                                type="button"
                                aria-label="Button action"
                            />
                        </li>
                    </ul>
                    <button className="button twitter__twit-btn" type="button">Tweet</button>
                </div>
            </div>
        </div>
    )
}