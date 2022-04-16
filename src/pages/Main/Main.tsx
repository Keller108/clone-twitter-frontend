import { Post } from '../../entitites/Post';
import { Twitter } from '../../features/Twitter';
import { Logo } from '../../shared/Logo';
import './Main.css';

export function Main() {
  return (
    <div className="main">
        <div className="main__container">
            <div className="main__toolbar">
                <Logo />
                Toolbar
            </div>
            <main className="main__main-container">
                <div className="main__title-container">
                    <h1 className="main__title">Home</h1>
                </div>
                <Twitter />
                <Post />
            </main>
            <div className="main__news-container">
                News
            </div>
        </div>
    </div>
  )
}