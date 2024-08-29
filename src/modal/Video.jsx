import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import ReactPlayer from 'react-player';
import { PKVideos } from '../assets/urls';
import { NGVideos } from '../assets/urls';
import { CPTVideos } from '../assets/urls';
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
        } else if (sliceVideoTopic === 'CPT_auth') {
            setVideoUrl(CPTVideos.CPT_auth);
        } else if (sliceVideoTopic === 'CPT_create_project') {
            setVideoUrl(CPTVideos.CPT_create_project);
        } else if (sliceVideoTopic === 'CPT_delete_project') {
            setVideoUrl(CPTVideos.CPT_delete_project);
        } else if (sliceVideoTopic === 'CPT_review_project') {
            setVideoUrl(CPTVideos.CPT_review_project);
        } else if (sliceVideoTopic === 'CPT_apply_project') {
            setVideoUrl(CPTVideos.CPT_apply_project);
        } else if (sliceVideoTopic === 'CPT_create_join_group') {
            setVideoUrl(CPTVideos.CPT_create_group);
        } else if (sliceVideoTopic === 'CPT_update_project') {
            setVideoUrl(CPTVideos.CPT_edit_project);
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
                    aria-label="Close video modal"
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
