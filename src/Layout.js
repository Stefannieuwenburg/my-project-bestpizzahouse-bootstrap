import HomeAppBar from "./components/HomeAppBar";
import Hero from "./components/pages/Hero";
import Contact from "./components/pages/Contact";
import SaleBanner from "./components/pages/SaleBanner";
import CardBanner from "./components/pages/CardBanner"
import Footer from "./components/pages/Footer"


const Layout = () => {
    return (
        <div>
            <HomeAppBar />
            <Hero />
            <CardBanner/>
            < SaleBanner/>
            <Contact />
            <Footer/>
        </div>
    );
};

export default Layout;
