import { BiImageAlt } from 'react-icons/bi';
// import { AiFillPlaySquare } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
// import { openVideoModal } from '../../../../store/videoSlice';
import { openImageModal } from '../../../../store/imageSlice';
import { openVideoModal } from '../../../../store/videoSlice';

import { AiFillPlaySquare } from 'react-icons/ai';

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
                        aria-label="Open capstone project authenticaion views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('CPT_auth')}
                        aria-label="Open capstone project authenticaion video"
                    />
                </li>
                <li className="content--features__li">
                    Company - Create project
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() =>
                            handleOpenVideoModal('CPT_create_project')
                        }
                        aria-label="Open capstone project create project views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('CPT_create_project')
                        }
                        aria-label="Open capstone project create project video"
                    />
                </li>
                <li className="content--features__li">
                    Company - Delete project
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() =>
                            handleOpenVideoModal('CPT_delete_project')
                        }
                        aria-label="Open capstone project delete project views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('CPT_delete_project')
                        }
                        aria-label="Open capstone project delete project video"
                    />
                </li>
                <li className="content--features__li">
                    Admin - Review created project
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() =>
                            handleOpenVideoModal('CPT_review_project')
                        }
                        aria-label="Open capstone project review project views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('CPT_review_project')
                        }
                        aria-label="Open capstone project review project video"
                    />
                </li>
                <li className="content--features__li">
                    Student - Apply project
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() =>
                            handleOpenVideoModal('CPT_apply_project')
                        }
                        aria-label="Open capstone project apply project views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('CPT_apply_project')
                        }
                        aria-label="Open capstone project apply project video"
                    />
                </li>
                <li className="content--features__li">
                    Student - Create & Join group
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() =>
                            handleOpenVideoModal('CPT_create_join_group')
                        }
                        aria-label="Open capstone project create group views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('CPT_create_join_group')
                        }
                        aria-label="Open capstone project create group video"
                    />
                </li>
                <li className="content--features__li">
                    Supervisor - Update project
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() =>
                            handleOpenVideoModal('CPT_update_project')
                        }
                        aria-label="Open capstone project update project views"
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('CPT_update_project')
                        }
                        aria-label="Open capstone project update project video"
                    />
                </li>
                <li className="content--features__li">
                    Diagrams
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('CPT_diagrams')}
                        aria-label="Open capstone project diagrams"
                    />
                </li>
            </ul>
        </div>
    );
}
