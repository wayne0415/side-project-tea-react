import ButtonPage from "./components/ButtonPage";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Nav from "./components/Nav";
import Filter from "./components/Filter";
import { Slogan1, Slogan2, Slogan3 } from "./components/Slogans";
import Form from "./components/Form";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Nav />
            <Header />
            <Introduce />
            <Slogan1 />
            <ButtonPage />
            <Slogan2 />
            <Filter />
            <Slogan3 />
            <Form />
            <Footer />
            <BackToTopButton />
        </>
    );
}

export default App;
