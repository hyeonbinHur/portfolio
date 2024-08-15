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
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('NG_auth')}
                    />
                </li>
                <li className="content--features__li">
                    AI chatting
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() => handleOpenVideoModal('NG_chatting')}
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('NG_chatting')}
                    />
                </li>
                <li className="content--features__li">
                    Sidebar Feature
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() => handleOpenVideoModal('NG_sidebar')}
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('NG_sidebar')}
                    />
                </li>
                <li className="content--features__li">
                    DetailPage
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() => handleOpenVideoModal('NG_detail')}
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('NG_detail')}
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
                    Responsible Design
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() => handleOpenVideoModal('NG_response')}
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('NG_response')}
                    />
                </li>
            </ul>
        </div>
    );
}
