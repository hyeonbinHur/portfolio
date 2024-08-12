import { BiImageAlt } from 'react-icons/bi';
import { AiFillPlaySquare } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

import Pocket from '../../assets/projects/pocket.png';
import React from '../../assets/logos/react.png';
import JS from '../../assets/logos/js.png';
import Tailwind from '../../assets/logos/tailwind.png';
import GoogleMap from '../../assets/logos/googlemap.png';
import Redux from '../../assets/logos/redux.png';
import Storage from '../../assets/logos/storage.png';
import Real from '../../assets/logos/realtime.png';

import { useDispatch } from 'react-redux';
import { openVideoModal } from '../../store/videoSlice';
import { openImageModal } from '../../store/imageSlice';

export default function PocketDetail() {
    const dispatch = useDispatch();

    const handleOpenImageModal = (topic) => {
        dispatch(openImageModal({ topic: topic }));
    };

    const handleOpenVideoModal = (topic) => {
        dispatch(openVideoModal({ topic: topic }));
    };

    return (
        <div className="detail--content__3">
            <label htmlFor="detail_toggle__3" className="detail--close">
                <span>
                    <AiOutlineClose />
                </span>
            </label>
            <header className="content__header">
                <img src={Pocket} alt="" className="content__logo__pocket" />
            </header>
            <main className="content--body">
                <div className="content--body__1">
                    <h3 className="heading--tertiary">Features</h3>
                    <ul className="content__ul">
                        <li className="content--features__li">
                            Authentication
                            <AiFillPlaySquare
                                onClick={() =>
                                    handleOpenVideoModal('Pocket_Auth')
                                }
                                className="detail__video"
                            />
                        </li>
                        <li className="content--features__li">
                            Realtime chatting
                            <AiFillPlaySquare
                                onClick={() =>
                                    handleOpenVideoModal('Pocket_Chat')
                                }
                                className="detail__video"
                            />
                        </li>
                        <li className="content--features__li">
                            Comment & reply
                            <AiFillPlaySquare
                                onClick={() =>
                                    handleOpenVideoModal('Pocket_Comment')
                                }
                                className="detail__video"
                            />
                        </li>
                        <li className="content--features__li">
                            Crate & Read & Delete Item
                            <AiFillPlaySquare
                                onClick={() =>
                                    handleOpenVideoModal('Pocket_CRDItem')
                                }
                                className="detail__video"
                            />
                        </li>
                        <li className="content--features__li">
                            Update Item
                            <AiFillPlaySquare
                                onClick={() =>
                                    handleOpenVideoModal('Pocket_UpdateItem')
                                }
                                className="detail__video"
                            />
                        </li>
                        <li className="content--features__li">
                            Update User Info
                            <AiFillPlaySquare
                                onClick={() =>
                                    handleOpenVideoModal('Pocket_Update_User')
                                }
                                className="detail__video"
                            />
                        </li>
                        <li className="content--features__li">
                            Set Location
                            <AiFillPlaySquare
                                onClick={() =>
                                    handleOpenVideoModal('Pocket_Place')
                                }
                                className="detail__video"
                            />
                        </li>
                        <li className="content--features__li">
                            Search & Filtering Items
                            <AiFillPlaySquare
                                onClick={() =>
                                    handleOpenVideoModal('Pocket_Search')
                                }
                                className="detail__video"
                            />
                        </li>
                        <li className="content--features__li">
                            Page Images
                            <BiImageAlt
                                className="detail__video"
                                onClick={() =>
                                    handleOpenImageModal('Pocket_Desk')
                                }
                            />
                        </li>
                        <li className="content--features__li">
                            Additional Responsive design
                            <BiImageAlt
                                className="detail__video"
                                onClick={() =>
                                    handleOpenImageModal('Pocket_Mobile')
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
                            <img className="content--tool__logo" src={React} />
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
                            <img className="content--tool__logo" src={JS} />
                            JavaScript
                        </li>
                        <li className="content--tool__li">
                            <img
                                className="content--tool__logo"
                                src={GoogleMap}
                            />
                            Google Map
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={Real} />
                            Firebase realtime database
                        </li>
                        <li className="content--tool__li">
                            <img
                                className="content--tool__logo"
                                src={Storage}
                            />
                            Firebase Storage
                        </li>
                    </ul>
                </div>
            </main>

            {/* <Video ref={videoModal} />
            <ImageModal ref={imageModal} /> */}
        </div>
    );
}
