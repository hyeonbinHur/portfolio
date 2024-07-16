/* eslint-disable react/no-unknown-property */

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
            {/* <video className="video--test">
                <source src="../assets/BUYY/test.mov" type="video/webm" />
            </video> */}
        </>
    );
}
