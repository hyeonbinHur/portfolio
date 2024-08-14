import { BiImageAlt } from 'react-icons/bi';
import { AiFillPlaySquare } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { openVideoModal } from '../../../../store/videoSlice';
import { openImageModal } from '../../../../store/imageSlice';

export default function CPTDetail_4() {
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
                    All features
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() => handleOpenVideoModal('CPT_All')}
                    />
                </li>
                <li className="content--features__li">
                    Basic - Authentication
                    <BiImageAlt
                        className="detail__video"
                        onClick={() => handleOpenImageModal('CPT_Auth')}
                    />
                </li>
                <li className="content--features__li">
                    Basic - Visit detail page
                    <BiImageAlt
                        className="detail__video"
                        onClick={() => handleOpenImageModal('CPT_Detail')}
                    />
                </li>
                <li className="content--features__li">
                    Basic - Search users & groups & company & projects
                    <BiImageAlt
                        className="detail__video"
                        onClick={() => handleOpenImageModal('CPT_Search')}
                    />
                </li>
                <li className="content--features__li">
                    Student - join & create group
                    <BiImageAlt
                        className="detail__video"
                        onClick={() =>
                            handleOpenImageModal('CPT_Student_group')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Student - apply capstone project
                    <BiImageAlt
                        className="detail__video"
                        onClick={() =>
                            handleOpenImageModal('CPT_student_capstone')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Company - Create capstone project
                    <BiImageAlt
                        className="detail__video"
                        onClick={() =>
                            handleOpenImageModal('CPT_company_create_capstone')
                        }
                    />
                </li>

                <li className="content--features__li">
                    Supervisor - Edit & View capstone project
                    <BiImageAlt
                        className="detail__video"
                        onClick={() =>
                            handleOpenImageModal('CPT_supervisor_capstone')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Admin - Review & Edit capstone project
                    <BiImageAlt
                        className="detail__video"
                        onClick={() =>
                            handleOpenImageModal('CPT_admin_capstone')
                        }
                    />
                </li>

                <li className="content--features__li">
                    Bsic - usecase diagram
                    <BiImageAlt
                        className="detail__video"
                        onClick={() =>
                            handleOpenImageModal('CPT_basic_diagram')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Specific - usecase diagram
                    <BiImageAlt
                        className="detail__video"
                        onClick={() =>
                            handleOpenImageModal('CPT_specific_diagram')
                        }
                    />
                </li>
            </ul>
        </div>
    );
}
