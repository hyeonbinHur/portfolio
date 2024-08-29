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
                        aria-label="Pocket authentication views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('Pocket_auth')}
                        aria-label="Pocket authentication video"
                    />
                </li>
                <li className="content--features__li">
                    Main pages
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_main')}
                        className="detail__video"
                        aria-label="Pocket main page views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('Pocket_main')}
                        aria-label="Pocket main page views video"
                    />
                </li>
                <li className="content--features__li">
                    Location setting
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_location')}
                        className="detail__video"
                        aria-label="Pocket location setting views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('Pocket_location')}
                        aria-label="Pocket location setting video"
                    />
                </li>
                <li className="content--features__li">
                    Personal Page
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_personal')}
                        className="detail__video"
                        aria-label="Pocket personal page views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('Pocket_personal')}
                        aria-label="Pocket personal page video"
                    />
                </li>
                <li className="content--features__li">
                    Real time chatting
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_chatting')}
                        className="detail__video"
                        aria-label="Pocket realtime chatting views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('Pocket_chatting')}
                        aria-label="Pocket realtime chatting video"
                    />
                </li>
                <li className="content--features__li">
                    Comment & Reply
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_comment')}
                        className="detail__video"
                        aria-label="Pocket comment and reply views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('Pocket_comment')}
                        aria-label="Pocket comment and reply video"
                    />
                </li>
                <li className="content--features__li">
                    Create post
                    <AiFillPlaySquare
                        onClick={() =>
                            handleOpenVideoModal('Pocket_create_post')
                        }
                        className="detail__video"
                        aria-label="Pocket create post views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('Pocket_create_post')
                        }
                        aria-label="Pocket create post video"
                    />
                </li>
                <li className="content--features__li">
                    Update & Delete post
                    <AiFillPlaySquare
                        onClick={() =>
                            handleOpenVideoModal('Pocket_update_post')
                        }
                        className="detail__video"
                        aria-label="Pocket update and delete post views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('Pocket_update_post')
                        }
                        aria-label="Pocket update and delete post video"
                    />
                </li>
            </ul>
        </div>
    );
}
