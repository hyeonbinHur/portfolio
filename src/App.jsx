import './styles/index.scss';
import Header from './sections/Header';
import AboutMe from './sections/AboutMe';
import Education from './sections/Education';
import Skills from './sections/Skills';

function App() {
    return (
        <>
            <section className="header">
                <Header />
            </section>
            <section className="about">
                <AboutMe />
            </section>
            <section className="education">
                <Education />
            </section>
            <section className="skills">
                <Skills />
            </section>
        </>
    );
}

export default App;
