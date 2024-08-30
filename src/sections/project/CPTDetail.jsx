import { AiOutlineClose } from 'react-icons/ai';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
// import Cpt from '../../assets/projects/cpt.svg';
// import CSS from '../../assets/logos/css.png';
// import HTML from '../../assets/logos/html.png';
// import JS from '../../assets/logos/js.png';
// import Spring from '../../assets/logos/spring.png';
// import PG from '../../assets/logos/pg.png';
// import RDS from '../../assets/logos/rds.png';
// import JAVA from '../../assets/logos/java.png;
import { useState } from 'react';

// import GH from '../assets/logos/github.png';
// import GH from '../assets/logos/github.png';

import CPTDetail_1 from './detail/cpt/CPTDetail_1';
import CPTDetail_2 from './detail/cpt/CPTDetail_2';
import CPTDetail_3 from './detail/cpt/CPTDetail_3';
import CPTDetail_4 from './detail/cpt/CPTDetail_4';

export default function CPTDetail() {
    const [current, setCurrent] = useState(1);
    const max = 4;

    return (
        <div className="detail--content__2">
            <header className="content__header">
                <label htmlFor="detail_toggle__2">
                    <span className="detail--close">
                        <AiOutlineClose 
                        aria-label="Close capstone project detail" 
                        />
                    </span>
                </label>
                {/* <img src={Cpt} alt="" className="content__logo" /> */}
                <span className="content--title">CPT Management</span>
            </header>
            {current > 1 && (
                <button
                    onClick={() => setCurrent((prev) => prev - 1)}
                    className="content--prev"
                >
                    <GrPrevious 
                    aria-label="Previous capstone project detail" 
                    />
                </button>
            )}
            {current < max && (
                <button
                    onClick={() => setCurrent((prev) => prev + 1)}
                    className="content--next"
                >
                    <GrNext
                     aria-label="Next capstone project detail"
                      />
                </button>
            )}

            <main className="content--body">
                {current === 1 && <CPTDetail_1 />}
                {current === 2 && <CPTDetail_2 />}
                {current === 3 && <CPTDetail_3 />}
                {current === 4 && <CPTDetail_4 />}
            </main>
        </div>
    );
}
