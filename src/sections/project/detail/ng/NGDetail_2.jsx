import { AiFillPlaySquare } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { openVideoModal } from '../../../../store/videoSlice';

export default function NGDetail_2() {
    const dispatch = useDispatch();
    const handleOpenVideoModal = (topic) => {
        dispatch(openVideoModal({ topic: topic }));
    };
    return (
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
                        onClick={() => handleOpenVideoModal('NG_Detail')}
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
                        onClick={() => handleOpenVideoModal('NG_Response')}
                    />
                </li>
            </ul>
        </div>
    );
}
