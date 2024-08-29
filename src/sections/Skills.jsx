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
                    <img
                        src={React}
                        alt="React logo"
                        className="skills--image"
                    />
                    <h3 className="skills--name">React</h3>
                </div>
                <div className="skills--card ">
                    <img
                        src={redux}
                        alt="Redux logo"
                        className="skills--image"
                    />
                    <h3 className="skills--name">Redux</h3>
                </div>
                <div className="skills--card">
                    <img
                        src={query}
                        alt="React Query logo"
                        className="skills--image"
                    />
                    <h3 className="skills--name">React Query</h3>
                </div>
                <div className="skills--card ">
                    <img
                        src={JS}
                        alt="JavaScript logo"
                        className="skills--image"
                    />
                    <h3 className="skills--name">JavaScript</h3>
                </div>
                <div className="skills--card ">
                    <img src={SASS} alt="SASS logo" className="skills--image" />
                    <h3 className="skills--name">SASS</h3>
                </div>
                <div className="skills--card ">
                    <img src={AWS} alt="AWS logo" className="skills--image" />
                    <h3 className="skills--name">AWS</h3>
                </div>
                <div className="skills--card ">
                    <img
                        src={Fire}
                        alt="Firebase logo"
                        className="skills--image"
                    />
                    <h3 className="skills--name">Firebase</h3>
                </div>
                <div className="skills--card ">
                    <img
                        src={Pg}
                        alt="PostgrSQL logo"
                        className="skills--image"
                    />
                    <h3 className="skills--name">PostgreSQL</h3>
                </div>
            </div>
        </>
    );
}
