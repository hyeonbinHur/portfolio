import './styles/index.scss';
import Header from './sections/Header';
// import AboutMe from './sections/AboutMe';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Learning from './sections/Learning';
import Footer from './sections/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {},
        mutations: {},
    },
});
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <>
                <div className="animation--right"></div>
                <div className="animation--bottom"></div>
                <main className="animation--left">
                    <section className="header">
                        <Header />
                    </section>
                    <section className="projects">
                        <Projects />
                    </section>
                    {/* <section className="about">
                        <AboutMe />
                    </section> */}
                    <section className="skills">
                        <Skills />
                    </section>
                    <section className="education">
                        <Education />
                    </section>
                    <section className="currently-learning">
                        <Learning />
                    </section>
                    <footer className="footer">
                        <Footer />
                    </footer>
                </main>
            </>
        </QueryClientProvider>
    );
}

export default App;
