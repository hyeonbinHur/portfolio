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
                        onClick={() => handleOpenVideoModal('Pocket_Auth')}
                        className="detail__video"
                    />
                </li>
                <li className="content--features__li">
                    Realtime chatting
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_Chat')}
                        className="detail__video"
                    />
                </li>
                <li className="content--features__li">
                    Comment & reply
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_Comment')}
                        className="detail__video"
                    />
                </li>
                <li className="content--features__li">
                    Crate & Read & Delete Item
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_CRDItem')}
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
                        onClick={() => handleOpenVideoModal('Pocket_Place')}
                        className="detail__video"
                    />
                </li>
                <li className="content--features__li">
                    Search & Filtering Items
                    <AiFillPlaySquare
                        onClick={() => handleOpenVideoModal('Pocket_Search')}
                        className="detail__video"
                    />
                </li>
                <li className="content--features__li">
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
                </li>
            </ul>
        </div>
    );
}
