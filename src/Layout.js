import HomeAppBar from "./components/HomeAppBar";
import Hero from "./components/pages/Hero";
import Contact from "./components/pages/Contact";
import SaleBanner from "./components/pages/SaleBanner";
import CardBanner from "./components/pages/CardBanner"



const Layout = () => {
    return (
        <div>
            <HomeAppBar />
            <Hero />
            <CardBanner/>
            < SaleBanner/>
            <Contact />
            
        </div>
    );
};

export default Layout;
