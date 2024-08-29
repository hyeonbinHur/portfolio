/* eslint-disable no-unused-vars */
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { closeImageModal } from '../store/imageSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { CPTUrls } from '../assets/urls';

// import specialDiagram from '../assets/CPT/diagram/special-diagram.png';
// import Pocket_Desk1 from '../assets/Pocket/desk/desk1.png';
// import Pocket_Desk2 from '../assets/Pocket/desk/desk2.png';
// import Pocket_Desk3 from '../assets/Pocket/desk/desk3.png';
// import Pocket_Desk4 from '../assets/Pocket/desk/desk4.png';
// import Pocket_Mobile1 from '../assets/Pocket/mobile/mobile1.png';
// import Pocket_Mobile2 from '../assets/Pocket/mobile/mobile2.png';
// import Pocket_Mobile3 from '../assets/Pocket/mobile/mobile3.png';
// import Pocket_Mobile4 from '../assets/Pocket/mobile/mobile4.png';

import { LoadCPTImages } from '../assets/urls';
import { NGUrls } from '../assets/urls';
import { PKUrls } from '../assets/urls';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';

const ImageModal = forwardRef(function ImageModal(props, ref) {
    const modal = useRef(null);
    // const [videoUrl, setVideoUrl] = useState('null');
    const dispatch = useDispatch();
    const sliceImageTopic = useSelector((state) => state.imageSlice.topic);
    // const [numOfImage, setNumOfImage] = useState(0);
    const [images, setImages] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [heading, setHeading] = useState('');
    const [isResponsive, setIsResponsive] = useState(false);
    useEffect(() => {
        if (sliceImageTopic === 'CPT_auth') {
            setImages([CPTImages.auth_1, CPTImages.auth_2, CPTImages.auth_3]);
            setHeading('Authentication');
        } else if (sliceImageTopic === 'CPT_create_project') {
            setHeading('Create project');
            setImages([
                CPTImages.create_project_1,
                CPTImages.create_project_2,
                CPTImages.create_project_3,
                CPTImages.create_project_4,
                CPTImages.create_project_5,
            ]);
        } else if (sliceImageTopic === 'CPT_delete_project') {
            setHeading('Delete project');
            setImages([
                CPTImages.delete_project_1,
                CPTImages.delete_project_2,
                CPTImages.delete_project_3,
            ]);
        } else if (sliceImageTopic === 'CPT_review_project') {
            setHeading('Review project');
            setImages([
                CPTImages.review_project_1,
                CPTImages.review_project_2,
                CPTImages.review_project_3,
                CPTImages.review_project_4,
            ]);
        } else if (sliceImageTopic === 'CPT_apply_project') {
            setHeading('Apply project');
            setImages([
                CPTImages.apply_project_1,
                CPTImages.apply_project_2,
                CPTImages.apply_project_3,
                CPTImages.apply_project_4,
            ]);
        } else if (sliceImageTopic === 'CPT_create_join_group') {
            setHeading('Create & Join group');
            setImages([
                CPTImages.create_group_1,
                CPTImages.create_group_2,
                CPTImages.create_group_3,
            ]);
        } else if (sliceImageTopic === 'CPT_update_project') {
            setHeading('Update project');
            setImages([
                CPTImages.edit_project_1,
                CPTImages.edit_project_2,
                CPTImages.edit_project_3,
                CPTImages.edit_project_4,
            ]);
        } else if (sliceImageTopic === 'CPT_diagrams') {
            setHeading('Usecase diagram');
            setImages([CPTImages.diagram_1, CPTImages.diagram_2]);
        } else if (sliceImageTopic === 'Pocket_auth') {
            setHeading('Authentication');

            setImages([
                PKImages.authentication_1,
                PKImages.authentication_2,
                PKImages.authentication_3,
                PKImages.authentication_4,
            ]);
        } else if (sliceImageTopic === 'Pocket_main') {
            setHeading('Main pages');

            setImages([
                PKImages.main_category_1,
                PKImages.main_category_2,
                PKImages.main_category_3,
                PKImages.main_category_4,
                PKImages.main_category_5,
            ]);
        } else if (sliceImageTopic === 'Pocket_location') {
            setHeading('Location setting');

            setImages([
                PKImages.location_setting_1,
                PKImages.location_setting_2,
                PKImages.location_setting_3,
                PKImages.location_setting_4,
                PKImages.location_setting_5,
            ]);
        } else if (sliceImageTopic === 'Pocket_personal') {
            setHeading('Personal page');

            setImages([
                PKImages.personal_page_1,
                PKImages.personal_page_2,
                PKImages.personal_page_3,
                PKImages.personal_page_4,
                PKImages.personal_page_5,
                PKImages.personal_page_6,
                PKImages.personal_page_7,
            ]);
        } else if (sliceImageTopic === 'Pocket_chatting') {
            setHeading('Realtime chatting');

            setImages([
                PKImages.private_chatting_1,
                PKImages.private_chatting_2,
                PKImages.private_chatting_3,
                PKImages.private_chatting_4,
                PKImages.private_chatting_5,
                PKImages.private_chatting_6,
                PKImages.private_chatting_7,
                PKImages.private_chatting_8,
                PKImages.private_chatting_9,
                PKImages.private_chatting_10,
            ]);
        } else if (sliceImageTopic === 'Pocket_comment') {
            setHeading('Comment & Reply');

            setImages([
                PKImages.comment_reply_1,
                PKImages.comment_reply_2,
                PKImages.comment_reply_3,
                PKImages.comment_reply_4,
                PKImages.comment_reply_5,
                PKImages.comment_reply_6,
                PKImages.comment_reply_7,
            ]);
        } else if (sliceImageTopic === 'Pocket_create_post') {
            setHeading('Create post');

            setImages([
                PKImages.add_item_1,
                PKImages.add_item_2,
                PKImages.add_item_3,
                PKImages.add_item_4,
                PKImages.add_item_5,
                PKImages.add_item_6,
                PKImages.add_item_7,
            ]);
        } else if (sliceImageTopic === 'Pocket_update_post') {
            setHeading('Update post');
            setImages([
                PKImages.udate_delete_item_1,
                PKImages.udate_delete_item_2,
                PKImages.udate_delete_item_3,
                PKImages.udate_delete_item_4,
                PKImages.udate_delete_item_5,
                PKImages.udate_delete_item_6,
                PKImages.udate_delete_item_7,
                PKImages.udate_delete_item_8,
                PKImages.udate_delete_item_9,
            ]);
        } else if (sliceImageTopic === 'NG_auth') {
            setHeading('Authentication');
            setImages([
                NGImages.auth_1,
                NGImages.auth_2,
                NGImages.auth_3,
                NGImages.auth_4,
            ]);
        } else if (sliceImageTopic === 'NG_chatting') {
            setHeading('Ai chatting');
            setImages([
                NGImages.chat_1,
                NGImages.chat_2,
                NGImages.chat_3,
                NGImages.chat_4,
            ]);
        } else if (sliceImageTopic === 'NG_sidebar') {
            setHeading('Sidebar');
            setImages([
                NGImages.sidebar_1,
                NGImages.sidebar_2,
                NGImages.sidebar_3,
                NGImages.sidebar_4,
            ]);
        } else if (sliceImageTopic === 'NG_detail') {
            setHeading('Detail page');

            setImages([
                NGImages.detail_1,
                NGImages.detail_2,
                NGImages.detail_3,
                NGImages.detail_4,
                NGImages.detail_5,
            ]);
        } else if (sliceImageTopic === 'NG_response') {
            setHeading('Responsive Design');

            setImages([
                NGImages.response_1,
                NGImages.response_2,
                NGImages.response_3,
                NGImages.response_4,
            ]);
            setIsResponsive(true);
        }
        //  else if (sliceImageTopic === 'NG_auth') {
        // }
        setCurrentIdx(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sliceImageTopic]);

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                modal.current.showModal();
                console.log(images);
            },
            close: () => {
                dispatch(closeImageModal());
                setImages([]);
                setIsResponsive(false);
                modal.current.close();
            },
        };
    });

    const { data: CPTImages } = useQuery({
        // store blobs using reactt query to cache the blobs
        queryKey: ['CPT Images'],
        queryFn: () => LoadCPTImages(CPTUrls), // LoadCPTImages returns key:blob pair object
        staleTime: 1000 * 60 * 15, // 5 minutes
        cacheTime: 1000 * 60 * 60, // 15 minutes
    });

    const { data: NGImages } = useQuery({
        // store blobs using reactt query to cache the blobs
        queryKey: ['NG Images'],
        queryFn: () => LoadCPTImages(NGUrls), // LoadCPTImages returns key:blob pair object
        staleTime: 1000 * 60 * 15, // 5 minutes
        cacheTime: 1000 * 60 * 60, // 15 minutes
    });

    const { data: PKImages } = useQuery({
        // store blobs using reactt query to cache the blobs
        queryKey: ['PK Images'],
        queryFn: () => LoadCPTImages(PKUrls), // LoadCPTImages returns key:blob pair object
        staleTime: 1000 * 60 * 15, // 5 minutes
        cacheTime: 1000 * 60 * 60, // 15 minutes
    });

    return createPortal(
        <div>
            <dialog ref={modal} className="modal--images">
                <h3 className="image--heading">
                    {heading} : {currentIdx + 1} / {images.length}
                </h3>
                {currentIdx > 0 && (
                    <button
                        className="image--prev"
                        onClick={() => setCurrentIdx((prev) => prev - 1)}
                    >
                        <GrPrevious
                            className="image--prev"
                            aria-label="Previous image"
                        />
                    </button>
                )}

                {currentIdx < images.length - 1 && (
                    <button
                        className="image--next"
                        onClick={() => setCurrentIdx((prev) => prev + 1)}
                    >
                        <GrNext
                            className="image--next"
                            aria-label="Next image"
                        />
                    </button>
                )}

                <AiOutlineClose
                    onClick={() => ref.current.close()}
                    className="modal--close__image"
                    aria-label="Close image modal"
                />
                <div
                    className={`image--container image--container__${
                        images.length
                    } ${isResponsive ? 'image--container__responsive' : ''}`}
                >
                    {images.map((image, index) => {
                        return (
                            <img
                                src={URL.createObjectURL(image)} // create url using blob
                                alt="Project views"
                                key={index}
                                className={`${
                                    isResponsive
                                        ? `image--responsive__${index}`
                                        : `image--${index}`
                                }   ${
                                    index === currentIdx
                                        ? isResponsive
                                            ? 'image__selected__responsive'
                                            : 'image__selected'
                                        : ''
                                }`}
                            />
                        );
                    })}
                </div>
            </dialog>
        </div>,
        document.getElementById('modal')
    );
});
//branch test
export default ImageModal;
