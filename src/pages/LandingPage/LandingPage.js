import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Features from "./Features/Features";
import FAQ from './F.A.Q/FAQ'


const LandingPage = () => {
  return (
    <div >
      <main>
        <Banner />
        <Features/>
   
        <FAQ />
        <Footer/>
      </main>
    </div>
  );
};

export default LandingPage;
