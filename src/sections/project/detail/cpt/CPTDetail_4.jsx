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
                    Autehntication
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() => handleOpenVideoModal('CPT_auth')}
                    />
                </li>
                <li className="content--features__li">
                    Company - Create project
                    <BiImageAlt
                        className="detail__video"
                        onClick={() =>
                            handleOpenImageModal('CPT_create_project')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Company - Delete project
                    <BiImageAlt
                        className="detail__video"
                        onClick={() =>
                            handleOpenImageModal('CPT_delete_project')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Admin - Review created project
                    <BiImageAlt
                        className="detail__video"
                        onClick={() =>
                            handleOpenImageModal('CPT_review_project')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Student - Apply project
                    <BiImageAlt
                        className="detail__video"
                        onClick={() =>
                            handleOpenImageModal('CPT_apply_project')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Student - Create & Join group
                    <BiImageAlt
                        className="detail__video"
                        onClick={() =>
                            handleOpenImageModal('CPT_create_join_group')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Supervisor - Update project
                    <BiImageAlt
                        className="detail__video"
                        onClick={() =>
                            handleOpenImageModal('CPT_update_project')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Diagrams
                    <BiImageAlt
                        className="detail__video"
                        onClick={() => handleOpenImageModal('CPT_diagrams')}
                    />
                </li>

                {/* <li className="content--features__li">
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
                </li> */}
            </ul>
        </div>
    );
}
