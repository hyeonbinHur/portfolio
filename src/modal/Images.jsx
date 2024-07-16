import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { closeImageModal } from '../store/imageSlice';
import { useSelector, useDispatch } from 'react-redux';

import auth1 from '../assets/CPT/auth/auth_1.png';
import auth2 from '../assets/CPT/auth/auth_2.png';
import auth3 from '../assets/CPT/auth/auth_3.png';
import detail1 from '../assets/CPT/detail/detail1.png';
import detail2 from '../assets/CPT/detail/detail2.png';
import detail3 from '../assets/CPT/detail/detail3.png';
import detail4 from '../assets/CPT/detail/detail4.png';
import detail5 from '../assets/CPT/detail/detail5.png';
import search1 from '../assets/CPT/search/search1.png';
import search2 from '../assets/CPT/search/search2.png';
import search3 from '../assets/CPT/search/search3.png';
import search4 from '../assets/CPT/search/search4.png';
import search5 from '../assets/CPT/search/search5.png';
import group1 from '../assets/CPT/student-group/group1.png';
import group2 from '../assets/CPT/student-group/group2.png';
import capstone1 from '../assets/CPT/student-capstone/capstone1.png';
import capstone2 from '../assets/CPT/student-capstone/capstone2.png';
import companyCapstone1 from '../assets/CPT/company-capstone/capstone1.png';
import companyCapstone2 from '../assets/CPT/company-capstone/capstone2.png';
import companyCapstone3 from '../assets/CPT/company-capstone/capstone3.png';
import supervisorCapstone1 from '../assets/CPT/supervisor-capstone/capstone1.png';
import supervisorCapstone2 from '../assets/CPT/supervisor-capstone/capstone2.png';
import adminCapstone1 from '../assets/CPT/admin-capstone/capstone1.png';
import adminCapstone2 from '../assets/CPT/admin-capstone/capstone2.png';
import adminCapstone3 from '../assets/CPT/admin-capstone/capstone3.png';
import basicDiagram from '../assets/CPT/diagram/basic-diagram.png';
import specialDiagram from '../assets/CPT/diagram/special-diagram.png';

const ImageModal = forwardRef(function ImageModal(props, ref) {
    const modal = useRef(null);
    // const [videoUrl, setVideoUrl] = useState('null');
    const dispatch = useDispatch();
    const sliceImageTopic = useSelector((state) => state.imageSlice.topic);
    // const [numOfImage, setNumOfImage] = useState(0);
    const [images, setImages] = useState([]);
    useEffect(() => {
        if (sliceImageTopic === 'CPT_Auth') {
            setImages([auth1, auth2, auth3]);
        } else if (sliceImageTopic === 'CPT_Detail') {
            setImages([detail1, detail2, detail3, detail4, detail5]);
        } else if (sliceImageTopic === 'CPT_Search') {
            setImages([search1, search2, search3, search4, search5]);
        } else if (sliceImageTopic === 'CPT_Student_group') {
            setImages([group1, group2]);
        } else if (sliceImageTopic === 'CPT_student_capstone') {
            setImages([capstone1, capstone2]);
        } else if (sliceImageTopic === 'CPT_company_create_capstone') {
            setImages([companyCapstone1, companyCapstone2, companyCapstone3]);
        } else if (sliceImageTopic === 'CPT_supervisor_capstone') {
            setImages([supervisorCapstone1, supervisorCapstone2]);
        } else if (sliceImageTopic === 'CPT_admin_capstone') {
            setImages([adminCapstone1, adminCapstone2, adminCapstone3]);
        } else if (sliceImageTopic === 'CPT_basic_diagram') {
            setImages([basicDiagram]);
        } else if (sliceImageTopic === 'CPT_specific_diagram') {
            setImages([specialDiagram]);
        }
    }, [sliceImageTopic]);

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                modal.current.showModal();
            },
            close: () => {
                dispatch(closeImageModal());
                modal.current.close();
            },
        };
    });

    return createPortal(
        <div>
            <dialog ref={modal} className="modal--images">
                <AiOutlineClose
                    onClick={() => ref.current.close()}
                    className="modal--close__image"
                />
                <div className="images">
                    {images.map((image, index) => {
                        console.log(`image--${images.length}__${index}`);
                        return (
                            <img
                                src={image}
                                key={index}
                                className={`image--${images.length}__${index} image--${images.length}`}
                            />
                        );
                    })}
                </div>
            </dialog>
        </div>,
        document.getElementById('modal')
    );
});

export default ImageModal;
