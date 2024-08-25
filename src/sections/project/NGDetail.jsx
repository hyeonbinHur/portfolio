import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import { AiOutlineClose } from 'react-icons/ai';

//
// import React from '../../assets/logos/react.png';
// import JS from '../../assets/logos/js.png';
// import Node from '../../assets/logos/node.png';
// import PG from '../../assets/logos/pg.png';
// import RDS from '../../assets/logos/rds.png';
// import API from '../../assets/logos/api.png';
// import NAT from '../../assets/logos/nat.png';
// import Lambda from '../../assets/logos/lambda.png';
// import Redux from '../../assets/logos/redux.png';
// import Query from '../../assets/logos/query.svg';
// import JWT from '../../assets/logos/jwt.png';
// import AI from '../../assets/logos/openai.png';
// import SCSS from '../../assets/logos/sass.png';
import { useEffect, useState } from 'react';
// import { openImageModal } from '../../store/imageSlice';
import NGDetail_1 from './detail/ng/NGDetail_1';
import NGDetail_2 from './detail/ng/NGDetail_2';
import NGDetail_3 from './detail/ng/NGDetail_3';
import NGDetail_4 from './detail/ng/NGDetail_4';
import NGDetail_5 from './detail/ng/NGDetail_5';
export default function NGDetail() {
    const [current, setCurrent] = useState(1);
    const [currentTitle, setCurrentTitle] = useState('Information');
    const max = 5;
    // const handleOpenImageModal = (topic) => {
    //     dispatch(openImageModal({ topic: topic }));
    // };
    useEffect(() => {
        if (current === 1) {
            setCurrentTitle('Information');
        } else if (current === 2) {
            setCurrentTitle('Page Architecture');
        } else if (current === 3) {
            setCurrentTitle('ERD');
        } else if (current === 4) {
            setCurrentTitle('Features');
        } else if (current === 5) {
            setCurrentTitle('Links');
        }
    }, [current]);
    return (
        <div className="detail--content__4">
            <header className="content__header">
                <label htmlFor="detail_toggle__4">
                    <span className="detail--close">
                        <AiOutlineClose />
                    </span>
                </label>
                <span className="content--title__current">{currentTitle}</span>
                <span className="content--title">Name Gacha</span>
            </header>

            {current > 1 && (
                <button
                    onClick={() => setCurrent((prev) => prev - 1)}
                    className="content--prev"
                >
                    <GrPrevious />
                </button>
            )}
            {current < max && (
                <button
                    onClick={() => setCurrent((prev) => prev + 1)}
                    className="content--next"
                >
                    <GrNext />
                </button>
            )}
            <main className="content--body">
                {current === 1 && <NGDetail_1 />}
                {current === 2 && <NGDetail_2 />}
                {current === 3 && <NGDetail_3 />}
                {current === 4 && <NGDetail_4 />}
                {current === 5 && <NGDetail_5 />}
            </main>
        </div>
    );
}
