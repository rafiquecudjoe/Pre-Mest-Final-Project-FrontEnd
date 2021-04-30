import Banner from "./pages/Banner/Banner";
import Reviews from "./Reviews/Reviews";
import Footer from "./Footer/Footer";
import Features from "./Features/Features";
import FAQ from './F.A.Q/FAQ'
import SendNow from "./pages/SendNow/SendNow"

const LandingPage = () => {
  return (
    <div >
      <main>
        <Banner />
        <Features/>
        <Reviews />
        <FAQ />
        <SendNow/>
        <Footer/>
      </main>
    </div>
  );
};

export default LandingPage;
