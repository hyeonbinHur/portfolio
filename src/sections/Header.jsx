import Profile from '../assets/images/profile.jpg';

export default function Header() {
    return (
        <div className="header">
            <div className="header--text"></div>
            <div className="header--image-container">
                <img src={Profile} alt="" className="header--image" />
            </div>
        </div>
    );
}
