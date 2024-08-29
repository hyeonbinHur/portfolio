import Github from '../../../../assets/logos/github.png';
import { BsEyeFill } from 'react-icons/bs';
export default function NGDetail_5() {
    return (
        <div className="ng-detail--url">
            <ul className="link--ul">
                <li className="link__1 link">
                    <img
                        src={Github}
                        alt="github logo"
                        className="link--logo"
                    />
                    GitHub Front-End : &nbsp;
                    <a href="https://github.com/hyeonbinHur/namegacha_frontend">
                        here
                    </a>
                </li>
                <li className="link__2 link">
                    <img
                        src={Github}
                        alt="github logo"
                        className="link--logo"
                    />
                    GitHub Back-End : &nbsp;
                    <a href="https://github.com/hyeonbinHur/Name_Gacha_aws_lambda">
                        here
                    </a>
                </li>
                <li className="link__3 link">
                    <BsEyeFill
                        className="link--eye"
                        aria-label="Live server svg"
                    />
                    Live sever : &nbsp;
                    <a href="https://hyeonbinhur.github.io/namegacha/"> here</a>
                </li>
                <li className="link__4 link">
                    Test ID : <span>&nbsp; test7</span>
                </li>
                <li className="link__4 link">
                    Test PW : <span>&nbsp; test123</span>
                </li>
            </ul>
        </div>
    );
}
