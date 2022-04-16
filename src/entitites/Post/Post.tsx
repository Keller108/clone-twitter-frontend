import './Post.css';
import USER_AVA_PATH from './images/pic_user-avatar.jpg';
import POST_ENTITY_1 from './images/pic_tweet-1.jpg';

export function Post() {
  return (
    <article className="post">
        <div className="post__header">
            <img src={USER_AVA_PATH} alt="User's avatar" className="post__user-avatar" />
            <div className="post__header-content">
                <div className="post__header-title-container">
                    <h3 className="post__header-user-name">Devon Lane</h3>
                    <p className="post__header-span post__user-nickname">@johndue</p>
                    <p className="post__header-span">23s</p>
                </div>
                <div className="post__text-content">
                    <p className="post__text-entity">Tom is in a big hurry.</p>
                </div>
            </div>
        </div>
        <div className="post__image-content">
            <img src={POST_ENTITY_1} alt="Tweet Img" className="post__image-entity"/>
        </div>
        <ul className="post__action-list">
            <li className="post__action-item"><button className="button post__action-btn"></button></li>
            <li className="post__action-item"><button className="button post__action-btn"></button></li>
            <li className="post__action-item"><button className="button post__action-btn"></button></li>
            <li className="post__action-item"><button className="button post__action-btn"></button></li>
        </ul>
        <p className="post__show-thread">Show this thread</p>
    </article>
  )
}