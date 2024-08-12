import { AiFillPlaySquare } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

import NG from '../../assets/projects/ng.png';
import React from '../../assets/logos/react.png';
import JS from '../../assets/logos/js.png';
import Node from '../../assets/logos/node.png';
import PG from '../../assets/logos/pg.png';
import RDS from '../../assets/logos/rds.png';
import API from '../../assets/logos/api.png';
import NAT from '../../assets/logos/nat.png';
import Lambda from '../../assets/logos/lambda.png';
import Redux from '../../assets/logos/redux.png';
import Query from '../../assets/logos/query.svg';
import JWT from '../../assets/logos/jwt.png';
import AI from '../../assets/logos/openai.png';
import SCSS from '../../assets/logos/sass.png';

import { useDispatch } from 'react-redux';
import { openVideoModal } from '../../store/videoSlice';
// import { openImageModal } from '../../store/imageSlice';

export default function NGDetail() {
    const dispatch = useDispatch();

    // const handleOpenImageModal = (topic) => {
    //     dispatch(openImageModal({ topic: topic }));
    // };

    const handleOpenVideoModal = (topic) => {
        dispatch(openVideoModal({ topic: topic }));
    };

    return (
        <div className="detail--content__4">
            <label htmlFor="detail_toggle__4">
                <span className="detail--close">
                    <AiOutlineClose />
                </span>
            </label>

            <header className="content__header">
                <img src={NG} alt="" className="content__logo__ng" />
            </header>

            <main className="content--body">
                <div className="content--body__1">
                    <h3 className="heading--tertiary">Features</h3>
                    <ul className="content__ul">
                        <li className="content--features__li">
                            Authentication & Authorization
                            <AiFillPlaySquare
                                className="detail__video"
                                onClick={() => handleOpenVideoModal('NG_Auth')}
                            />
                        </li>
                        <li className="content--features__li">
                            Sidebar Feature
                            <AiFillPlaySquare
                                className="detail__video"
                                onClick={() => handleOpenVideoModal('NG_Side')}
                            />
                        </li>
                        <li className="content--features__li">
                            AI chatting
                            <AiFillPlaySquare
                                className="detail__video"
                                onClick={() => handleOpenVideoModal('NG_AI')}
                            />
                        </li>
                        <li className="content--features__li">
                            DetailPage
                            <AiFillPlaySquare
                                className="detail__video"
                                onClick={() =>
                                    handleOpenVideoModal('NG_Detail')
                                }
                            />
                        </li>
                        <li className="content--features__li">
                            Error Handling
                            <AiFillPlaySquare
                                className="detail__video"
                                onClick={() => handleOpenVideoModal('NG_ERROR')}
                            />
                        </li>
                        <li className="content--features__li">
                            Responsible Design
                            <AiFillPlaySquare
                                className="detail__video"
                                onClick={() =>
                                    handleOpenVideoModal('NG_Response')
                                }
                            />
                        </li>
                    </ul>
                </div>
                <div className="content--body__2">
                    <h3 className="heading--tertiary">Tools</h3>
                    <ul className="content__ul">
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={React} />
                            React
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={Redux} />
                            Redux
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={Query} />
                            React Query
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={React} />
                            Context API
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={JS} />
                            JavaScript
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={SCSS} />
                            SCSS
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={AI} />
                            Assistant API
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={RDS} />
                            AWS-RDS
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={NAT} />
                            AWS-NAT gateway
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={API} />
                            AWS-API gateway
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={Lambda} />
                            AWS-API Lambda function
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={PG} />
                            PostgreSQL
                        </li>

                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={JWT} />
                            JWT
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={Node} />
                            Node.js
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
