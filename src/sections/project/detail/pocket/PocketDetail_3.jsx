import { BiImageAlt } from 'react-icons/bi';

import { AiFillPlaySquare } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { openVideoModal } from '../../../../store/videoSlice';
import { openImageModal } from '../../../../store/imageSlice';
export default function PocketDetail_3() {
    const dispatch = useDispatch();
    const handleOpenImageModal = (topic) => {
        dispatch(openImageModal({ topic: topic }));
    };
    const handleOpenVideoModal = (topic) => {
        dispatch(openVideoModal({ topic: topic }));
    };
    return (
        <div className="content--body__1">
            <h3 className="heading--tertiary">Features</h3>
            <ul className="content__ul">
                <li className="content--features__li">
                    Authentication
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_auth')}
                        className="detail__video"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('Pocket_auth')}
                    />
                </li>
                <li className="content--features__li">
                    Main pages
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_main')}
                        className="detail__video"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('Pocket_main')}
                    />
                </li>
                <li className="content--features__li">
                    Location setting
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_location')}
                        className="detail__video"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('Pocket_location')}
                    />
                </li>
                <li className="content--features__li">
                    Personal Page
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_personal')}
                        className="detail__video"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('Pocket_personal')}
                    />
                </li>
                <li className="content--features__li">
                    Real time chatting
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_chatting')}
                        className="detail__video"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('Pocket_chatting')}
                    />
                </li>
                <li className="content--features__li">
                    Comment & Reply
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_comment')}
                        className="detail__video"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('Pocket_comment')}
                    />
                </li>
                <li className="content--features__li">
                    Create post
                    <AiFillPlaySquare
                        onClick={() =>
                            handleOpenVideoModal('Pocket_create_post')
                        }
                        className="detail__video"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('Pocket_create_post')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Update & Delete post
                    <AiFillPlaySquare
                        onClick={() =>
                            handleOpenVideoModal('Pocket_update_post')
                        }
                        className="detail__video"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('Pocket_update_post')
                        }
                    />
                </li>

                {/* <li className="content--features__li">
                    Page Images
                    <BiImageAlt
                        className="detail__video"
                        onClick={() => handleOpenImageModal('Pocket_Desk')}
                    />
                </li>
                <li className="content--features__li">
                    Additional Responsive design
                    <BiImageAlt
                        className="detail__video"
                        onClick={() => handleOpenImageModal('Pocket_Mobile')}
                    />
                </li> */}
            </ul>
        </div>
    );
}
