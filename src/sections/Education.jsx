/* eslint-disable react/no-unescaped-entities */
import Android from '../assets/logos/androidstudio.png';
import AWS from '../assets/logos/aws.png';
import Java from '../assets/logos/java.png';
import JS from '../assets/logos/js.png';
import React from '../assets/logos/react.png';
import RMIT from '../assets/logos/rmit.png';
import SASS from '../assets/logos/sass.png';
import Spring from '../assets/logos/spring.png';
// import Swift from '../assets/logos/swift.png';
export default function Education() {
    return (
        <>
            <h3 className="heading--tertiary">Eduation & Motivation</h3>
            <div className="education--container">
                <div className="education--text">
                    <p className="education--text__content">
                        Hello, I'm currently a fourth-year Software Engineering
                        student at RMIT Vietnam, having studied at RMIT
                        Melbourne until February this year. Studying at two
                        campuses has given me a broad range of technical and
                        cultural experiences. Over the past four years, I've
                        gained experience in developing iOS and Android mobile
                        applications, data science, cloud systems, embedded
                        systems, full-stack Java Springboot, and quality
                        assurance testing. These experiences have helped me find
                        my areas of interest, broaden my perspective, and
                        enhance my creative thinking and problem-solving skills.
                        Among all these experiences, I found front-end
                        development to be the most fascinating. I enjoy
                        improving user experiences and seeing the tangible
                        upgrades in systems. Although there are many front-end
                        frameworks, I am particularly focused on mastering
                        React. I only have two courses left to graduate, one of
                        which is an internship. This internship can be waived if
                        I have equivalent industry experience. One of the main
                        reasons I am seeking job opportunities in Australia is
                        because my time studying there left me with cherished
                        memories. Collaborating with diverse people helped me
                        learn advanced developer mindsets and cultures and
                        broadened my technical knowledge. I am eager to continue
                        gaining experience and knowledge, aiming to grow as a
                        more advanced developer. This desire to keep improving
                        is what drives my aspiration to work as a developer in
                        Australia.
                    </p>
                </div>

                <div className="education--animation">
                    <div className="row--md">
                        <div className="col-1-of-4 education--image__container__android">
                            <img
                                src={Android}
                                alt=""
                                className="education--image__content"
                            />
                        </div>
                        <div className="col-1-of-4 education--image__container__aws">
                            <img
                                src={AWS}
                                alt=""
                                className="education--image__content"
                            />
                        </div>
                        <div className="col-1-of-4 education--image__container__java">
                            <img
                                src={Java}
                                alt=""
                                className="education--image__content__java"
                            />
                        </div>
                        <div className="col-1-of-4 education--image__container__js">
                            <img
                                src={JS}
                                alt=""
                                className="education--image__content"
                            />
                        </div>
                    </div>
                    <div className="row--md">
                        <div className="col-1-of-4 education--image__container__react">
                            <img
                                src={React}
                                alt=""
                                className="education--image__content"
                            />
                        </div>
                        <div className="col-1-of-4 education--image__container__rmit">
                            <img
                                src={RMIT}
                                alt=""
                                className="education--image__content"
                            />
                        </div>
                        <div className="col-1-of-4 education--image__container__sass">
                            <img
                                src={SASS}
                                alt=""
                                className="education--image__content"
                            />
                        </div>
                        <div className="col-1-of-4 education--image__container__spring ">
                            <img
                                src={Spring}
                                alt=""
                                className="education--image__content"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
