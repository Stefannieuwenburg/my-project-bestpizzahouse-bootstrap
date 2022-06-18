import HomeNavbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/pages/Gallery"


const Layout = () => {
    return (
        <div>
            <HomeNavbar />
            <Header />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Layout;
