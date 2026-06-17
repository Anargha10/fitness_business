import Hero from "./components/Hero";
import TrustStrip from "./components/Truststrip";
import Transformation from "./components/Transformation";
import Philosophy from "./components/Philosophy";
import CoursePreview from "./components/Coursepreview";
import Coaching from "./components/Coaching";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <TrustStrip/>
      <Transformation/>
      <Philosophy/>
      <CoursePreview/>
      <Coaching/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;