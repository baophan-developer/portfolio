import { Fragment } from "react/jsx-runtime";
import "./app.sass";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import { NameLinkIds, ParallaxType } from "./constants";

function App() {
    return (
        <Fragment>
            <section id={NameLinkIds.Homagpage}>
                <Navbar />
                <Hero />
            </section>
            <section id={NameLinkIds.Services}>
                <Parallax type={ParallaxType.Introduce} />
            </section>
            <section>Servives</section>
            <section id={NameLinkIds.Portfolio}>
                <Parallax type={ParallaxType.Education} />
            </section>
            <section>Portfolio1</section>
            <section>Portfolio2</section>
            <section>Portfolio3</section>
            <section id={NameLinkIds.Contact}>Contact</section>
        </Fragment>
    );
}

export default App;
