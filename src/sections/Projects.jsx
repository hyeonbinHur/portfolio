import { AiFillPlaySquare } from 'react-icons/ai';
import BUYY from '../assets/projects/buyy.png';
import Cpt from '../assets/projects/cpt.svg';
import Pocket from '../assets/projects/pocket.png';
import NG from '../assets/projects/ng.png';

import React from '../assets/logos/react.png';
import JS from '../assets/logos/js.png';
import S3 from '../assets/logos/s3.svg';
import EC2 from '../assets/logos/ec2.png';
import Node from '../assets/logos/node.png';
import Mongo from '../assets/logos/mongo.png';
// import GH from '../assets/logos/github.png';

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
                    <input
                        type="checkbox"
                        className="detail--checkbox"
                        id="detail_toggle"
                    />
                    <label htmlFor="detail_toggle" className="detail--button">
                        <span className="detail--icon">&nbsp;</span>
                    </label>
                    <div className="detail--background">&nbsp;</div>
                    <div className="detail--content">
                        <header className="content__header">
                            <img src={BUYY} alt="" className="content__logo" />
                        </header>
                        <main className="content--body">
                            <div className="content--body__1">
                                <h3 className="heading--tertiary">Features</h3>
                                <ul className="content__ul">
                                    <li className="content--features__li">
                                        Authentication{' '}
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Filtering
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Edit Item
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Detail page &rarr; purchase Item
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Personal page
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Detail page &rarr; Comment
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                </ul>
                            </div>
                            <div className="content--body__2">
                                <h3 className="heading--tertiary">Tools</h3>
                                <ul className="content__ul">
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={React}
                                        />
                                        React
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={JS}
                                        />
                                        JavaScript
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={Mongo}
                                        />
                                        Mongo DB
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={S3}
                                        />
                                        AWS-S3
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={EC2}
                                        />
                                        AWS-EC2
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={Node}
                                        />
                                        Node.js
                                    </li>
                                </ul>
                            </div>
                        </main>
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
