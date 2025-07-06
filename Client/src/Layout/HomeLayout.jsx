import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";
import Slider from "../components/Slider";
import CardSlider from "../components/CardSlider";
import CarbideInsertSlider from "../components/CarbidInsertSlider";
import FaqSection from "../components/FAQ/FaqSection";

const HomeLayout = ({ children }) => {
  return (
    <>
      {/* Announcement bar */}
      <AnnouncementBar />

      {/* Main container */}
      <div className="flex flex-col min-h-screen">
        {/* Top header */}
        <Header />

        {/* Main banner slider */}
        <Slider />

        {/* Category and product section */}
        <section className="shop-by-categories py-5 px-4 md:px-6 lg:px-10">
          {/* Section: Categories */}
          <div className="mb-6">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4">
              Shop By Categories
            </h2>
            <CardSlider />
          </div>

          {/* Section: Carbide Inserts */}
          <div className="mb-6">
            <CarbideInsertSlider />
          </div>

          {/* Banner Image */}
          <div className="my-6">
            <img
              src="ads/SpinWheel.webp"
              alt="Promotional Spin Wheel"
              className="w-full max-w-6xl mx-auto rounded-lg shadow-md object-contain"
            />
          </div>
          {/* FAQ Section */}
          <div className="min-h-screen bg-gray-50">
            <FaqSection />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeLayout;
