import './Post.css';

interface IPost {
    userAvatar: string;
    postImg: string;
}

export function Post({userAvatar, postImg}: IPost) {
  return (
    <article className="post">
        <div className="post__header">
            <img src={userAvatar} alt="User's avatar" className="post__user-avatar" />
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
            <img src={postImg} alt="Tweet Img" className="post__image-entity"/>
        </div>
        <ul className="post__action-list">
            <li className="post__action-item">
                <button className="post__action-btn post__action-btn_type_comment"/>
                <p className="post__action-counter">108</p>
            </li>
            <li className="post__action-item">
                <button className="post__action-btn post__action-btn_type_retweet"/>
                <p className="post__action-counter">108</p>
            </li>
            <li className="post__action-item">
                <button className="post__action-btn post__action-btn_type_heart"/>
                <p className="post__action-counter">108</p>
            </li>
            <li className="post__action-item">
                <button className="post__action-btn post__action-btn_type_share"/>
                <p className="post__action-counter">108</p>
            </li>
        </ul>
        <p className="post__show-thread">Show this thread</p>
    </article>
  )
}