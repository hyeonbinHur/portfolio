import Learn from '../assets/logos/learn.png';
import React from '../assets/logos/react.png';

export default function Learning() {
    return (
        <>
            <h3 className="learning--heading">
                <img src={Learn} className="learning--heading__logo" />
                Currently Learning
            </h3>
            <p className="learning--paragraph">
                While trying to complete multiple projects, I was able to
                understand myself better, identifying my strengths and
                weaknesses. I usually focused on implementing new features, but
                these days, I am striving to create solid programs. Although
                these programs may not include many features, I aim to handle
                errors as much as possible. Additionally, I am studying advanced
                CSS with SCSS, which is one of the most fundamental skills for a
                Front-End Engineer.
            </p>
            <div className="row learning--card__container">
                <div className="col-1-of-3 learning--card__1 learning--card">
                    <img
                        className="learning--image"
                        src={React}
                        alt="Ract logo"
                    />
                    <h3 className="learning--name">React</h3>
                </div>
                <div className="col-1-of-3 learning--card__2 learning--card">
                    <img
                        className="learning--image"
                        src="https://skillicons.dev/icons?i=jest&theme=light"
                        alt="Jest logo"
                    />
                    <h3 className="learning--name">Jest</h3>
                </div>
                <div className="col-1-of-3 learning--card__3 learning--card">
                    <img
                        className="learning--image"
                        src="https://skillicons.dev/icons?i=ts&theme=light"
                        alt="TypeScript logo"
                    />
                    <h3 className="learning--name">TypeScript</h3>
                </div>
            </div>
        </>
    );
}
