import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

import ReactPlayer from 'react-player';
// import Pocket_Auth from '../assets/Pocket/auth.mp4';
// import Pocket_Real from '../assets/Pocket/chatting.mp4';
// import Pocket_Comment from '../assets/Pocket/comment.mp4';
// import Pocket_CRD from '../assets/Pocket/crdItem.mp4';
// import Pocket_U from '../assets/Pocket/uItem.mp4';
// import Pocket_UU from '../assets/Pocket/uuser.mp4';
// import Pocket_Search from '../assets/Pocket/search.mp4';
// import Pocket_Place from '../assets/Pocket/placeSetting.mp4';
import CPT_All from '../assets/CPT/all.mp4';

import { PKVideos } from '../assets/urls';
import { NGVideos } from '../assets/urls';
import { closeVideoModal } from '../store/videoSlice';
import { useSelector, useDispatch } from 'react-redux';
const VideoModal = forwardRef(function VideoModal(props, ref) {
    const modal = useRef(null);
    const [videoUrl, setVideoUrl] = useState(null);
    const dispatch = useDispatch();
    const sliceVideoTopic = useSelector((state) => state.videoSlice.topic);
    useEffect(() => {
        if (sliceVideoTopic === 'Pocket_auth') {
            setVideoUrl(PKVideos.PK_auth);
        } else if (sliceVideoTopic === 'Pocket_main') {
            setVideoUrl(PKVideos.PK_main);
        } else if (sliceVideoTopic === 'Pocket_location') {
            setVideoUrl(PKVideos.PK_location);
        } else if (sliceVideoTopic === 'Pocket_personal') {
            setVideoUrl(PKVideos.PK_personal);
        } else if (sliceVideoTopic === 'Pocket_chatting') {
            setVideoUrl(PKVideos.PK_chatting);
        } else if (sliceVideoTopic === 'Pocket_comment') {
            setVideoUrl(PKVideos.PK_comment);
        } else if (sliceVideoTopic === 'Pocket_create_post') {
            setVideoUrl(PKVideos.PK_create);
        } else if (sliceVideoTopic === 'Pocket_update_post') {
            setVideoUrl(PKVideos.PK_delete);
        } else if (sliceVideoTopic === 'NG_auth') {
            setVideoUrl(NGVideos.NG_Auth);
        } else if (sliceVideoTopic === 'NG_sidebar') {
            setVideoUrl(NGVideos.NG_Sidebar);
        } else if (sliceVideoTopic === 'NG_chatting') {
            setVideoUrl(NGVideos.NG_Ai);
        } else if (sliceVideoTopic === 'NG_detail') {
            setVideoUrl(NGVideos.NG_Detail);
        } else if (sliceVideoTopic === 'NG_response') {
            setVideoUrl(NGVideos.NG_Response);
        } else if (sliceVideoTopic === 'CPT_All') {
            setVideoUrl(CPT_All);
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
                />
            </dialog>
        </div>,
        document.getElementById('modal')
    );
});

export default VideoModal;
