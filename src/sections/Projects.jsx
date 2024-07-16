import { BiImageAlt } from 'react-icons/bi';
import { AiFillPlaySquare } from 'react-icons/ai';
import BUYY from '../assets/projects/buyy.png';
import Cpt from '../assets/projects/cpt.svg';
import Pocket from '../assets/projects/pocket.png';
import NG from '../assets/projects/ng.png';

import React from '../assets/logos/react.png';
import JS from '../assets/logos/js.png';
import S3 from '../assets/logos/s3.png';
import EC2 from '../assets/logos/ec2.png';
import Node from '../assets/logos/node.png';
import Mongo from '../assets/logos/mongo.png';
import Spring from '../assets/logos/spring.png';
import PG from '../assets/logos/pg.png';
import RDS from '../assets/logos/rds.png';
import Tailwind from '../assets/logos/tailwind.png';
import GoogleMap from '../assets/logos/googlemap.png';
import API from '../assets/logos/api.png';
import NAT from '../assets/logos/nat.png';
import Lambda from '../assets/logos/lambda.png';
import Redux from '../assets/logos/redux.png';
import Query from '../assets/logos/query.svg';
import JWT from '../assets/logos/jwt.png';
import AI from '../assets/logos/openai.png';
import SCSS from '../assets/logos/sass.png';
import ImageModal from '../modal/Images';
import Video from '../modal/Video';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openVideoModal } from '../store/videoSlice';
import { openImageModal } from '../store/imageSlice';
// import GH from '../assets/logos/github.png';

