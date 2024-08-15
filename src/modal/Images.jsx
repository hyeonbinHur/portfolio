/* eslint-disable no-unused-vars */
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { closeImageModal } from '../store/imageSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { CPTUrls } from '../assets/urls';

import basicDiagram from '../assets/CPT/diagram/basic-diagram.png';
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
            setHeading('CPT management - Authentication');
        } else if (sliceImageTopic === 'CPT_create_project') {
            setHeading('CPT management - Basic usecase diagram');
            setImages([
                CPTImages.create_project_1,
                CPTImages.create_project_2,
                CPTImages.create_project_3,
                CPTImages.create_project_4,
                CPTImages.create_project_5,
            ]);
        } else if (sliceImageTopic === 'CPT_delete_project') {
            setHeading('CPT management - Basic usecase diagram');
            setImages([
                CPTImages.delete_project_1,
                CPTImages.delete_project_2,
                CPTImages.delete_project_3,
            ]);
        } else if (sliceImageTopic === 'CPT_review_project') {
            setHeading('CPT management - Basic usecase diagram');
            setImages([
                CPTImages.review_project_1,
                CPTImages.review_project_2,
                CPTImages.review_project_3,
                CPTImages.review_project_4,
            ]);
        } else if (sliceImageTopic === 'CPT_apply_project') {
            setHeading('CPT management - Basic usecase diagram');
            setImages([
                CPTImages.apply_project_1,
                CPTImages.apply_project_2,
                CPTImages.apply_project_3,
                CPTImages.apply_project_4,
            ]);
        } else if (sliceImageTopic === 'CPT_create_join_group') {
            setHeading('CPT management - Basic usecase diagram');
            setImages([
                CPTImages.create_group_1,
                CPTImages.create_group_2,
                CPTImages.create_group_3,
            ]);
        } else if (sliceImageTopic === 'CPT_update_project') {
            setHeading('CPT management - Basic usecase diagram');
            setImages([
                CPTImages.edit_project_1,
                CPTImages.edit_project_2,
                CPTImages.edit_project_3,
                CPTImages.edit_project_4,
            ]);
        } else if (sliceImageTopic === 'CPT_diagrams') {
            setHeading('CPT management - Basic usecase diagram');
            setImages([basicDiagram]);
        } else if (sliceImageTopic === 'Pocket_auth') {
            setImages([
                PKImages.authentication_1,
                PKImages.authentication_2,
                PKImages.authentication_3,
                PKImages.authentication_4,
            ]);
        } else if (sliceImageTopic === 'Pocket_main') {
            setImages([
                PKImages.main_category_1,
                PKImages.main_category_2,
                PKImages.main_category_3,
                PKImages.main_category_4,
                PKImages.main_category_5,
            ]);
        } else if (sliceImageTopic === 'Pocket_location') {
            setImages([
                PKImages.location_setting_1,
                PKImages.location_setting_2,
                PKImages.location_setting_3,
                PKImages.location_setting_4,
                PKImages.location_setting_5,
            ]);
        } else if (sliceImageTopic === 'Pocket_personal') {
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
            setImages([
                NGImages.auth_1,
                NGImages.auth_2,
                NGImages.auth_3,
                NGImages.auth_4,
            ]);
        } else if (sliceImageTopic === 'NG_chatting') {
            setImages([
                NGImages.chat_1,
                NGImages.chat_2,
                NGImages.chat_3,
                NGImages.chat_4,
            ]);
        } else if (sliceImageTopic === 'NG_sidebar') {
            setImages([
                NGImages.sidebar_1,
                NGImages.sidebar_2,
                NGImages.sidebar_3,
                NGImages.sidebar_4,
            ]);
        } else if (sliceImageTopic === 'NG_detail') {
            setImages([
                NGImages.detail_1,
                NGImages.detail_2,
                NGImages.detail_3,
                NGImages.detail_4,
                NGImages.detail_5,
            ]);
        } else if (sliceImageTopic === 'NG_response') {
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
                <h3 className="image--heading">{currentIdx}</h3>
                <button
                    className="prev"
                    onClick={() => setCurrentIdx((prev) => prev - 1)}
                >
                    prev
                </button>
                <button
                    className="next"
                    onClick={() => setCurrentIdx((prev) => prev + 1)}
                >
                    next
                </button>

                <AiOutlineClose
                    onClick={() => ref.current.close()}
                    className="modal--close__image"
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
                                key={index}
                                className={`${
                                    isResponsive
                                        ? 'image--content__responsive'
                                        : 'image--content'
                                }   image--${images.length} ${
                                    index === currentIdx
                                        ? 'image__selected'
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
