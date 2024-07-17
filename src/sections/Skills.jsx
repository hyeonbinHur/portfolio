import AWS from '../assets/logos/aws.png';
import JS from '../assets/logos/js.png';
import React from '../assets/logos/react.png';
import SASS from '../assets/logos/sass.png';

import Fire from '../assets/logos/firebase.png';
import Pg from '../assets/logos/pg.png';
import HTML from '../assets/logos/html.png';
import Tailwind from '../assets/logos/tailwind.png';

export default function Skills() {
    return (
        <>
            <h3 className="heading--tertiary">Front-End Skills</h3>
            <div className="skills--container">
                <div className="row">
                    <div className="col-1-of-4 skills--card">
                        <img src={HTML} alt="" className="skills--image" />
                        <h3 className="skills--name">HTML</h3>
                    </div>
                    <div className="col-1-of-4 skills--card ">
                        <img src={JS} alt="" className="skills--image" />
                        <h3 className="skills--name">JavaScript</h3>
                    </div>
                    <div className="col-1-of-4 skills--card ">
                        <img src={SASS} alt="" className="skills--image" />
                        <h3 className="skills--name">SASS</h3>
                    </div>
                    <div className="col-1-of-4 skills--card ">
                        <img src={Tailwind} alt="" className="skills--image" />
                        <h3 className="skills--name">Tailwind</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1-of-4 skills--card ">
                        <img src={React} alt="" className="skills--image" />
                        <h3 className="skills--name">React</h3>
                    </div>
                    <div className="col-1-of-4 skills--card ">
                        <img src={AWS} alt="" className="skills--image" />
                        <h3 className="skills--name">AWS</h3>
                    </div>
                    <div className="col-1-of-4 skills--card ">
                        <img src={Fire} alt="" className="skills--image" />
                        <h3 className="skills--name">Firebase</h3>
                    </div>
                    <div className="col-1-of-4 skills--card ">
                        <img src={Pg} alt="" className="skills--image" />
                        <h3 className="skills--name">postgreSQL</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