export default function Projects() {
    const videoModal = useRef(null);
    const imageModal = useRef(null);
    const dispatch = useDispatch();
    const sliceVideoTopic = useSelector((state) => state.videoSlice.topic);
    const sliceVideoIsOpen = useSelector((state) => state.videoSlice.isOpen);

    const sliceImageTopic = useSelector((state) => state.imageSlice.topic);
    const sliceImageIsOpen = useSelector((state) => state.imageSlice.isOpen);

    const handleOpenImageModal = (topic) => {
        dispatch(openImageModal({ topic: topic }));
    };

    const handleOpenVideoModal = (topic) => {
        dispatch(openVideoModal({ topic: topic }));
    };

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
                        className="detail--checkbox__1"
                        id="detail_toggle__1"
                    />
                    <label
                        htmlFor="detail_toggle__1"
                        className="detail--button__1"
                    >
                        <span className="detail--icon__1">&nbsp;</span>
                    </label>
                    <div className="detail--background__1">&nbsp;</div>
                    <div className="detail--content__1">
                        <header className="content__header">
                            <img src={BUYY} alt="" className="content__logo" />
                        </header>
                        <main className="content--body">
                            <div className="content--body__1">
                                <h3 className="heading--tertiary">Features</h3>
                                <ul className="content__ul">
                                    <li className="content--features__li">
                                        Authentication
                                        <AiFillPlaySquare
                                            onClick={() =>
                                                handleOpenVideoModal(
                                                    'BUYY_Auth'
                                                )
                                            }
                                            className="detail__video"
                                        />
                                    </li>
                                    <li className="content--features__li">
                                        Filtering
                                        <AiFillPlaySquare
                                            onClick={() =>
                                                handleOpenVideoModal(
                                                    'BUYY_Pagination'
                                                )
                                            }
                                            className="detail__video"
                                        />
                                    </li>
                                    <li className="content--features__li">
                                        Edit Item
                                        <AiFillPlaySquare
                                            onClick={() =>
                                                handleOpenVideoModal(
                                                    'BUYY_Edit'
                                                )
                                            }
                                            className="detail__video"
                                        />
                                    </li>
                                    <li className="content--features__li">
                                        Detail page &rarr; purchase Item
                                        <AiFillPlaySquare
                                            onClick={() =>
                                                handleOpenVideoModal(
                                                    'BUYY_Purchase'
                                                )
                                            }
                                            className="detail__video"
                                        />
                                    </li>
                                    <li className="content--features__li">
                                        Personal page
                                        <AiFillPlaySquare
                                            onClick={() =>
                                                handleOpenVideoModal(
                                                    'BUYY_PersonalPage'
                                                )
                                            }
                                            className="detail__video"
                                        />
                                    </li>
                                    <li className="content--features__li">
                                        Detail page &rarr; Comment
                                        <AiFillPlaySquare
                                            onClick={() =>
                                                handleOpenVideoModal(
                                                    'BUYY_Comment'
                                                )
                                            }
                                            className="detail__video"
                                        />
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
                    <input
                        type="checkbox"
                        className="detail--checkbox__2"
                        id="detail_toggle__2"
                    />
                    <label
                        htmlFor="detail_toggle__2"
                        className="detail--button__2"
                    >
                        <span className="detail--icon__2">&nbsp;</span>
                    </label>
                    <div className="detail--background__2">&nbsp;</div>
                    <div className="detail--content__2">
                        <header className="content__header">
                            <img src={Cpt} alt="" className="content__logo" />
                        </header>
                        <main className="content--body">
                            <div className="content--body__1">
                                <h3 className="heading--tertiary">Features</h3>
                                <ul className="content__ul">
                                    <li className="content--features__li">
                                        All features
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Basic - Authentication
                                        <BiImageAlt
                                            className="detail__video"
                                            onClick={() =>
                                                handleOpenImageModal('CPT_Auth')
                                            }
                                        />
                                    </li>
                                    <li className="content--features__li">
                                        Basic - Visit detail page
                                        <BiImageAlt
                                            className="detail__video"
                                            onClick={() =>
                                                handleOpenImageModal(
                                                    'CPT_Detail'
                                                )
                                            }
                                        />
                                    </li>
                                    <li className="content--features__li">
                                        Basic - Search users & groups & company
                                        & projects
                                        <BiImageAlt
                                            className="detail__video"
                                            onClick={() =>
                                                handleOpenImageModal(
                                                    'CPT_Search'
                                                )
                                            }
                                        />
                                    </li>
                                    <li className="content--features__li">
                                        Student - join & create group
                                        <BiImageAlt
                                            className="detail__video"
                                            onClick={() =>
                                                handleOpenImageModal(
                                                    'CPT_Student_group'
                                                )
                                            }
                                        />
                                    </li>
                                    <li className="content--features__li">
                                        Student - apply capstone project
                                        <BiImageAlt
                                            className="detail__video"
                                            onClick={() =>
                                                handleOpenImageModal(
                                                    'CPT_student_capstone'
                                                )
                                            }
                                        />
                                    </li>
                                    <li className="content--features__li">
                                        Company - Create capstone project
                                        <BiImageAlt
                                            className="detail__video"
                                            onClick={() =>
                                                handleOpenImageModal(
                                                    'CPT_company_create_capstone'
                                                )
                                            }
                                        />
                                    </li>
                                    <li className="content--features__li">
                                        Company - View capstone project status
                                        <BiImageAlt
                                            className="detail__video"
                                            onClick={() =>
                                                handleOpenImageModal(
                                                    'CPT_company_view_capstone'
                                                )
                                            }
                                        />
                                    </li>
                                    <li className="content--features__li">
                                        Supervisor - Edit & View capstone
                                        project
                                        <BiImageAlt
                                            className="detail__video"
                                            onClick={() =>
                                                handleOpenImageModal(
                                                    'CPT_supervisor_capstone'
                                                )
                                            }
                                        />
                                    </li>
                                    <li className="content--features__li">
                                        Admin - Review & Edit capstone project
                                        <BiImageAlt
                                            className="detail__video"
                                            onClick={() =>
                                                handleOpenImageModal(
                                                    'CPT_admin_capstone'
                                                )
                                            }
                                        />
                                    </li>

                                    <li className="content--features__li">
                                        Bsic - usecase diagram
                                        <BiImageAlt
                                            className="detail__video"
                                            onClick={() =>
                                                handleOpenImageModal(
                                                    'CPT_basic_diagram'
                                                )
                                            }
                                        />
                                    </li>
                                    <li className="content--features__li">
                                        Specific - usecase diagram
                                        <BiImageAlt
                                            className="detail__video"
                                            onClick={() =>
                                                handleOpenImageModal(
                                                    'CPT_specific_diagram'
                                                )
                                            }
                                        />
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
                                        HTML
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={JS}
                                        />
                                        CSS
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={Mongo}
                                        />
                                        JavaScript
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={S3}
                                        />
                                        Java
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={Spring}
                                        />
                                        Springboot
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={PG}
                                        />
                                        PostgreSQL
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={RDS}
                                        />
                                        RDS
                                    </li>
                                </ul>
                            </div>
                        </main>
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
                    <input
                        type="checkbox"
                        className="detail--checkbox__3"
                        id="detail_toggle__3"
                    />
                    <label
                        htmlFor="detail_toggle__3"
                        className="detail--button__3"
                    >
                        <span className="detail--icon__3">&nbsp;</span>
                    </label>
                    <div className="detail--background__3">&nbsp;</div>
                    <div className="detail--content__3">
                        <header className="content__header">
                            <img
                                src={Pocket}
                                alt=""
                                className="content__logo"
                            />
                        </header>
                        <main className="content--body">
                            <div className="content--body__1">
                                <h3 className="heading--tertiary">Features</h3>
                                <ul className="content__ul">
                                    <li className="content--features__li">
                                        Authentication
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Realtime chatting
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Comment & reply
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        CRUD Item
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        CRUD User
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Detail page
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Find user location
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Search & Filtering
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
                                            src={Redux}
                                        />
                                        Redux
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
                                        Firebase realtime database
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={S3}
                                        />
                                        Firebase Storage
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={EC2}
                                        />
                                        Redux
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={React}
                                        />
                                        Context API
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={Tailwind}
                                        />
                                        Tailwind
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={GoogleMap}
                                        />
                                        Google Map
                                    </li>
                                </ul>
                            </div>
                        </main>
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
                    <input
                        type="checkbox"
                        className="detail--checkbox__4"
                        id="detail_toggle__4"
                    />
                    <label
                        htmlFor="detail_toggle__4"
                        className="detail--button__4"
                    >
                        <span className="detail--icon__4">&nbsp;</span>
                    </label>
                    <div className="detail--background__4">&nbsp;</div>
                    <div className="detail--content__4">
                        <header className="content__header">
                            <img src={NG} alt="" className="content__logo" />
                        </header>
                        <main className="content--body">
                            <div className="content--body__1">
                                <h3 className="heading--tertiary">Features</h3>
                                <ul className="content__ul">
                                    <li className="content--features__li">
                                        Authentication & Authorization
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        CRUD Item
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        AI chatting
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Edit Chatting history
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Responsible Design
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Error page
                                        <AiFillPlaySquare className="detail__video" />
                                    </li>
                                    <li className="content--features__li">
                                        Error modal
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
                                            src={SCSS}
                                        />
                                        SCSS
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={RDS}
                                        />
                                        AWS-RDS
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={NAT}
                                        />
                                        AWS-NAT gateway
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={API}
                                        />
                                        AWS-API gateway
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={Lambda}
                                        />
                                        AWS-API Lambda function
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={PG}
                                        />
                                        PostgreSQL
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={Redux}
                                        />
                                        Redux
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={Query}
                                        />
                                        React Query
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={React}
                                        />
                                        Context API
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={JWT}
                                        />
                                        JWT
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={Node}
                                        />
                                        Node.js
                                    </li>
                                    <li className="content--tool__li">
                                        <img
                                            className="content--tool__logo"
                                            src={AI}
                                        />
                                        Assistant API
                                    </li>
                                </ul>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <Video ref={videoModal} />
            <ImageModal ref={imageModal} />
        </>
    );
}
