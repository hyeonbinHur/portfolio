import Learn from '../assets/logos/learn.png';

import Jest from '../assets/logos/jest.png';
import React from '../assets/logos/react.png';
import Redux from '../assets/logos/redux.png';
import Query from '../assets/logos/query.svg';
import SCSS from '../assets/logos/sass.png';

export default function Learning() {
    return (
        <>
            <h3 className="learning--heading">
                <img src={Learn} className="learning--heading__logo" />{' '}
                Currently Learning
            </h3>
            <p className="learning--paragraph">
                While trying to complete multiple projects, I am understanding
                myself better, identifying my weaknesses and strengths. I
                usually focused on implementing new features, but these days, I
                am striving to create solid programs. Although these programs
                may not include many features, I aim to handle errors as much as
                possible. Additionally, I am studying advanced CSS with SCSS,
                which is one of the most fundamental skills for a Front-End
                Engineer.
            </p>
            <div className="row learning--card__container">
                <div className="col-1-of-3 learning--card__1 learning--card">
                    <img src={React} alt="" className="learning--image__1" />
                    <img src={Redux} alt="" className="learning--image__2" />
                    <img src={Query} alt="" className="learning--image__3" />
                    <h3 className="learning--name">React</h3>
                </div>
                <div className="col-1-of-3 learning--card__2 learning--card">
                    <img src={Jest} alt="" className="learning--image" />
                    <h3 className="learning--name">Jest</h3>
                </div>
                <div className="col-1-of-3 learning--card__3 learning--card">
                    <img src={SCSS} alt="" className="learning--image" />
                    <h3 className="learning--name">SCSS</h3>
                </div>
            </div>
        </>
    );
}
