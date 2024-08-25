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
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('CPT_auth')}
                    />
                </li>
                <li className="content--features__li">
                    Company - Create project
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() =>
                            handleOpenVideoModal('CPT_create_project')
                        }
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('CPT_create_project')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Company - Delete project
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() =>
                            handleOpenVideoModal('CPT_delete_project')
                        }
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('CPT_delete_project')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Admin - Review created project
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() =>
                            handleOpenVideoModal('CPT_review_project')
                        }
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('CPT_review_project')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Student - Apply project
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() =>
                            handleOpenVideoModal('CPT_apply_project')
                        }
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('CPT_apply_project')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Student - Create & Join group
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() =>
                            handleOpenVideoModal('CPT_create_join_group')
                        }
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('CPT_create_join_group')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Supervisor - Update project
                    <AiFillPlaySquare
                        className="detail__video"
                        onClick={() =>
                            handleOpenVideoModal('CPT_update_project')
                        }
                    />
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() =>
                            handleOpenImageModal('CPT_update_project')
                        }
                    />
                </li>
                <li className="content--features__li">
                    Diagrams
                    <BiImageAlt
                        className="detail__gallery"
                        onClick={() => handleOpenImageModal('CPT_diagrams')}
                    />
                </li>
            </ul>
        </div>
    );
}
