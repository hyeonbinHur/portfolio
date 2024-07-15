import BUYY from '../assets/projects/buyy.png';
import Cpt from '../assets/projects/cpt.svg';
import Pocket from '../assets/projects/pocket.png';
import NG from '../assets/projects/ng.png';

export default function Projects() {
    return (
        <>
            <div className="row">
                <div className="col-1-of-4 project--card">
                    <img className="project--image__buyy" src={BUYY}></img>
                    <div className="project--text">
                        <div className="project--name">BUYY</div>
                        <ul className="project--ul">
                            <li className="project--basic-info">
                                Online shoes platform
                            </li>
                            <li className="project--basic-info">React + AWS</li>

                            <li className="project--basic-info"> -- / 2022</li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-4 project--card">
                    <img className="project--image__cpt" src={Cpt}></img>
                    <div className="project--text">
                        <div className="project--name__cpt">CPT management</div>
                        <ul className="project--ul">
                            <li className="project--basic-info">
                                Project Managment
                            </li>
                            <li className="project--basic-info">Spring Boot</li>
                            <li className="project--basic-info"> -- / 2023</li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-4 project--card">
                    <img className="project--image__pocket" src={Pocket}></img>
                    <div className="project--text">
                        <div className="project--name">Pocket</div>
                        <ul className="project--ul">
                            <li className="project--basic-info">
                                Community Service
                            </li>
                            <li className="project--basic-info">
                                React + Firebase
                            </li>
                            <li className="project--basic-info">May / 2024</li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-4 project--card">
                    <img className="project--image__ng" src={NG}></img>
                    <div className="project--text">
                        <div className="project--name">Name Gacha</div>
                        <ul className="project--ul">
                            <li className="project--basic-info">
                                Ai-powered chatting
                            </li>
                            <li className="project--basic-info">React + AWS</li>
                            <li className="project--basic-info">July / 2024</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
