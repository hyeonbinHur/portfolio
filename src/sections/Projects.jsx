import { BsEyeFill } from 'react-icons/bs';
import Cpt from '../assets/projects/cpt-logo.png';
import Pocket from '../assets/projects/pocket.png';
import NG from '../assets/projects/ng.png';

import Git from '../assets/logos/github.png';

import ImageModal from '../modal/Images';
import Video from '../modal/Video';

import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
// import GH from '../assets/logos/github.png';

import PocketDetail from './project/PocketDetail.jsx';
import NGDetail from './project/NGDetail.jsx';
import CPTDetail from './project/CPTDetail.jsx';

export default function Projects() {
    const videoModal = useRef(null);
    const imageModal = useRef(null);
    const sliceVideoTopic = useSelector((state) => state.videoSlice.topic);
    const sliceVideoIsOpen = useSelector((state) => state.videoSlice.isOpen);
    const sliceImageTopic = useSelector((state) => state.imageSlice.topic);
    const sliceImageIsOpen = useSelector((state) => state.imageSlice.isOpen);
    useEffect(() => {
        if (sliceVideoIsOpen) {
            if (sliceVideoTopic !== null) {
                videoModal.current.open();
            }
        }
    }, [sliceVideoIsOpen, sliceVideoTopic]);
    useEffect(() => {
        if (sliceImageIsOpen) {
            if (sliceImageTopic !== null) {
                imageModal.current.open();
            }
        }
    }, [sliceImageIsOpen, sliceImageTopic]);

    return (
        <>
            <h3 className="heading--tertiary project--heading">Projects</h3>
            <div className="time_line">
                <div className="time_line__circle"></div>
                <div className="time_line__circle"></div>
                <div className="time_line__circle"></div>
            </div>

            <div className="row">
                <div className="project--card">
                    <div className="project--team">Personal Project</div>
                    <span className="project--period">
                        May.2024 - July.2024 (2 Months)
                    </span>
                    <div className="project--image">
                        <img className="project--image__ng" src={NG}></img>
                    </div>
                    <div className="project--text">
                        <div className="project--name">Name Gacha</div>
                        <ul className="project--ul">
                            <li className="project--basic-info">
                                Ai-powered chatting
                            </li>
                            <li className="project--basic-info">
                                React + AWS + OpenAI
                            </li>
                            <li className="project--basic-info__link">
                                <p className="project--basic-info__link__1">
                                    <img src={Git} className="project--git" />
                                    <a
                                        href="https://github.com/hyeonbinHur/Name_Gacha_aws_lambda"
                                        className="link"
                                    >
                                        Back-End Code
                                    </a>
                                </p>
                                <p className="project--basic-info__link__2">
                                    <img src={Git} className="project--git" />
                                    <a
                                        href="https://github.com/hyeonbinHur/namegacha_frontend"
                                        className="link"
                                    >
                                        Front-End Code
                                    </a>
                                </p>
                                <p className="project--basic-info__link__3">
                                    <BsEyeFill className="project--live" />
                                    <a
                                        href="https://hyeonbinhur.github.io/namegacha/"
                                        className="link"
                                    >
                                        Live server
                                    </a>
                                </p>
                            </li>

                            <li className="project--basic-info">
                                <label htmlFor="detail_toggle__4">
                                    <span className="detail--btn">
                                        Detail <span>&rarr;</span>
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <input
                        type="checkbox"
                        className="detail--checkbox__4"
                        id="detail_toggle__4"
                    />
                    <NGDetail />
                </div>

                <div className="project--card">
                    <div className="project--team">Personal Project</div>
                    <span className="project--period">
                        May.2024 - July.2024 (2 Months)
                    </span>
                    <div className="project--image">
                        <img
                            className="project--image__pocket"
                            src={Pocket}
                        ></img>
                    </div>
                    <div className="project--text">
                        <div className="project--name">Pocket</div>
                        <ul className="project--ul">
                            <li className="project--basic-info">
                                Community Service
                            </li>
                            <li className="project--basic-info">
                                React + Firebase
                            </li>
                            <li className="project--basic-info__link">
                                <p className="project--basic-info">
                                    <img src={Git} className="project--git" />
                                    <a
                                        href="https://github.com/hyeonbinHur/DDock-DDock"
                                        className="link"
                                    >
                                        Pocket Code
                                    </a>
                                </p>
                            </li>
                            <li className="project--basic-info">
                                <label htmlFor="detail_toggle__3">
                                    <span className="detail--btn">
                                        Detail <span>&rarr;</span>
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>

                    <input
                        type="checkbox"
                        className="detail--checkbox__3"
                        id="detail_toggle__3"
                    />
                    <PocketDetail />
                </div>
                <div className="project--card">
                    <div className="project--team">Group of 4</div>
                    <span className="project--period">
                        May.2024 - July.2024 (2 Months)
                    </span>
                    <div className="project--image">
                        <img className="project--image__cpt" src={Cpt}></img>
                    </div>
                    <div className="project--text">
                        <div className="project--name">CPT management</div>
                        <ul className="project--ul">
                            <li className="project--basic-info">
                                Project Management
                            </li>
                            <li className="project--basic-info">
                                Spring Boot + HTML/CSS/JS
                            </li>
                            <li className="project--basic-info__link">
                                <p className="project--basic-info">
                                    <img src={Git} className="project--git" />
                                    <a
                                        href="https://github.com/hyeonbinHur/CapstoneProjectManagementSystem"
                                        className="link"
                                    >
                                        CPT Management Code
                                    </a>
                                </p>
                            </li>
                            <li className="project--basic-info">
                                <label htmlFor="detail_toggle__2">
                                    <span className="detail--btn">
                                        Detail <span>&rarr;</span>
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <input
                        type="checkbox"
                        className="detail--checkbox__2"
                        id="detail_toggle__2"
                    />
                    <CPTDetail />
                </div>
            </div>
            <Video ref={videoModal} />
            <ImageModal ref={imageModal} />
        </>
    );
}
