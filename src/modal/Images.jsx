import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { closeImageModal } from '../store/imageSlice';
import { useSelector, useDispatch } from 'react-redux';
import { CPTUrls } from '../assets/urls';

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
import Pocket_Desk1 from '../assets/Pocket/desk/desk1.png';
import Pocket_Desk2 from '../assets/Pocket/desk/desk2.png';
import Pocket_Desk3 from '../assets/Pocket/desk/desk3.png';
import Pocket_Desk4 from '../assets/Pocket/desk/desk4.png';
import Pocket_Mobile1 from '../assets/Pocket/mobile/mobile1.png';
import Pocket_Mobile2 from '../assets/Pocket/mobile/mobile2.png';
import Pocket_Mobile3 from '../assets/Pocket/mobile/mobile3.png';
import Pocket_Mobile4 from '../assets/Pocket/mobile/mobile4.png';

const ImageModal = forwardRef(function ImageModal(props, ref) {
    const modal = useRef(null);
    // const [videoUrl, setVideoUrl] = useState('null');
    const dispatch = useDispatch();
    const sliceImageTopic = useSelector((state) => state.imageSlice.topic);
    // const [numOfImage, setNumOfImage] = useState(0);
    const [images, setImages] = useState([]);
    const [heading, setHeading] = useState('');

    useEffect(() => {
        if (sliceImageTopic === 'CPT_Auth') {
            setImages([CPTUrls.auth1, auth2, auth3]);
            setHeading('CPT management - Authentication');
        } else if (sliceImageTopic === 'CPT_Detail') {
            setImages([detail1, detail2, detail3, detail4, detail5]);
            setHeading('CPT management - Detail page');
        } else if (sliceImageTopic === 'CPT_Search') {
            setHeading('CPT management - Search User');

            setImages([search1, search2, search3, search4, search5]);
        } else if (sliceImageTopic === 'CPT_Student_group') {
            setHeading('CPT management - Student - Join & Create Group');

            setImages([group1, group2]);
        } else if (sliceImageTopic === 'CPT_student_capstone') {
            setHeading('CPT management - Student  Apply Capstone Project');

            setImages([capstone1, capstone2]);
        } else if (sliceImageTopic === 'CPT_company_create_capstone') {
            setHeading('CPT management - Company - Create capstone project');

            setImages([companyCapstone1, companyCapstone2, companyCapstone3]);
        } else if (sliceImageTopic === 'CPT_supervisor_capstone') {
            setHeading(
                'CPT management - Supervisor - Edit & View capstone project'
            );

            setImages([supervisorCapstone1, supervisorCapstone2]);
        } else if (sliceImageTopic === 'CPT_admin_capstone') {
            setHeading(
                'CPT management - Admin - Edit & Review capstone project'
            );

            setImages([adminCapstone1, adminCapstone2, adminCapstone3]);
        } else if (sliceImageTopic === 'CPT_basic_diagram') {
            setHeading('CPT management - Basic usecase diagram');

            setImages([basicDiagram]);
        } else if (sliceImageTopic === 'CPT_specific_diagram') {
            setHeading('CPT management - Specific usecase diagram');

            setImages([specialDiagram]);
        } else if (sliceImageTopic === 'Pocket_Desk') {
            setHeading('Pocket - Desktop Images');

            setImages([Pocket_Desk1, Pocket_Desk2, Pocket_Desk3, Pocket_Desk4]);
        } else if (sliceImageTopic === 'Pocket_Mobile') {
            setHeading('Pocket - Mobile Images');

            setImages([
                Pocket_Mobile1,
                Pocket_Mobile2,
                Pocket_Mobile3,
                Pocket_Mobile4,
            ]);
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
                <h3 className="image--heading">{heading}</h3>
                <AiOutlineClose
                    onClick={() => ref.current.close()}
                    className="modal--close__image"
                />
                <div className="images">
                    {images.map((image, index) => {
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
