import { BsLinkedin } from 'react-icons/bs';
/* eslint-disable react/no-unknown-property */
import Git from '../assets/logos/github.png';
import Tstory from '../assets/logos/tstory.svg';

export default function Header() {
    return (
        <>
            <div className="header--image-container">
                <div className="header--image"></div>
            </div>
            <div className="header--text">
                <span className="header--iam">Hi! I am </span>
                <span className="header--name">Hur HyeonBin (Max) </span>
                <span className="header--role__1">Front-End Developer</span>
                <span className="header--role__2">React Developer</span>
            </div>
            <ul className="header--links">
                <li className="header--links__1">
                    <a
                        href="https://github.com/hyeonbinHur"
                        className="header--link"
                    >
                        <img src={Git} alt="" className="header--logo" />
                        GitHub profile
                    </a>
                </li>
                <li className="header--links__1">
                    <a
                        href="https://www.linkedin.com/in/hyeonbin-hur-755a87319/"
                        className="header--link"
                    >
                        <BsLinkedin className="header--logo__linked-in" />
                        Linked in
                    </a>
                </li>
                <li className="header--links__2">
                    <a
                        href="https://uncle-hyeonb.tistory.com/"
                        className="header--link"
                    >
                        <img src={Tstory} alt="" className="header--logo" />
                        Personal Blog
                    </a>
                </li>
            </ul>
            {/* <video className="video--test">
                <source src="../assets/BUYY/test.mov" type="video/webm" />
            </video> */}
        </>
    );
}
