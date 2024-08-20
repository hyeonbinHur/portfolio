import { AiOutlineClose } from 'react-icons/ai';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
// import Pocket from '../../assets/projects/pocket.png';
// import React from '../../assets/logos/react.png';
// import JS from '../../assets/logos/js.png';
// import Tailwind from '../../assets/logos/tailwind.png';
// import GoogleMap from '../../assets/logos/googlemap.png';
// import Redux from '../../assets/logos/redux.png';
// import Storage from '../../assets/logos/storage.png';
// import Real from '../../assets/logos/realtime.png';

import { useState } from 'react';

import PocketDetail_1 from './detail/pocket/PocketDetail_1';
import PocketDetail_2 from './detail/pocket/PocketDetail_2';
import PocketDetail_3 from './detail/pocket/PocketDetail_3';

export default function PocketDetail() {
    const [current, setCurrent] = useState(1);
    const max = 3;

    return (
        <div className="detail--content__3">
            <header className="content__header">
                <label htmlFor="detail_toggle__3" className="detail--close">
                    <span>
                        <AiOutlineClose />
                    </span>
                </label>
                <span className="content--title">Pocket</span>
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
                {current === 1 && <PocketDetail_1 />}
                {current === 2 && <PocketDetail_2 />}
                {current === 3 && <PocketDetail_3 />}
                {/* 
                <div className="content--body__2">
                    <h3 className="heading--tertiary">Tools</h3>
                    <ul className="content__ul">
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={React} />
                            React
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={Redux} />
                            Redux
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={React} />
                            Context API
                        </li>
                        <li className="content--tool__li">
                            <img
                                className="content--tool__logo"
                                src={Tailwind}
                            />
                            Tailwind
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={JS} />
                            JavaScript
                        </li>
                        <li className="content--tool__li">
                            <img
                                className="content--tool__logo"
                                src={GoogleMap}
                            />
                            Google Map
                        </li>
                        <li className="content--tool__li">
                            <img className="content--tool__logo" src={Real} />
                            Firebase realtime database
                        </li>
                        <li className="content--tool__li">
                            <img
                                className="content--tool__logo"
                                src={Storage}
                            />
                            Firebase Storage
                        </li>
                    </ul>
                </div> */}
            </main>

            {/* <Video ref={videoModal} />
            <ImageModal ref={imageModal} /> */}
        </div>
    );
}
