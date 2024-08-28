import AWS from '../assets/logos/aws.png';
import JS from '../assets/logos/js.png';
import React from '../assets/logos/react.png';
import SASS from '../assets/logos/sass.png';
import Fire from '../assets/logos/firebase.png';
import Pg from '../assets/logos/pg.png';
import query from '../assets/logos/query.svg';
import redux from '../assets/logos/redux.png';
export default function Skills() {
    return (
        <>
            <h3 className="heading--tertiary skills--heading">Skills</h3>
            <div className="skills--container">
                <div className="skills--card ">
                    <img src={React} alt="" className="skills--image" />
                    <h3 className="skills--name">React</h3>
                </div>
                <div className="skills--card ">
                    <img src={redux} alt="" className="skills--image" />
                    <h3 className="skills--name">Redux</h3>
                </div>
                <div className="skills--card">
                    <img src={query} alt="" className="skills--image" />
                    <h3 className="skills--name">React Query</h3>
                </div>
                <div className="skills--card ">
                    <img src={JS} alt="" className="skills--image" />
                    <h3 className="skills--name">JavaScript</h3>
                </div>
                <div className="skills--card ">
                    <img src={SASS} alt="" className="skills--image" />
                    <h3 className="skills--name">SCSS</h3>
                </div>
                <div className="skills--card ">
                    <img src={AWS} alt="" className="skills--image" />
                    <h3 className="skills--name">AWS</h3>
                </div>
                <div className="skills--card ">
                    <img src={Fire} alt="" className="skills--image" />
                    <h3 className="skills--name">Firebase</h3>
                </div>
                <div className="skills--card ">
                    <img src={Pg} alt="" className="skills--image" />
                    <h3 className="skills--name">postgreSQL</h3>
                </div>
            </div>
        </>
    );
}
