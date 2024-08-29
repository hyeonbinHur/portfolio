import { AiFillPlaySquare } from 'react-icons/ai';
import { BiImageAlt } from 'react-icons/bi';

import { useDispatch } from 'react-redux';
import { openVideoModal } from '../../../../store/videoSlice';
import { openImageModal } from '../../../../store/imageSlice';
export default function NGDetail_4() {
    const dispatch = useDispatch();
    const handleOpenVideoModal = (topic) => {
        dispatch(openVideoModal({ topic: topic }));
    };
    const handleOpenImageModal = (topic) => {
        dispatch(openImageModal({ topic: topic }));
    };
    return (
        <div className="content--body__1">
            <h3 className="heading--tertiary">Features</h3>

            <ul className="content__ul">
                <li className="content--features__li">
                    Authentication & Authorization
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() => handleOpenVideoModal('NG_auth')}
                        aria-label="Open name gacha authentication views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('NG_auth')}
                        aria-label="Open name gacha authentication video"
                    />
                </li>
                <li className="content--features__li">
                    AI chatting
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() => handleOpenVideoModal('NG_chatting')}
                        aria-label="Open name gacha ai chatting views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('NG_chatting')}
                        aria-label="Open name gacha ai chatting video"
                    />
                </li>
                <li className="content--features__li">
                    Sidebar Feature
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() => handleOpenVideoModal('NG_sidebar')}
                        aria-label="Open name gacha sidebar views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('NG_sidebar')}
                        aria-label="Open name gacha sidebar video"
                    />
                </li>
                <li className="content--features__li">
                    Detail Page
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() => handleOpenVideoModal('NG_detail')}
                        aria-label="Open name gacha detail page views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('NG_detail')}
                        aria-label="Open name gacha detail page video"
                    />
                </li>
                {/* <li className="content--features__li">
                    Error Handling
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() => handleOpenVideoModal('NG_error')}
                    />
                    <BiImageAlt
                        className="detail__video"
                        onClick={() => handleOpenImageModal('NG_error')}
                    />
                </li> */}
                <li className="content--features__li">
                    Responsive Design
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() => handleOpenVideoModal('NG_response')}
                        aria-label="Open name gacha responsive views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('NG_response')}
                        aria-label="Open name gacha responsive view video"
                    />
                </li>
            </ul>
        </div>
    );
}
