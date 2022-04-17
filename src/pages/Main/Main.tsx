import { Post } from '../../entitites/Post';
import { Twitter } from '../../features/Twitter';
import { Logo } from '../../shared/Logo';
import './Main.css';
import { USER_AVA_PATH_1} from '../../shared/const/PostConst/PostConst';
import { USER_AVA_PATH_2} from '../../shared/const/PostConst/PostConst';
import { POST_ENTITY_1} from '../../shared/const/PostConst/PostConst';
import { POST_ENTITY_2} from '../../shared/const/PostConst/PostConst';

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
                <Post userAvatar={USER_AVA_PATH_1} postImg={POST_ENTITY_1}/>
                <Post userAvatar={USER_AVA_PATH_2} postImg={POST_ENTITY_2}/>
            </main>
            <div className="main__news-container">
                News
            </div>
        </div>
    </div>
  )
}