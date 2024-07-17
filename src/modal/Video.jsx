import { AiOutlineClose } from 'react-icons/ai';
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

import BUYY_Auth from '../assets/BUYY/Auth.mp4';
import BUYY_Comment from '../assets/BUYY/Comment.mp4';
import BUYY_Edit from '../assets/BUYY/EditItem.mp4';
import BUYY_Pagination from '../assets/BUYY/Pagination.mp4';
import BUYY_PersonalPage from '../assets/BUYY/PersonalPage.mp4';
import BUYY_Purchase from '../assets/BUYY/Purchase.mp4';
import ReactPlayer from 'react-player';
import Pocket_Auth from '../assets/Pocket/auth.mp4';
import Pocket_Real from '../assets/Pocket/chatting.mp4';
import Pocket_Comment from '../assets/Pocket/comment.mp4';
import Pocket_CRD from '../assets/Pocket/crdItem.mp4';
import Pocket_U from '../assets/Pocket/uItem.mp4';
import Pocket_UU from '../assets/Pocket/uuser.mp4';
import Pocket_Search from '../assets/Pocket/search.mp4';

import NG_Auth from '../assets/Ng/auth.mp4';
import NG_Ai from '../assets/Ng/aiChat.mp4';
import NG_Detail from '../assets/Ng/detailPage.mp4';
import NG_Sidebar from '../assets/Ng/sidebar.mp4';
import NG_Error from '../assets/Ng/errorHandling.mp4';
import NG_Response from '../assets/Ng/response.mp4';

import { closeVideoModal } from '../store/videoSlice';
import { useSelector, useDispatch } from 'react-redux';

const VideoModal = forwardRef(function VideoModal(props, ref) {
    const modal = useRef(null);
    const [videoUrl, setVideoUrl] = useState(null);
    const dispatch = useDispatch();
    const sliceVideoTopic = useSelector((state) => state.videoSlice.topic);
    useEffect(() => {
        if (sliceVideoTopic === 'BUYY_Auth') {
            setVideoUrl(BUYY_Auth);
        } else if (sliceVideoTopic === 'BUYY_Comment') {
            setVideoUrl(BUYY_Comment);
        } else if (sliceVideoTopic === 'BUYY_Edit') {
            setVideoUrl(BUYY_Edit);
        } else if (sliceVideoTopic === 'BUYY_Pagination') {
            setVideoUrl(BUYY_Pagination);
        } else if (sliceVideoTopic === 'BUYY_PersonalPage') {
            setVideoUrl(BUYY_PersonalPage);
        } else if (sliceVideoTopic === 'BUYY_Purchase') {
            setVideoUrl(BUYY_Purchase);
        } else if (sliceVideoTopic === 'Pocket_Auth') {
            setVideoUrl(Pocket_Auth);
        } else if (sliceVideoTopic === 'Pocket_Chat') {
            setVideoUrl(Pocket_Real);
        } else if (sliceVideoTopic === 'Pocket_Comment') {
            setVideoUrl(Pocket_Comment);
        } else if (sliceVideoTopic === 'Pocket_CRDItem') {
            setVideoUrl(Pocket_CRD);
        } else if (sliceVideoTopic === 'Pocket_UpdateItem') {
            setVideoUrl(Pocket_U);
        } else if (sliceVideoTopic === 'Pocket_Update_User') {
            setVideoUrl(Pocket_UU);
        } else if (sliceVideoTopic === 'Pocket_Search') {
            setVideoUrl(Pocket_Search);
        } else if (sliceVideoTopic === 'NG_Auth') {
            setVideoUrl(NG_Auth);
        } else if (sliceVideoTopic === 'NG_Side') {
            setVideoUrl(NG_Sidebar);
        } else if (sliceVideoTopic === 'NG_AI') {
            setVideoUrl(NG_Ai);
        } else if (sliceVideoTopic === 'NG_Detail') {
            setVideoUrl(NG_Detail);
        } else if (sliceVideoTopic === 'NG_ERROR') {
            setVideoUrl(NG_Error);
        } else if (sliceVideoTopic === 'NG_Response') {
            setVideoUrl(NG_Response);
        }
    }, [sliceVideoTopic]);

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                modal.current.showModal();
            },
            close: () => {
                dispatch(closeVideoModal());
                modal.current.close();
            },
        };
    });

    return createPortal(
        <div>
            <dialog ref={modal} className="modal">
                <AiOutlineClose
                    onClick={() => ref.current.close()}
                    className="modal--close"
                />
                <ReactPlayer
                    url={videoUrl}
                    type="video/mp4"
                    width="100rem"
                    height="60rem"
                    playing={true}
                    muted={true}
                    controls={true}
                    light={false}
                    pip={true}
                    poster={
                        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
                    }
                />
            </dialog>
        </div>,
        document.getElementById('modal')
    );
});

export default VideoModal;
