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
            <h3 className="heading--tertiary experience--header">Experience</h3>
            <div className="education--container">
                <div className="education--text">
                    <p className="education--text__content">
                        Java, python, c, c++, swift, android studio, spring
                        Boot, strap, MySQL,MongoDB, Rasberry pi, Arduino uno,
                        Jupyter notebook, Machine learning, data science,
                        Matlab, bitbucket, katalon studio, katalon testOps,
                        Jenkins,
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
