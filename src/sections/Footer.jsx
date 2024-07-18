import { AiFillGithub } from 'react-icons/ai';
import Gmail from '../assets/logos/gmail.png';
import Out from '../assets/logos/outlook.png';
import Linked from '../assets/logos/linked.png';

export default function Footer() {
    return (
        <>
            <h3 className="footer--heading heading--tertiary">Contact</h3>
            <ul className="footer--ul">
                <li className="footer--li">
                    <img src={Gmail} alt="" className="footer--icon" />
                    uncle.hyeonb@gmail.com
                </li>
                <li className="footer--li">
                    <img src={Out} alt="" className="footer--icon" />
                    s3740878@rmit.edu.vn
                </li>
                <li className="footer--li">
                    <AiFillGithub className="footer--icon__github" />
                    <a
                        href="https://github.com/hyeonbinHur"
                        className="footer--link"
                    >
                        GitHub Profile
                    </a>
                </li>
                <li className="footer--li">
                    <img src={Linked} alt="" className="footer--icon" />
                    <a
                        href="https://www.linkedin.com/in/hyeonbin-hur-755a87319/"
                        className="footer--link"
                    >
                        Linkedin Profile
                    </a>
                </li>
            </ul>
            <div className="footer--sentence">
                Thank you for taking the time to read my portfolio!
            </div>
        </>
    );
}
