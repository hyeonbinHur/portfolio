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
                        <AiOutlineClose aria-label="Close Pocket detail" />
                    </span>
                </label>
                <span className="content--title">Pocket</span>
            </header>
            {current > 1 && (
                <button
                    onClick={() => setCurrent((prev) => prev - 1)}
                    className="content--prev"
                >
                    <GrPrevious aria-label="Previous Pocket detail" />
                </button>
            )}
            {current < max && (
                <button
                    onClick={() => setCurrent((prev) => prev + 1)}
                    className="content--next"
                >
                    <GrNext aria-label="Next Pocket detail" />
                </button>
            )}

            <main className="content--body">
                {current === 1 && <PocketDetail_1 />}
                {current === 2 && <PocketDetail_2 />}
                {current === 3 && <PocketDetail_3 />}
            </main>
        </div>
    );
}
