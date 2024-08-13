// import { BiImageAlt } from 'react-icons/bi';
// import { AiFillPlaySquare } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
// import Cpt from '../../assets/projects/cpt.svg';
// import CSS from '../../assets/logos/css.png';
// import HTML from '../../assets/logos/html.png';
// import JS from '../../assets/logos/js.png';
// import Spring from '../../assets/logos/spring.png';
// import PG from '../../assets/logos/pg.png';
// import RDS from '../../assets/logos/rds.png';
// import JAVA from '../../assets/logos/java.png';
import { useState } from 'react';

// import { useDispatch } from 'react-redux';
// import { openVideoModal } from '../../store/videoSlice';
// import { openImageModal } from '../../store/imageSlice';
// import GH from '../assets/logos/github.png';

// import GH from '../assets/logos/github.png';

import CPTDetail_1 from './detail/cpt/CPTDetail_1';
import CPTDetail_2 from './detail/cpt/CPTDetail_2';

export default function CPTDetail() {
    const [current, setCurrent] = useState(1);
    const max = 2;
    // const dispatch = useDispatch();

    // const handleOpenImageModal = (topic) => {
    //     dispatch(openImageModal({ topic: topic }));
    // };

    // const handleOpenVideoModal = (topic) => {
    //     dispatch(openVideoModal({ topic: topic }));
    // };

    return (
        <div className="detail--content__2">
            <header className="content__header">
                <label htmlFor="detail_toggle__2">
                    <span className="detail--close">
                        <AiOutlineClose />
                    </span>
                </label>
                {/* <img src={Cpt} alt="" className="content__logo" /> */}
                <span className="content--title">
                    Capstone Project Management
                </span>
            </header>
            {current > 1 && (
                <button
                    onClick={() => setCurrent((prev) => prev - 1)}
                    className="content--prev"
                >
                    <GrPrevious />
                </button>
            )}
            {current < max && (
                <button
                    onClick={() => setCurrent((prev) => prev + 1)}
                    className="content--next"
                >
                    <GrNext />
                </button>
            )}

            <main className="content--body">
                {current === 1 && <CPTDetail_1 />}
                {current === 2 && <CPTDetail_2 />}
                {/* <div className="content--body__1">
                    <h3 className="heading--tertiary">Features</h3>
                    <ul className="content__ul">
                        <li className="content--features__li">
                            All features
                            <AiFillPlaySquare
                                className="detail__video"
                                onClick={() => handleOpenVideoModal('CPT_All')}
                            />
                        </li>
                        <li className="content--features__li">
                            Basic - Authentication
                            <BiImageAlt
                                className="detail__video"
                                onClick={() => handleOpenImageModal('CPT_Auth')}
                            />
                        </li>
                        <li className="content--features__li">
                            Basic - Visit detail page
                            <BiImageAlt
                                className="detail__video"
                                onClick={() =>
                                    handleOpenImageModal('CPT_Detail')
                                }
                            />
                        </li>
                        <li className="content--features__li">
                            Basic - Search users & groups & company & projects
                            <BiImageAlt
                                className="detail__video"
                                onClick={() =>
                                    handleOpenImageModal('CPT_Search')
                                }
                            />
                        </li>
                        <li className="content--features__li">
                            Student - join & create group
                            <BiImageAlt
                                className="detail__video"
                                onClick={() =>
                                    handleOpenImageModal('CPT_Student_group')
                                }
                            />
                        </li>
                        <li className="content--features__li">
                            Student - apply capstone project
                            <BiImageAlt
                                className="detail__video"
                                onClick={() =>
                                    handleOpenImageModal('CPT_student_capstone')
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
                            Supervisor - Edit & View capstone project
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
                                    handleOpenImageModal('CPT_admin_capstone')
                                }
                            />
                        </li>

                        <li className="content--features__li">
                            Bsic - usecase diagram
                            <BiImageAlt
                                className="detail__video"
                                onClick={() =>
                                    handleOpenImageModal('CPT_basic_diagram')
                                }
                            />
                        </li>
                        <li className="content--features__li">
                            Specific - usecase diagram
                            <BiImageAlt
                                className="detail__video"
                                onClick={() =>
                                    handleOpenImageModal('CPT_specific_diagram')
                                }
                            />
                        </li>
                    </ul>
                </div>
                <div className="content--body__2">
                    <h3 className="heading--tertiary">Tools</h3>
                    <ul className="content__ul">
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={HTML} />
                            HTML
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={CSS} />
                            CSS
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={JS} />
                            JavaScript
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={JAVA} />
                            Java
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={Spring} />
                            Springboot
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={PG} />
                            PostgreSQL
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={RDS} />
                            AWS-RDS
                        </li>
                    </ul>
                </div> */}
            </main>
        </div>
    );
}
