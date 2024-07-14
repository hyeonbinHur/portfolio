import './styles/index.scss';
import Header from './sections/Header';
import AboutMe from './sections/AboutMe';

function App() {
    return (
        <>
            <section className="header">
                <Header />
            </section>
            <section className="about">
                <AboutMe />
            </section>
        </>
    );
}

export default App;
