import { AiFillGithub } from 'react-icons/ai';
import Gmail from '../assets/logos/gmail.png';
import Out from '../assets/logos/outlook.png';

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
                    https://github.com/hyeonbinHur
                </li>
            </ul>
            <div className="footer--sentence">
                Thank you for taking the time to read my portfolio!
            </div>
        </>
    );
}
