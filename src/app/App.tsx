import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { PopularYatras } from "./components/popular-yatras";
import { TourPackages } from "./components/tour-packages";
import { AboutUs } from "./components/about-us";
import { WhyChooseUs } from "./components/why-choose-us";
import { VideoTestimonials } from "./components/video-testimonials";
import { Testimonials } from "./components/testimonials";
import { FAQ } from "./components/faq";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { PackageDetail } from "./components/package-detail";
import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularYatras />
      <TourPackages />
      <AboutUs />
      <WhyChooseUs />
      <VideoTestimonials />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/package/:packageId" element={<PackageDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
